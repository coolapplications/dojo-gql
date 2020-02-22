const { ApolloServer } = require('apollo-server');
const PostAPI = require('./DataSources/PostAPI');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ PostAPI: new PostAPI() })
});
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
