"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class HtmlOutput {
    constructor() {
        this.print = (report) => {
            let html = `<html>
                        <div>
                            <h2>Analysis Output</h2>
                            <p> ${report} </p>
                        </div>
                    </html>`;
            fs_1.default.writeFileSync('result.html', html);
        };
    }
}
exports.default = HtmlOutput;
