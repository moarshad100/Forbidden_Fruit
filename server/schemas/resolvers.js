const { Member } = require("../models");

const resolvers = {
  Query: {
    allMembers: async () => {
      return await Member.find({});
    },
  },
  Mutation: {
    addMembers: async (parent, { name }) => {
      return Member.create({ name });
    },
  },
};

module.exports = resolvers;
