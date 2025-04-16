export interface IAnalysisService{
    analyzeData(symbol:string, dateFrom:string): Promise<string>;
}