const { ApolloServer } = require('apollo-server');

const typeDefs = require('./resolvers');
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
