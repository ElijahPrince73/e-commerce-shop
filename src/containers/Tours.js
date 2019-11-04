import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Card }  from 'antd'

import TOURS from '../graphql/queries/tours'
const { Meta } = Card


const Tours  = () => {
  const { loading, error, data } = useQuery(TOURS);
  
  if (loading) return (
    <Card hoverable loading={loading}>
      <Meta title="Tour" description="tour" />
    </Card>
  );

  if (error) return <p>Error :(</p>;
  
  return data.products.map(({ id, productName, productDescription }) => (
    <Card hoverable key={id} loading={loading}>
      <Meta title={productName} description={productDescription} />
    </Card>
  ));
}

export default Tours;