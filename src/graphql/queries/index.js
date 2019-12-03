import { gql } from "apollo-boost";

const PRODUCTS = gql`
  {
    products(search: "") {
      id
      productName
      productDescription
      price
      images {
        id
        url
      }
    }
  }
`;

const CATEGORIES = gql`
  {
      categories {
        id
        categoryName
    }
  }
`

export { 
  PRODUCTS,
  CATEGORIES
}