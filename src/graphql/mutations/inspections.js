import { gql } from "@apollo/client";

const DELETE_INSPECTION = gql`
mutation DeleteInspection($deleteInspectionId: ID!) {
    deleteInspection(id: $deleteInspectionId)
}
`

const EDIT_INSPECTION = gql`
mutation EditInspection($editInspectionId: ID!, $input: InputInspection!) {
  editInspection(id: $editInspectionId, input: $input) {
  id  
  }
}
`

const CREATE_INSPECTION = gql`
mutation CreateInspection($input: InputInspection!) {
  createInspection(input: $input) {
    id
  }
}
`

export {DELETE_INSPECTION, EDIT_INSPECTION, CREATE_INSPECTION};