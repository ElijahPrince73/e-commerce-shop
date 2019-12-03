import React from 'react'
import Categories from "../../containers/Categories";
import Products from '../../containers/Products'

const Home = () => {
  return (
    <div className="row">
      <div className="twelve columns">
        <Categories />
        <Products />
      </div>
    </div>
  );
}

export default Home