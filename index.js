// let's go!
const { GraphQLServer } = require("graphql-yoga");
require("dotenv").config({ path: ".env" });
const { prisma } = require("./generated/prisma-client/");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const User = require("./resolvers/User");
const Post = require("./resolvers/Post");

const resolvers = {
  Query,
  Mutation,
};

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, prisma }),
  });
}

const createServer = require("./src/createServer");
// const db = require("./src/db");

const server = createServer();

// TODO Use express middleware to handle cookies (JWT)
// TODO Use express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now runnit on:  🚀 http://localhost:${deets.port}`);
  },
);
