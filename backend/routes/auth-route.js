import express from "express";
import { login, logout, signup } from "../controllers/auth-controller.js";
// Router is a built in express function. helps keep routes organised and manageable in larger applications. You can then export and use these routes in the main express app
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
