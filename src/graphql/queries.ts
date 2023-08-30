import {gql} from 'graphql-tag';

export const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
    products @rest(type: "[Product]" path: "products") {
      id
      title
      price
      description
      category
      image
      rating (name: "Rating") {
        rate
        count
      }
    }
  }
`;