import { gql } from '@apollo/client';

const READ_PRODUCT_BY_ID = gql`
  query readProductById($id: ID!) {
    product(productId: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      modelCode
      colour
      imgUrl
    }
  }
`;

export default READ_PRODUCT_BY_ID;
