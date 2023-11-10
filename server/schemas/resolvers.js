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
    addMembers: async (parent, { name, father, mother, spouse, child }) => {
      return await Member.create({ name, father, mother, spouse, child });
    },
  },
};

module.exports = resolvers;
