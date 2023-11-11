import { gql } from "@apollo/client";

export const ADD_MEMBERS = gql`
  mutation addMembers(
    $name: String!
    $father: String!
    $mother: String!
    $spouse: String!
    $child: String!
  ) {
    addMembers(
      name: $name
      father: $father
      mother: $mother
      spouse: $spouse
      child: $child
    ) {
      _id
      name
      father
      mother
      spouse
      child
    }
  }
`;

export const REMOVE_MEMBERS = gql`
  mutation removeMember($memberId: ID!) {
    removeMember(_id: $memberId) {
      _id
    }
  }
`;
