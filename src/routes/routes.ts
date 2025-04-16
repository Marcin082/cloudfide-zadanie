import express from "express";
import { AnalysisController } from "../controllers/analysis-controller";
import { container } from "tsyringe";

const router = express.Router()
const controller = container.resolve(AnalysisController)
router.post("/start", controller.startAnalyze)
export default router