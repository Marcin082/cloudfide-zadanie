import express from "express";
import { AnalysisController } from "../controllers/analyze-controller";
import { container } from "tsyringe";

const router = express.Router()
const controller = container.resolve(AnalysisController)
router.post("/start", controller.startAnalyze)
export default router