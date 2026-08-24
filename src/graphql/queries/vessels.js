import { gql } from '@apollo/client';

const GET_VESSELS = gql` 
    query GetVessels {
        getVessels {
            id
            name
            tuition
        }
    }
`

const GET_VESSEL = gql`
    query GetVessel($id: ID!) {
        getVessel(id: $id) {
            id
            name
            tuition
        }
    }
`

export { GET_VESSELS, GET_VESSEL }