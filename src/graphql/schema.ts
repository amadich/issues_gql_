import { makeExecutableSchema } from "@graphql-tools/schema";
import { userTypeDefs } from "./typeDefs/userTypeDefs";
import { userResolvers } from "./resolvers/userResolver";

export const schema = makeExecutableSchema({
  typeDefs: [userTypeDefs],
  resolvers: [userResolvers],
});
