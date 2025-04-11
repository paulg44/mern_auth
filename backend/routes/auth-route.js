import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controllers/auth-controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

// Router is a built in express function. helps keep routes organised and manageable in larger applications. You can then export and use these routes in the main express app
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/verify-email", verifyEmail);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

// when the end point is hit, the verifyToken function runs first (decodes the jwt token) then the checkAuth function runs after
router.get("/check-auth", verifyToken, checkAuth);

export default router;
