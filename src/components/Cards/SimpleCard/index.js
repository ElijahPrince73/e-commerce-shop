import React from 'react'
import { TiStar } from "react-icons/ti";
import { IconContext } from "react-icons";
import './index.css'
const SimpleCard = ({ productName, price }) => {
  return (
    <div className="simple-card-container three columns">
      <div className="simple-card-content">
        <h3 className="product-name">{productName}</h3>
        <IconContext.Provider
          value={{ className: "star" }}
        >
          <>
            <TiStar />
            <TiStar />
            <TiStar />
            <TiStar />
            <TiStar />
          </>
        </IconContext.Provider>
        <p className="m-0">price: {price}$</p>
      </div>
    </div>
  );
}

export default SimpleCard