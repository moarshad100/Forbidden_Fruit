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
  }
  type Mutation{
    addMembers(name:String!):Member
  }
 
`;

module.exports = typeDefs;
