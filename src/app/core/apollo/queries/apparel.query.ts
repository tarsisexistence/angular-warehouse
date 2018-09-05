import gql from 'graphql-tag';

export const allApparel = gql`
    query allApparel {
        allApparel {
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
