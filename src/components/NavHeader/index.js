import React, { PureComponent } from "react";
import { Menu, Icon } from "antd";

import { NavLink, Link } from "react-router-dom";
import './index.css'
import Logo from "../../assets/logo.png";

class NavHeader extends PureComponent {
  render() {
    return (
      <Menu theme="light" mode="horizontal" style={{ lineHeight: "64px" }}>
        <Menu.Item key="1" className="logo-container">
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/tours">Tours</NavLink>
        </Menu.Item>
        <Menu.Item key="3">Promotion</Menu.Item>
        <Menu.Item>How it works</Menu.Item>
        <Menu.Item key="4">
          <Icon type="shopping-cart" className="cart-icon" />{" "}
          Cart
        </Menu.Item>
        <Menu.Item key="5">My Account</Menu.Item>
      </Menu>
    );
  }
}

export default NavHeader;
