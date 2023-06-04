import express from "express";
import {
	getUserById,
	getUsers,
	createUser,
	updatetUser,
	deleteUser,
} from "../controller/UserController.js";

const router = express.Router();
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updatetUser);
router.delete("/users/:id", deleteUser);

export default router;
