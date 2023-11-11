const typeDefs = `
  type Member {
    _id: ID
    name: String    
    gender: String
    father:String
    mother: String
    spouse:String
    child:String
    
  }
  type Query {
    allMembers: [Member]!
    member(memberId: ID!): Member
  }
  type Mutation{
    addMembers(name:String!,father:String!,mother:String!,spouse:String!,child:String!):Member
    removeMember(_id: ID!): Member
  }
 
`;

module.exports = typeDefs;
