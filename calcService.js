const url = require('url');
const Calculator = require('./Calculator.js')

exports.calculatorRequest = function (req, res) {
    const urlAddress = decodeURI(req.url).split('=');
    let response = "";
    let result = '';
    if (urlAddress[0].substring(urlAddress[0].length - 3, urlAddress[0].length) === "/?q") {
        expression = urlAddress[1].split("");
        expression.shift();
        expression.pop();
        expression = expression.join("");
        result = new Calculator().infixNotation(expression).equals();
        res.statusCode = 200;
        response = result.toString();
    }
    else{
        res.statusCode = 400;
        response = "Invalid Query";
    }
    res.setHeader('Content-Type', 'text/plain');
    res.end(response);
};

exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};