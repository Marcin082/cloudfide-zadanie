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
            const {symbol} = req.body
            const result = await this.analysisService.analyzeData(symbol)
            res.json(result)
        }catch(e){
            throw new Error(`Failed to run the analysis endpoint, ${e}`)
        }
    }
}
