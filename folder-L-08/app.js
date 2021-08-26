'use strict'
console.log('=== Отримання GET і POST запитів на Node.js ===');

const http = require('http');
const url = require('url');
const {parse} = require('querystring');
const PORT = 3000;

// GET -> отримати обробити

/*
http.createServer((request, response)=>{
    console.log(`Server Work PORT: ${PORT}`);
    console.log(request.method);   // !!! impotent:w
    let urlRequest = url.parse(request.url, true);
    console.log(urlRequest);
    console.log(urlRequest.query.test);  // !!! GET Params
    response.end(`Server up and running, PORT: ${PORT}`);
}).listen(3000);
*/

/*
http.createServer((req, res) => {
    console.log('Server Work');
    console.log(req.method);  // !!!

    let urlRequest = url.parse(req.url, true)
    console.log(urlRequest.query.test);  //  !!!

    if (urlRequest.query.test % 2 === 0) {
        res.end('even');
    }
    res.end('odd');
}).listen(3000);
*/


http.createServer((req, res) => {
    if (req.method === 'GET') {
        // GET -> отримати обробити
        console.log('Server Work');
        console.log(req.method);  // !!!
        // console.log(urlRequest);
        let urlRequest = url.parse(req.url, true)
        console.log(urlRequest.query.test);  //  !!!

        if (urlRequest.query.test % 2 === 0) {
            res.end('even');
        }
        res.end('odd');
    } else {
        // POST
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            let params= parse(body);
            console.log(params);
            console.log(params.Hi);
            res.end('Ok');
        });
    }

}).listen(3000);
