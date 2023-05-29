import dotenv from "dotenv";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { MyAppSchema } from "./schema/index.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors()); // allow cross origin requests

mongoose.connect(`${process.env.MONGODB_URI}${process.env.MONGODB_DB_MAIN}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connection to db opened");
});

mongoose.connection.once("error", (error) => {
  console.log("error in connecting to db: ", error);
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MyAppSchema, // defines schema of the graph and the object types
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(process.env.PORT || 5000, console.log("server running"));
