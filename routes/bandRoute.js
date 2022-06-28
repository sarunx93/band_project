import express from "express";
import {
  createBand,
  getAllBands,
  getSingleBand,
  getCurrentUserBand,
  updateBand,
} from "../controllers/bandController.js";
import authenticateUser from "../middleware/auth.js";
const router = express.Router();

router.route("/").post(authenticateUser, createBand).get(getAllBands);

router.route("/showAllMyBands").get(authenticateUser, getCurrentUserBand);

router
  .route(":/id")
  .get(authenticateUser, getSingleBand)
  .patch(authenticateUser, updateBand);

export default router;
