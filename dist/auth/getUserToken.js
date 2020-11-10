"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var form_data_1 = __importDefault(require("form-data"));
var fast_html_parser_1 = require("fast-html-parser");
var getRVT_1 = __importDefault(require("./getRVT"));
var api_1 = require("../api");
var getUserToken = function (_a) {
    var username = _a.username, password = _a.password, _b = _a.type, type = _b === void 0 ? 2 : _b;
    return __awaiter(void 0, void 0, void 0, function () {
        var _c, inputToken, cookieToken, formdata, fetched, fetchedText, fetchedToken;
        var _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, getRVT_1.default()];
                case 1:
                    _c = _e.sent(), inputToken = _c.inputToken, cookieToken = _c.cookieToken;
                    formdata = new form_data_1.default();
                    formdata.append("__RequestVerificationToken", inputToken);
                    formdata.append("loginID", username);
                    formdata.append("loginPW", password);
                    formdata.append("loginGB", type);
                    return [4 /*yield*/, api_1.fetch("http://benedu.co.kr/Home/Login", {
                            method: "POST",
                            headers: {
                                "Cookie": "__RequestVerificationToken=" + cookieToken + ";"
                            },
                            body: formdata,
                            redirect: "manual"
                        })];
                case 2:
                    fetched = (_e.sent());
                    return [4 /*yield*/, fetched.text()];
                case 3:
                    fetchedText = _e.sent();
                    fetchedToken = (_d = fetched.headers.get("set-cookie")) === null || _d === void 0 ? void 0 : _d.split("Id=")[1].split("; ")[0];
                    if (!fetchedToken)
                        throw new Error(fast_html_parser_1.parse(fetchedText).querySelectorAll(".login-field span")[3].childNodes[0].rawText || "Cannot get token");
                    return [2 /*return*/, fetchedToken];
            }
        });
    });
};
exports.default = getUserToken;
