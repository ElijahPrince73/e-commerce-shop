import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { CATEGORIES } from '../../graphql/queries'
import SimpleCard from '../../components/Cards/SimpleCard'

const Categories = () => {
  const { loading, error, data } = useQuery(CATEGORIES)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <div className="top-package-tours-container row">
      <div className="twelve columns text-center header-content">
        <hr />
        <h2 className="text-bold header">Categories</h2>
      </div>
      <div className="eleven columns">
        {data.categories.map(({ id, categoryName }) => {
          return (
            <SimpleCard productName={categoryName} key={id} />
          );
        })}
      </div>
    </div>
  );
  
}

export default Categories