import { gql } from '@apollo/client';

const GET_VESSELS = gql` 
    query GetVessels {
        getVessels {
            id
            name
            tuition
            inspections {
                id
            }
        }
    }
`

const GET_VESSEL = gql`
    query GetVessel($id: ID!) {
        getVessel(id: $id) {
            id
            name
            inspections
            {
                id
            }
        }
    }
`

export { GET_VESSELS, GET_VESSEL }