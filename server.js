const http = require('http');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((request, response) => {
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/html');
	response.end('<h1>Hello world!</h1>');
} );

server.listen(port, hostname, () => {
	console.log(`Server is runnig at http://${hostname}:${port}`);
});