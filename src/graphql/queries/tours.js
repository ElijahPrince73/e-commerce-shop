import { gql } from "apollo-boost";

const products = gql`
  {
    products(search: "") {
      id
      productName
      productDescription
      price
    }
  }
`;

export default products