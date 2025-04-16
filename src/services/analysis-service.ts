import axios from "axios";
import { injectable, inject } from "tsyringe";
import { IAnalysisService } from "../interfaces/analysis";
import "reflect-metadata"
import { formatData } from "../helpers/fromat-data";

@injectable()
export class AnalysisService implements IAnalysisService{

    public async analyzeData(symbol:string): Promise<string>{ 
            const res = await axios.get('https://api.binance.com/api/v3/historicalTrades',{
                params:{
                    symbol: symbol.toUpperCase(),
                }
            })
            if(res.data.length === 0 ){
                throw new Error(`No trades found for ${symbol}`)
            }
            return  formatData(symbol,res.data)
    }
}