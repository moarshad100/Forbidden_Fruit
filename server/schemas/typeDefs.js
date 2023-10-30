const typeDefs = `
  type Member {
    _id: ID
    name: String    
    gender: String
    
  }
  type Query {
    members: [Member]
    
  }
`;

module.exports = typeDefs;
