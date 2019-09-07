
var mongojs = require('mongojs')
var connectionString = 'mongodb://localhost:27017/db001'
var db = mongojs(connectionString)

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }
    else if (req.url == '/data') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ message: "Hello World" }));
        res.end('');
    }
    else if(req.url == '/user') {
        db.users.find((err, docs) => {
            if (err) {
                console.log(err)
            }
            if (docs) {
                console.log(docs)

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.write(JSON.stringify(docs));
                res.end('');
            }
        })
    }
    else {
        res.end('Invalid Request!');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


