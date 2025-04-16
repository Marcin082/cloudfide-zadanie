export interface IAnalysisService{
    analyzeData(symbol:string): Promise<string>;
}