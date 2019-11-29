import React, { PureComponent } from 'react'
import NavHeader from './NavHeader/index'
import Footer from './Footer'
class SiteLayout extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <>
        <NavHeader />
        {children}
        <Footer />
      </>
    );
  }
}

export default SiteLayout;