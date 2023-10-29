"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (response) {
    var data = response.data;
    console.log("\n    Data id ".concat(data.id, "\n    data title ").concat(data.title, "\n    data completed ").concat(data.completed));
});
