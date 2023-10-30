const { Member } = require("../models");

const resolvers = {
  Query: {
    members: async () => {
      return await Member.find({});
    },
  },
};

module.exports = resolvers;
