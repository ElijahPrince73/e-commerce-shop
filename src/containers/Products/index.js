import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { PRODUCTS } from '../../graphql/queries'
import SimpleCard from '../../components/Cards/SimpleCard'

const Products = () => {
  const { loading, error, data } = useQuery(PRODUCTS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <div className="top-package-tours-container row">
      <div className="twelve columns text-center header-content">
        <hr />
        <h2 className="text-bold header">Top Products</h2>
      </div>
      <div className="eleven columns">
        {data.products.map(({ id, productName, price }) => {
          return (
            <SimpleCard productName={productName} price={price} key={id} />
          );
        })}
      </div>
    </div>
  );
  
}

export default Products