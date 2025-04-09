import express from "express";
import { connectToDatabase } from "./database/connectionToDatabase.js";
import dotenv from "dotenv";
// Importing ALL routes from auth-route.js
import authRoutes from "./routes/auth-route.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

connectToDatabase();

app.use("/api/auth", authRoutes);

app.listen(3003, () => {
  console.log("Server is running on PORT 3003");
});
