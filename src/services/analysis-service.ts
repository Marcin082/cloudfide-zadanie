import axios from "axios";
import { injectable, inject } from "tsyringe";
import { IAnalysisService } from "../interfaces/analysis";
import "reflect-metadata"

@injectable()
export class AnalysisService implements IAnalysisService{

    public async analyzeData(symbol:string, dateFrom:string): Promise<string>{ 
            const res = await axios.get('https://api.binance.com/api/v3/historicalTrades',{
                params:{
                    symbol: symbol.toUpperCase(),
                    limit: 50
                    //fromId: dateFrom
                }
            })
            const firstPrice = res.data[0].price
            const lastPrice = res.data[-1].price
            const diffrence = lastPrice - firstPrice
            const option = diffrence>0 ? "increases" : "decreases";
            return `Price of ${symbol} symbol ${option} by ${diffrence}`
    }
}