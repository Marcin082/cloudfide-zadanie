import "reflect-metadata"
import { NextFunction, Request } from "express";
import { container, inject, injectable } from "tsyringe";
import { AnalysisService } from "../services/analysis-service";
import { IAnalysisService } from "../interfaces/analysis";
container.register<IAnalysisService>(
    "IAnalysisService", {
    useClass: AnalysisService
  });
@injectable()
export class AnalysisController{
    constructor(@inject("IAnalysisService") private analysisService: IAnalysisService) {}
    public startAnalyze = (req:Request, res: Response, next: NextFunction) =>{
        try{
            const {symbol, dateFrom, dateTo} = req.body
            this.analysisService.analyzeData(symbol, dateFrom, dateTo)
        }catch{
            throw new Error("Failed to run the analysis endpoint")
        }
    }
}
