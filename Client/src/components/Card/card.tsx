import "./card.scss";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import Data_Card from "./Data_Card";

const CoffeeCard = () => {
  return (
    <div className="cards-container">
      {Data_Card.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-header">
            <img
              src={item.ImageProduct}
              alt="Coffee"
              className="coffee-image"
            />
            <div className="rating">
              <span className="rating-value">{item.Rating}</span>
              <FaStar className="star" />
            </div>
          </div>
          <div className="card-body">
            <div className="coffee-info">
              <h3 className="coffee-name">{item.NameProduct}</h3>
              <p className="coffee-price">{item.Price}K</p>
            </div>
            <div className="button-group">
              <button className="hot-button">Hot</button>
              <button className="cold-button">Cold</button>
              <button className="cart-button">
                <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoffeeCard;
