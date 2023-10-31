const typeDefs = `
  type Member {
    _id: ID
    name: String    
    gender: String
    
  }
  type Query {
    members: [Member]
    
  }
  mutation :{
    

  }
`;

module.exports = typeDefs;
