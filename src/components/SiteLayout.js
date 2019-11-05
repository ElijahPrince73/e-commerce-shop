import React, { PureComponent } from 'react'
import NavHeader from './NavHeader/index'
import { Layout } from "antd";

const { Content, Footer } = Layout;

class SiteLayout extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <>
        <NavHeader />
        <Content>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </>
    );
  }
}

export default SiteLayout;