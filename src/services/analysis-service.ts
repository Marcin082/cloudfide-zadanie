import axios from "axios";
import { injectable, inject } from "tsyringe";
import { IAnalysisService } from "../interfaces/analysis";
import "reflect-metadata"

@injectable()
export class AnalysisService implements IAnalysisService{

    public async analyzeData(symbol:string, dateFrom:string, dateTo:string): Promise<void>{
        try{
           
            const res = await axios.get('https://api.binance.com/api/v3/trades',{
                params:{
                    symbol: symbol.toUpperCase(),
                    startTime: dateFrom,
                    endTime: dateTo
                }
            })
            console.log(res.data)
        }catch{
            
        }
    }
}