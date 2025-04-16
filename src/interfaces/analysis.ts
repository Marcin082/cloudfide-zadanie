export interface IAnalysisService{
    analyzeData(symbol:string, dateFrom:string, dateTo:string): Promise<void>;
}