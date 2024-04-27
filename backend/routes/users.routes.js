import express from "express"
import protectRoute from "../middleware/protectRoute.js";
import { getAllUsers } from "../controllers/users.controller.js";

const router = express.Router()

router.get("/", protectRoute, getAllUsers);

export default router;