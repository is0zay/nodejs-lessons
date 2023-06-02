import { clear } from 'console';
import fs from 'fs';
import http from 'http'

const port = 3000;

const server = http.createServer((req, res) => {
	if(req.url === "/") {
		console.log(req.url);
	}
	res.writeHead(200, {"Content-Type": "text/html"});

	fs.readFile("./index2.html", (err, data) => {
		if(err) throw err;	// if url is not found, we will receive an error
		res.write(data);
		res.end(); // Here it will end the program

	}); 
	fs.readFile("./data.txt","utf-8" ,(e) => {
		let sum = 0;
		const arr = e.split(",");
		arr.forEach(element => {
			sum += element
		});
		console.log(`The sum is ${sum}`);
	})

	
});

server.listen(port, (err) => {
	if(err) console.log("ERROR", err.message);
	console.log(`Listening for port ${port}`);
	console.log("Hello, World!");
})