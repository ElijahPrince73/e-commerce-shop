import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import TOURS from '../graphql/queries/tours'


const Tours  = () => {
  const { loading, error, data } = useQuery(TOURS);
  
  // if (loading) return (

  // );

  // if (error) return <p>Error :(</p>;
  
  // return data.products.map(({ id, productName, productDescription }) => (
  // ));
}

export default Tours;