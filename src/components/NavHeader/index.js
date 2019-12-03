import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import './index.css'
import Logo from "../../assets/images/logo.png";

class NavHeader extends PureComponent {
  render() {
    const count = 0
    return (
      <div className="row">
        <div className="twelve columns navbar-container">
          <NavLink to="/" className="navbar-item">
            Home
          </NavLink>
          <NavLink to="/categories" className="navbar-item">
            Categories
          </NavLink>
          <NavLink to="/products" className="navbar-item">
            Products
          </NavLink>
          <div className="cart">
            <IoIosCart />
            <p>Cart</p>
            <p className="count">{count}</p>
          </div>
          <NavLink to="/myaccount" className="navbar-item">
            My Account
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavHeader;
