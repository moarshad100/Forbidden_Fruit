import { gql } from "@apollo/client";

export const QUERY_MEMBERS = gql`
  query allMembers {
    allMembers {
      _id
      name
      gender
      father
      mother
      spouse
      child
    }
  }
`;
export const QUERY_SINGLE_MEMBER = gql`
  query singleMember($memberId: ID!) {
    member(memberId: $memberId) {
      _id
      name
      gender
      father
      mother
      spouse
      child
    }
  }
`;
