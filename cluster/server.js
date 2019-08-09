const { createServer } = require('http');

createServer((req, res) => {
    res.end("8080")
}).listen(8080, () => {
    console.log("server is running at 8000")
})

