"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fromat_data_1 = require("../helpers/fromat-data");
test('adds 1 + 2 to equal 3', () => {
    expect((0, fromat_data_1.formatData)("BTCUSDT", [{ price: 2, time: 1744814492274 }, { price: 6, time: 1744814492274 }])).toBe("Price of BTCUSDT symbol increases by 4 in dates range: Wed Apr 16 2025 16:41:32 GMT+0200 (Central European Summer Time) - Wed Apr 16 2025 16:41:32 GMT+0200 (Central European Summer Time)");
});
