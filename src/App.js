import React from 'react';
import { gql } from 'apollo-boost'

import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import './App.css';

const PRODUCTS = gql`
  {
    products(search: "") {
      id
      productName
      productDescription
    }
  }
`;

const App = ({ client }) => {
  const { loading, error, data } = useQuery(PRODUCTS)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <ApolloProvider client={client}>
      <div>
        {data.products.map(({productName , productDescription}) => {
          return (
            <p>
              {productName} {productDescription}
            </p>
          );
        })}
      </div>
    </ApolloProvider>
  )
}

export default App;
