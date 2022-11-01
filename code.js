const http = require("http");
const port = 5000;
const server = http.createServer(async (req, res) => {
    if (req.url === "/getServerDate" && req.method === "GET") {
	let date_ob = new Date();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ServerDate: date_ob }));
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ServerDate: "Ups coś nie poszło wg planu" }));
    }
});
server.listen(port, () => {
    console.log('Backend started on port: '+port);
});
