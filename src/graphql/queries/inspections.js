import { gql } from '@apollo/client';

const GET_INSPECTIONS = gql`
query GetInspections {
  getInspections {
      id
      
      vessel {
        name
        tuition
      }
    previousInspection {
            code
            date
          }
    inform
    date
    code
    reason
    type
    status
  }
}
`;

const GET_INSPECTION = gql`
query GetInspection($id: ID!) {
  getInspection(id: $id) {
    id
    vessel {
      name
      tuition
    }
    previousInspection {
      code
      date
    }
    inform
    date
    code
    reason
    type
    status
  }
}
`;

export { GET_INSPECTIONS, GET_INSPECTION };