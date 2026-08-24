import { gql } from '@apollo/client';

const NEW_VESSEL = gql`
    mutation NewVessel($input: InputVessel!) {
    newVessel(input: $input) {
        id
        }
    }
`
const EDIT_VESSEL = gql`
    mutation EditVessel($input: InputVessel!, $id: ID!) {
    editVessel(input: $input, id: $id) {
        id
        name
        tuition
        }
    }
`

const DELETE_VESSEL = gql`
    mutation DeleteVessel($deleteVesselId: ID!) {
        deleteVessel(id: $deleteVesselId)
    }
`

export { NEW_VESSEL, EDIT_VESSEL, DELETE_VESSEL }