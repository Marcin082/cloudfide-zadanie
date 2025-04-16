"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatData = void 0;
const formatData = (symbol, data) => {
    const first = data[0];
    const last = data[data.length - 1];
    const diffrence = last.price - first.price;
    const option = diffrence > 0 ? "increases" : "decreases";
    return `Price of ${symbol} symbol ${option} by ${diffrence} in dates range: ${new Date(first.time)} - ${new Date(last.time)}`;
};
exports.formatData = formatData;
