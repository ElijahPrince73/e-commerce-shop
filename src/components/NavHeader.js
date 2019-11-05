import React, { PureComponent } from 'react'
import { Layout, Menu, Icon } from "antd";

import { Link } from 'react-router-dom'
const { Header } = Layout;

class NavHeader extends PureComponent {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Menu.Item><Link to="/">Home</Link></Menu.Item>
            <Menu.Item><Link to="/tours">Tours</Link></Menu.Item>
            <Menu.Item>Promotion</Menu.Item>
            <Menu.Item>How it works</Menu.Item>
            <Menu.Item>
              <Icon type="shopping-cart" />{" "}
              Cart
            </Menu.Item>
            <Menu.Item>My Account</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}

export default NavHeader;
