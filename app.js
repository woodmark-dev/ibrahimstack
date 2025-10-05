const http = require("http");
const server = http.createServer((req, res) => {
	res.write("On the way to master fullstack");
	res.end();
}).listen(3000);

console.log("App listening on port 3000");
