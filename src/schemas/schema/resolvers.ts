const securityData = require('../../nasdaq.json');

const serverResolvers = {
  Query: {
    securities() {
      return securityData;
    },
  },
};

module.exports = serverResolvers;
