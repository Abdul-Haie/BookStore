import express from "express";
import { quereyMessage } from "../controller/contact.controller.js";

const router = express.Router();
router.post("/quereyMessage", quereyMessage);
export default router;
