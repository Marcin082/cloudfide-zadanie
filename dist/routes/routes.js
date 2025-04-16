"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const analysis_controller_1 = require("../controllers/analysis-controller");
const tsyringe_1 = require("tsyringe");
const router = express_1.default.Router();
const controller = tsyringe_1.container.resolve(analysis_controller_1.AnalysisController);
router.post("/start", controller.startAnalyze);
exports.default = router;
