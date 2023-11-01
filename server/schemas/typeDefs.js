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
    members: [Member]    
  }
  type Mutation{
    addmembers(name:String!):Member
  }
 
`;

module.exports = typeDefs;
