module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.30.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateFarm {
  count: Int!
}

type AggregateFarmer {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateStore {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Farm {
  id: ID!
  owner: Farmer
  location: Location
  size: String
}

type FarmConnection {
  pageInfo: PageInfo!
  edges: [FarmEdge]!
  aggregate: AggregateFarm!
}

input FarmCreateInput {
  id: ID
  owner: FarmerCreateOneInput
  location: LocationCreateOneInput
  size: String
}

type FarmEdge {
  node: Farm!
  cursor: String!
}

type Farmer {
  id: ID!
  title: String!
  firstName: String!
  lastName: String!
  alias: String!
  phone: String!
  email: String
  address: String
  image: String
}

type FarmerConnection {
  pageInfo: PageInfo!
  edges: [FarmerEdge]!
  aggregate: AggregateFarmer!
}

input FarmerCreateInput {
  id: ID
  title: String!
  firstName: String!
  lastName: String!
  alias: String!
  phone: String!
  email: String
  address: String
  image: String
}

input FarmerCreateOneInput {
  create: FarmerCreateInput
  connect: FarmerWhereUniqueInput
}

type FarmerEdge {
  node: Farmer!
  cursor: String!
}

enum FarmerOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  alias_ASC
  alias_DESC
  phone_ASC
  phone_DESC
  email_ASC
  email_DESC
  address_ASC
  address_DESC
  image_ASC
  image_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FarmerPreviousValues {
  id: ID!
  title: String!
  firstName: String!
  lastName: String!
  alias: String!
  phone: String!
  email: String
  address: String
  image: String
}

type FarmerSubscriptionPayload {
  mutation: MutationType!
  node: Farmer
  updatedFields: [String!]
  previousValues: FarmerPreviousValues
}

input FarmerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FarmerWhereInput
  AND: [FarmerSubscriptionWhereInput!]
  OR: [FarmerSubscriptionWhereInput!]
  NOT: [FarmerSubscriptionWhereInput!]
}

input FarmerUpdateDataInput {
  title: String
  firstName: String
  lastName: String
  alias: String
  phone: String
  email: String
  address: String
  image: String
}

input FarmerUpdateInput {
  title: String
  firstName: String
  lastName: String
  alias: String
  phone: String
  email: String
  address: String
  image: String
}

input FarmerUpdateManyMutationInput {
  title: String
  firstName: String
  lastName: String
  alias: String
  phone: String
  email: String
  address: String
  image: String
}

input FarmerUpdateOneInput {
  create: FarmerCreateInput
  update: FarmerUpdateDataInput
  upsert: FarmerUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: FarmerWhereUniqueInput
}

input FarmerUpsertNestedInput {
  update: FarmerUpdateDataInput!
  create: FarmerCreateInput!
}

input FarmerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  alias: String
  alias_not: String
  alias_in: [String!]
  alias_not_in: [String!]
  alias_lt: String
  alias_lte: String
  alias_gt: String
  alias_gte: String
  alias_contains: String
  alias_not_contains: String
  alias_starts_with: String
  alias_not_starts_with: String
  alias_ends_with: String
  alias_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  AND: [FarmerWhereInput!]
  OR: [FarmerWhereInput!]
  NOT: [FarmerWhereInput!]
}

input FarmerWhereUniqueInput {
  id: ID
}

enum FarmOrderByInput {
  id_ASC
  id_DESC
  size_ASC
  size_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FarmPreviousValues {
  id: ID!
  size: String
}

type FarmSubscriptionPayload {
  mutation: MutationType!
  node: Farm
  updatedFields: [String!]
  previousValues: FarmPreviousValues
}

input FarmSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FarmWhereInput
  AND: [FarmSubscriptionWhereInput!]
  OR: [FarmSubscriptionWhereInput!]
  NOT: [FarmSubscriptionWhereInput!]
}

input FarmUpdateInput {
  owner: FarmerUpdateOneInput
  location: LocationUpdateOneInput
  size: String
}

input FarmUpdateManyMutationInput {
  size: String
}

input FarmWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  owner: FarmerWhereInput
  location: LocationWhereInput
  size: String
  size_not: String
  size_in: [String!]
  size_not_in: [String!]
  size_lt: String
  size_lte: String
  size_gt: String
  size_gte: String
  size_contains: String
  size_not_contains: String
  size_starts_with: String
  size_not_starts_with: String
  size_ends_with: String
  size_not_ends_with: String
  AND: [FarmWhereInput!]
  OR: [FarmWhereInput!]
  NOT: [FarmWhereInput!]
}

input FarmWhereUniqueInput {
  id: ID
}

