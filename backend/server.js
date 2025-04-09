import express from "express";
import { connectToDatabase } from "./database/connectionToDatabase.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

connectToDatabase();

app.listen(3003, () => {
  console.log("Server is running on PORT 3003");
});
