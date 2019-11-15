const http = require('http');
const url = require('url');
const calcService = require('./calcService.js');

module.exports = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname == '/calculator/' && req.method === 'GET') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);
            calcService.calculatorRequest(req, res);
    }
    else {
        console.log('Request Type:' +
            req.method + ' Invalid Endpoint: ' +
            reqUrl.pathname);
        calcService.invalidRequest(req, res);
    }
});