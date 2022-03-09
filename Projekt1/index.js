var express = require('express');
var app = express();
app.get('/', function (req, res) {
    var num1 = +req.query.num1;
    var num2 = +req.query.num2;
    var op = req.query.operation;
    switch (op) {
        case "add":
            var add = num1 + num2;
            res.send(add.toString());
            break;
        case "subtract":
            var subtract = num1 - num2;
            res.send(subtract.toString());
            break;
        case "multiply":
            var multiply = num1 * num2;
            res.send(multiply.toString());
            break;
        case "divide":
            var divide = num1 / num2;
            res.send(divide.toString());
            break;
        default:
            alert('Brak operacji');
    }
});
app.listen(3000);
