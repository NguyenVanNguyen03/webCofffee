import { useState, useEffect } from "react";
import "./ProductCard.scss";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import axios from "axios";

interface Product {
  _id: string;
  img: string;
  rating: number;
  name: string;
  content: string;
  price: number;
}

const ProductCard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [visibleProductCount, setVisibleProductCount] = useState<number>(6);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        setProducts(response.data);
        setDisplayedProducts(response.data.slice(0, visibleProductCount));
      })
      .catch((error) => console.log(error));
  }, [visibleProductCount]);

  const handleShowMore = () => {
    setVisibleProductCount(visibleProductCount + 6);
  };

  return (
    <div className="cardsProduct-container">
      {displayedProducts.map((product) => (
        <div className="card" key={product._id}>
          <div className="card-header">
            <img src={product.img} alt="ảnh coffee" className="coffee-image" />
            <div className="rating">
              <span className="rating-value">{product.rating}</span>
              <FaStar className="star" />
            </div>
          </div>
          <div className="card-body">
            <div className="coffee-info">
              <h3 className="coffee-name">{product.name}</h3>
              <p className="coffee-price">{product.price}K</p>
            </div>
            <div className="content-and-button">
              <p>{product.content}</p>
              <div className="button-group-product">
                <button className="cart-button">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {products.length > displayedProducts.length && (
        <button className="more-button" onClick={handleShowMore}>
          More
        </button>
      )}
    </div>
  );
};

export default ProductCard;
