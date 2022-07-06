"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    let datePars = dateString.split('/').map((value) => parseInt(value));
    return new Date(datePars[2], datePars[1] - 1, datePars[0]);
};
exports.dateStringToDate = dateStringToDate;
