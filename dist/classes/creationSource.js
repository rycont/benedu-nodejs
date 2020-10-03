"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegularExamSource = void 0;
var registerSource_1 = __importDefault(require("../exam/registerSource"));
var CreationSource = /** @class */ (function () {
    function CreationSource(_a) {
        var title = _a.title, subject = _a.subject, grade = _a.grade, sourceId = _a.sourceId;
        this.title = title;
        this.subject = subject;
        this.grade = grade;
        this.sourceId = sourceId;
    }
    return CreationSource;
}());
var RegularExamSource = /** @class */ (function (_super) {
    __extends(RegularExamSource, _super);
    function RegularExamSource(_a) {
        var title = _a.title, subject = _a.subject, grade = _a.grade, sourceId = _a.sourceId, year = _a.year;
        var _this = _super.call(this, { title: title, subject: subject, grade: grade, sourceId: sourceId }) || this;
        _this.year = year;
        return _this;
    }
    RegularExamSource.prototype.register = function (_a) {
        var title = _a.title, providedToken = _a.providedToken;
        return registerSource_1.default({
            year: this.year,
            subject: this.subject,
            sourceType: "지필고사",
            sourceId: this.sourceId,
            grade: this.grade,
            examTitle: title || this.title,
            providedToken: providedToken
        });
    };
    return RegularExamSource;
}(CreationSource));
exports.RegularExamSource = RegularExamSource;
