import gql from 'graphql-tag';

export const addOrder = gql`
    mutation addOrder ($name: String!, $phone: String!, $address: String!) {
        addOrder(
            name: $name
            phone: $phone
            address: $address
        ) {
            id
            name
            phone
            address
        }
    }
`;

export const allOrders = gql`
    query allOrders($searchTerm: String) {
        allOders(searchTerm: $searchTerm) {
            id
            name
            phone
            address
        }
    }
`;
