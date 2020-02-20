import gql from 'graphql-tag';

export const allApparel = gql`
  query allApparel {
    allApparel {
      id
      title
      collection
      colors
      price
      image
      type
    }
  }
`;
