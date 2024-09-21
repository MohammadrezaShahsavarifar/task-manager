import { Router } from "express";
import {
  createTask,
  getTask,
  getAllTask,
  deletTask,
  updateTask,
} from "../controllers/taskController";
const router = Router();

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).delete(deletTask).patch(updateTask);
export default router;
