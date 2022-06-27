import express from "express";
import { createBand } from "../controllers/bandController.js";
import authenticateUser from "../middleware/auth.js";
const router = express.Router();
router.route("/").post(authenticateUser, createBand);
export default router;
