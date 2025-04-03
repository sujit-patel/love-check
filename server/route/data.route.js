import express from "express";
import { checkLove } from "../controller/data.controller.js";
const router = express.Router();

router.post("/check-love", checkLove);

export default router;
