"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Farmer",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "Farm",
    embedded: false
  },
  {
    name: "Store",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "FARM_SIZE",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/daniel-ale-da7716/farm-choice/dev`
});
exports.prisma = new exports.Prisma();
