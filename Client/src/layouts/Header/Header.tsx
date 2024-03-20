import "./Header.scss";
import logo from "../logo_coffee.svg";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";

function Header() {
  return (
    <div className="navbar">
      <img src={logo} alt="Coffee Logo" className="coffee-logo" />
      <ul>
        <li>About us</li>
        <li>Our Product</li>
        <li>Delivery</li>
      </ul>

      <div className="search-box">
        <CiSearch className="icon-search" />
        <input type="text" placeholder="Cappuccino" />
      </div>

      <FaCartPlus className="bt-card" />
    </div>
  );
}

export default Header;
