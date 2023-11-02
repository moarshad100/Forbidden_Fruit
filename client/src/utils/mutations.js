import { gql } from "@apollo/client";

export const ADD_MEMBERS = gql`
  mutation addmembers(name: $name) {
    _id
    name
    
  }
`;
