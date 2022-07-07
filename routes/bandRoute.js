import express from "express";
import {
  createBand,
  getAllBands,
  getSingleBand,
  getCurrentUserBand,
  updateBand,
  deleteBand,
} from "../controllers/bandController.js";
import authenticateUser from "../middleware/auth.js";
const router = express.Router();

router
  .route("/")
  .post(authenticateUser, createBand)
  .get(authenticateUser, getAllBands);

router.route("/showAllMyBands").get(authenticateUser, getCurrentUserBand);

router
  .route("/:id")
  .get(authenticateUser, getSingleBand)
  .patch(authenticateUser, updateBand)
  .delete(authenticateUser, deleteBand);

export default router;
