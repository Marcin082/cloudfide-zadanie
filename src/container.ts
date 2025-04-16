import "reflect-metadata"
import { container } from "tsyringe";
import { IAnalysisService } from "./interfaces/analysis";
import { AnalysisService } from "./services/analysis-service";
import { AnalysisController } from "./controllers/analyze-controller";

container.register<IAnalysisService>(
    "IAnalysisService", {
    useClass: AnalysisService
  });
container.resolve(AnalysisService)
container.resolve(AnalysisController)
export {container}

