import "reflect-metadata"
import { NextFunction, Request, Response } from "express";
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
    public startAnalyze = async (req:Request, res: Response, next: NextFunction):Promise<void> =>{
        try{
            const {symbol, dateFrom, dateTo} = req.body
            console.log({symbol, dateFrom, dateTo})
            await this.analysisService.analyzeData(symbol, dateFrom, dateTo)
        }catch{
            throw new Error("Failed to run the analysis endpoint")
        }
    }
}
