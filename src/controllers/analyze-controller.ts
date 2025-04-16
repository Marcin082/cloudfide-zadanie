import { NextFunction, Request } from "express";
import { container, inject, injectable } from "tsyringe";
import { AnalysisService } from "../services/analysis-service";
container.register(
    "AnalysisService", {
    useClass: AnalysisService
  });
@injectable()
export class AnalysisController{
    constructor(@inject() private analysisService: AnalysisService)
    public startAnalyze(req:Request, res: Response, next: NextFunction){
        try{
            this.analysisService.analyzeData(req.body.symbol)
        }catch{
            throw new Error("Failed to run the analysis endpoint")
        }
    }
}
