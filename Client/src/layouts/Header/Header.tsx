import "./Header.scss";
import logo from "../logo_coffee.svg";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Coffee Logo" className="coffee-logo" />
      </Link>

      <ul>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/products">Our Product</Link>
        </li>
        <li>
          <Link to="/service">Delivery</Link>
        </li>
      </ul>

      <div className="search-box">
        <CiSearch className="icon-search" />
        <input type="text" placeholder="Cappuccino" />
      </div>

      <Link to="/cart">
        <FaCartPlus className="bt-card" />
      </Link>
    </div>
  );
}

export default Header;
