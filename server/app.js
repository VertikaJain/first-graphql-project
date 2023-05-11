import dotenv from "dotenv";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { MyAppSchema } from "./schema/index.js";

dotenv.config();

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MyAppSchema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(process.env.PORT || 5000, console.log("server running"));
