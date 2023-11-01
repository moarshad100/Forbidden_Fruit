const { Member } = require("../models");

const resolvers = {
  Query: {
    members: async () => {
      return await Member.find({});
    },
  },
  Mutation: {
    addmembers: async (parent, { name }) => {
      return Member.create({ name });
    },
  },
};

module.exports = resolvers;
