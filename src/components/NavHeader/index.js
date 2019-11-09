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
          <NavLink to="/" className="logo-container">
            <div>
              <img src={Logo} alt="logo" />
            </div>
          </NavLink>
          <NavLink to="/" className="navbar-item">
            Home
          </NavLink>
          <NavLink to="/tour" className="navbar-item">
            Tours
          </NavLink>
          <NavLink to="/promotion" className="navbar-item">
            Promotion
          </NavLink>
          <NavLink to="/howitworks" className="navbar-item">
            How it Works
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
