import React, { PureComponent } from 'react'
import NavHeader from './NavHeader/index'
class SiteLayout extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <>
        <NavHeader />
        {children}
      </>
    );
  }
}

export default SiteLayout;