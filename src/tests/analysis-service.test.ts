import { formatData } from "../helpers/fromat-data";

test('adds 1 + 2 to equal 3', () => {
    expect(formatData("BTCUSDT", [{price:2, time:1744814492274}, {price:6, time:1744814492274} ])).toBe("Price of BTCUSDT symbol increases by 4 in dates range: Wed Apr 16 2025 16:41:32 GMT+0200 (Central European Summer Time) - Wed Apr 16 2025 16:41:32 GMT+0200 (Central European Summer Time)");
});