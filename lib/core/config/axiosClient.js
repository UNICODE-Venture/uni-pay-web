"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var apis_1 = require("./apis");
/** Axios client to make HTTP operations */
var axiosClient = axios_1.default.create({ baseURL: apis_1.default.moyasarUrl });
exports.default = axiosClient;
