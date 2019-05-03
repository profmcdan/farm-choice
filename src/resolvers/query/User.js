const { prisma } = require("../../generated/prisma-client");

const users = (root, args, context, info) => {
  return context.prisma.users();
};

const user = (root, args, context, info) => {
  return context.prisma.user({ id: args.id });
};

const Query = {
  users,
  user,
};

export default Query;
