"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalysisService = void 0;
const axios_1 = __importDefault(require("axios"));
const tsyringe_1 = require("tsyringe");
require("reflect-metadata");
const fromat_data_1 = require("../helpers/fromat-data");
let AnalysisService = class AnalysisService {
    analyzeData(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get('https://api.binance.com/api/v3/historicalTrades', {
                params: {
                    symbol: symbol.toUpperCase(),
                }
            });
            if (res.data.length === 0) {
                throw new Error(`No trades found for ${symbol}`);
            }
            return (0, fromat_data_1.formatData)(symbol, res.data);
        });
    }
};
exports.AnalysisService = AnalysisService;
exports.AnalysisService = AnalysisService = __decorate([
    (0, tsyringe_1.injectable)()
], AnalysisService);
