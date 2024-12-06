const http = require("http");
const port = 1008;

const porthandeler = (req, res) => {
    res.write("<h1>Server  started yehh</h1>");
    res.end();

};

const server = http.createServer(porthandeler);
server.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port :" + port);

 }); 
 