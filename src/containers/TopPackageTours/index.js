import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import TOURS from '../../graphql/queries/tours'
import SimpleCard from '../../components/Cards/SimpleCard'

const TopPackageTours = () => {
  const { loading, error, data } = useQuery(TOURS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="top-package-tours-container row">
      <div className="twelve columns text-center header-content">
        <hr />
        <h2 className="text-bold header">Top packaged tours</h2>
        <p className="container">
          We curated the most popular package tours for you to choose
        </p>
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

export default TopPackageTours