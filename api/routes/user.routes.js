import express from "express";
import {
  deleteeUser,
  getUserListing,
  signOut,
  test,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyuser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteeUser);
router.get("/signout", signOut);
router.get("/listings/:id", verifyToken, getUserListing);

export default router;
