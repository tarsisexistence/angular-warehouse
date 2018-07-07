import gql from 'graphql-tag';

export const user = gql`
    query user($id: String) {
        user(id: $id) {
            id
            email
            catchPhrase
        }
    }
`;

export const signUp = gql`
    mutation signUp ($email: String!, $password: String!) {
        signUp(
            email: $email
            password: $password
        ) {
            id
            email
            password
        }
    }
`;

export const setCatchPhrase = gql`
    mutation setCatchPhrase ($id: String!, $catchPhrase: String!) {
        setCatchPhrase(
            id: $id
            catchPhrase: $catchPhrase
        ) {
            id
            email
            catchPhrase
        }
    }
`;