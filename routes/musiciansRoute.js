import express from "express";
import {
  createMusician,
  deleteMusician,
  getAllMusicians,
  updateMusician,
  getSingleMusician,
} from "../controllers/musiciansController.js";
import authenticateUser from "../middleware/auth.js";
import { authorizeRoles } from "../middleware/auth.js";
const router = express.Router();

router
  .route("/")
  .post(authenticateUser, authorizeRoles("admin"), createMusician)
  .get(getAllMusicians);

router
  .route("/:id")
  .get(getSingleMusician)
  .patch(authenticateUser, updateMusician)
  .delete(deleteMusician);
export default router;