type Location {
  id: ID!
  longitude: Float!
  latitude: Float!
  address: String
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  id: ID
  longitude: Float!
  latitude: Float!
  address: String
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  longitude_ASC
  longitude_DESC
  latitude_ASC
  latitude_DESC
  address_ASC
  address_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationPreviousValues {
  id: ID!
  longitude: Float!
  latitude: Float!
  address: String
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdateDataInput {
  longitude: Float
  latitude: Float
  address: String
}

input LocationUpdateInput {
  longitude: Float
  latitude: Float
  address: String
}

input LocationUpdateManyMutationInput {
  longitude: Float
  latitude: Float
  address: String
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createFarm(data: FarmCreateInput!): Farm!
  updateFarm(data: FarmUpdateInput!, where: FarmWhereUniqueInput!): Farm
  updateManyFarms(data: FarmUpdateManyMutationInput!, where: FarmWhereInput): BatchPayload!
  upsertFarm(where: FarmWhereUniqueInput!, create: FarmCreateInput!, update: FarmUpdateInput!): Farm!
  deleteFarm(where: FarmWhereUniqueInput!): Farm
  deleteManyFarms(where: FarmWhereInput): BatchPayload!
  createFarmer(data: FarmerCreateInput!): Farmer!
  updateFarmer(data: FarmerUpdateInput!, where: FarmerWhereUniqueInput!): Farmer
  updateManyFarmers(data: FarmerUpdateManyMutationInput!, where: FarmerWhereInput): BatchPayload!
  upsertFarmer(where: FarmerWhereUniqueInput!, create: FarmerCreateInput!, update: FarmerUpdateInput!): Farmer!
  deleteFarmer(where: FarmerWhereUniqueInput!): Farmer
  deleteManyFarmers(where: FarmerWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createStore(data: StoreCreateInput!): Store!
  updateStore(data: StoreUpdateInput!, where: StoreWhereUniqueInput!): Store
  updateManyStores(data: StoreUpdateManyMutationInput!, where: StoreWhereInput): BatchPayload!
  upsertStore(where: StoreWhereUniqueInput!, create: StoreCreateInput!, update: StoreUpdateInput!): Store!
  deleteStore(where: StoreWhereUniqueInput!): Store
  deleteManyStores(where: StoreWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String!
  type: String!
  quantity: Int!
  price: Float
  seller: Farmer
  store: Store
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  id: ID
  name: String!
  type: String!
  quantity: Int!
  price: Float
  seller: FarmerCreateOneInput
  store: StoreCreateOneInput
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  quantity_ASC
  quantity_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  type: String!
  quantity: Int!
  price: Float
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  name: String
  type: String
  quantity: Int
  price: Float
  seller: FarmerUpdateOneInput
  store: StoreUpdateOneInput
}

input ProductUpdateManyMutationInput {
  name: String
  type: String
  quantity: Int
  price: Float
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  seller: FarmerWhereInput
  store: StoreWhereInput
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  farm(where: FarmWhereUniqueInput!): Farm
  farms(where: FarmWhereInput, orderBy: FarmOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Farm]!
  farmsConnection(where: FarmWhereInput, orderBy: FarmOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FarmConnection!
  farmer(where: FarmerWhereUniqueInput!): Farmer
  farmers(where: FarmerWhereInput, orderBy: FarmerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Farmer]!
  farmersConnection(where: FarmerWhereInput, orderBy: FarmerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FarmerConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  store(where: StoreWhereUniqueInput!): Store
  stores(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Store]!
  storesConnection(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoreConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Store {
  id: ID!
  name: String!
}

type StoreConnection {
  pageInfo: PageInfo!
  edges: [StoreEdge]!
  aggregate: AggregateStore!
}

input StoreCreateInput {
  id: ID
  name: String!
}

input StoreCreateOneInput {
  create: StoreCreateInput
  connect: StoreWhereUniqueInput
}

type StoreEdge {
  node: Store!
  cursor: String!
}

enum StoreOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StorePreviousValues {
  id: ID!
  name: String!
}

type StoreSubscriptionPayload {
  mutation: MutationType!
  node: Store
  updatedFields: [String!]
  previousValues: StorePreviousValues
}

input StoreSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StoreWhereInput
  AND: [StoreSubscriptionWhereInput!]
  OR: [StoreSubscriptionWhereInput!]
  NOT: [StoreSubscriptionWhereInput!]
}

input StoreUpdateDataInput {
  name: String
}

input StoreUpdateInput {
  name: String
}

input StoreUpdateManyMutationInput {
  name: String
}

input StoreUpdateOneInput {
  create: StoreCreateInput
  update: StoreUpdateDataInput
  upsert: StoreUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: StoreWhereUniqueInput
}

input StoreUpsertNestedInput {
  update: StoreUpdateDataInput!
  create: StoreCreateInput!
}

input StoreWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [StoreWhereInput!]
  OR: [StoreWhereInput!]
  NOT: [StoreWhereInput!]
}

input StoreWhereUniqueInput {
  id: ID
}

type Subscription {
  farm(where: FarmSubscriptionWhereInput): FarmSubscriptionPayload
  farmer(where: FarmerSubscriptionWhereInput): FarmerSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  store(where: StoreSubscriptionWhereInput): StoreSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  phone: String!
  image: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  phone: String!
  image: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  phone_ASC
  phone_DESC
  image_ASC
  image_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  phone: String!
  image: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  phone: String
  image: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  phone: String
  image: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    