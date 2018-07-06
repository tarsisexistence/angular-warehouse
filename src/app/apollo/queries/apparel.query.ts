import gql from 'graphql-tag';

export const allApparel = gql`
    query allApparel($searchTerm: String) {
        allApparel(searchTerm: $searchTerm) {
            id
            title
            attribute
            color
            description
            price
            image
            type
        }
    }
`;
