const http = require("http");
const server = http.createServer((req, res) => {
	res.write("Welcome");
	res.end();
}).listen(3000);

console.log("App listening on port 3000");
