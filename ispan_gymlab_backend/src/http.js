import http from "node:http";

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    res.end(`
    <h2>Hello</h2>
    <p>${req.url}</p>
    `);
}).listen(3000);