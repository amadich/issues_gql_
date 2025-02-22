import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import sequelize from "./config/db";
import { schema } from "./graphql/schema";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  // Cast app to express.Application type
  const app: Application = express();

  // Initialize Apollo Server
  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app });

  // Sync Database
  await sequelize.sync({ alter: true });

  // Start Express Server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch((err) => console.error("❌ Error starting server:", err));
