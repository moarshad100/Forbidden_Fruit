const { Member } = require("../models");

const resolvers = {
  Query: {
    allMembers: async () => {
      return await Member.find({});
    },
    member: async (parent, { memberId }) => {
      return Member.findOne({ _id: memberId });
    },
  },
  Mutation: {
    addMembers: async (parent, { name }) => {
      return Member.create({ name });
    },
  },
};

module.exports = resolvers;
