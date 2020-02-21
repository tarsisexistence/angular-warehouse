import gql from 'graphql-tag';

export const allApparel = gql`
  query allApparel {
    allApparel {
      id
      title
      colors
      price
      image
      type
    }
  }
`;
