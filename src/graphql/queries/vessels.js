import { gql } from '@apollo/client';

const GET_VESSELS = gql` 
    query GetVessels {
        getVessels {
            id
            name
            tuition
            inspections {
                id
                code
            }
        }
    }
`

const GET_VESSEL = gql`
    query GetVessel($getVesselId: ID!) {
    getVessel(id: $getVesselId) {
        id
        name
        tuition
        inspections {
            id
            code
            date
            status
            type
            inform
            reason
            previousInspection {
                id
            }
        }
    }
}
`

export { GET_VESSELS, GET_VESSEL }