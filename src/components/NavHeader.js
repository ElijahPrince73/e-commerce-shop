import React, { PureComponent } from 'react'

import { Layout, Menu, Icon } from "antd";

const { Header } = Layout;

class NavHeader extends PureComponent {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Tours</Menu.Item>
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
