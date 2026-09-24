import { gql } from "@apollo/client";

const VERIFICAR_CODIGO = gql`
    mutation VerificarCodigo($email: String!, $code: String!) {
        verificarCodigo(email: $email, code: $code) {
        message
        user {
            email
        }
        success
        }
        }
`

const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
    }
`;

export { VERIFICAR_CODIGO, LOGIN };