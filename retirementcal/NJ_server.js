const http = require("http");

http.createServer((req,res)=>{

res.writeHead("Content-Type, text/html");

res.write(200);

res.end(console.log("Hi server"));
})