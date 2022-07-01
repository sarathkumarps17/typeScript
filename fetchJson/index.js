"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/users';
axios_1["default"].get(url).then(function (res) { return console.log(res.data); });
