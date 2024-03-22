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

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")

      .then((products) => {
        setProducts(products.data);
        console.log(products);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="cardsProduct-container">
      {products.map((product) => (
        <div className="card" key={product._id}>
          <div className="card-header">
            <img src={product.img} alt="Coffee" className="coffee-image" />
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
    </div>
  );
};

export default ProductCard;
