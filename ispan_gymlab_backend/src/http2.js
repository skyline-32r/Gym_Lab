import http from "node:http";
import fs from "node:fs/promises";
const server = http.createServer(async (req, res) => {

    await fs.writeFile("./headers.txt", JSON.stringify(req.headers, null, 4));
    // await fs.readFile("./header.txt");
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    res.end(`
    <h2>寫入成功</h2>
    <p>${req.url}</p>
    `);
}).listen(3000);