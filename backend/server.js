import express from "express";
import { connectToDatabase } from "./database/connectionToDatabase.js";
import dotenv from "dotenv";
// Importing ALL routes from auth-route.js
import authRoutes from "./routes/auth-route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5175", credentials: true }));
app.use(express.json());
// cookieParser can read data from the cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

connectToDatabase();

app.use("/api/auth", authRoutes);

app.listen(3003, () => {
  console.log("Server is running on PORT 3003");
});
