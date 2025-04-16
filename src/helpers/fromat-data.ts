export const formatData = (symbol:string, data:{price:number,time:number}[]):string =>{
    const first = data[0]
    const last = data[data.length-1]
    const diffrence = last.price - first.price
    const option = diffrence>0 ? "increases" : "decreases";
    return `Price of ${symbol} symbol ${option} by ${diffrence} in dates range: ${new Date(first.time)} - ${new Date(last.time)}`
}