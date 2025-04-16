"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return tsyringe_1.container; } });
const analysis_service_1 = require("./services/analysis-service");
const analysis_controller_1 = require("./controllers/analysis-controller");
tsyringe_1.container.register("IAnalysisService", {
    useClass: analysis_service_1.AnalysisService
});
tsyringe_1.container.resolve(analysis_service_1.AnalysisService);
tsyringe_1.container.resolve(analysis_controller_1.AnalysisController);
