const { Member } = require("../models");
const resolvers = {
  Query: {
    allMembers: async () => {
      return await Member.find({});
    },
    member: async (parent, { memberId }) => {
      return await Member.findOne({ _id: memberId });
    },
  },
  Mutation: {
    addMembers: async (parent, { name, father, mother, spouse, child }) => {
      return await Member.create({ name, father, mother, spouse, child });
    },
    removeMember: async (_, { _id }) => {
      try {
        const deletedMember = await Member.findByIdAndDelete(_id);
        return deletedMember;
      } catch (error) {
        console.error("Error removing member:", error);
        throw new Error("Failed to remove member");
      }
    },
  },
};
module.exports = resolvers;
