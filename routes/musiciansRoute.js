import express from "express";
import {
  createMusician,
  deleteMusician,
  getAllMusicians,
  updateMusician,
  showStats,
} from "../controllers/musiciansController.js";
import authenticateUser from "../middleware/auth.js";
const router = express.Router();

router.route("/").post(createMusician).get(getAllMusicians);
router.route("/stats").get(showStats);
router.route("/:id").patch(updateMusician).delete(deleteMusician);
export default router;
