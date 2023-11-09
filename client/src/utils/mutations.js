import { gql } from "@apollo/client";

export const ADD_MEMBERS = gql`
  mutation addMembers($name: String!) {
    addMembers(name: $name) {
      _id
      name
    }
  }
`;
