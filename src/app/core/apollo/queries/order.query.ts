import gql from 'graphql-tag';

export const allOrders = gql`
  query allOrders {
    allOrders {
      id
      name
      phone
      address
    }
  }
`;

export const addOrder = gql`
  mutation addOrder($name: String!, $phone: String!, $address: String!) {
    addOrder(name: $name, phone: $phone, address: $address) {
      id
      name
      phone
      address
    }
  }
`;
