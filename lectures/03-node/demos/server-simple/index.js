var http = require('http')

var server = http.createServer((req, res) => {
    res.write('fuf')
    res.end()
})

server.listen(3000)
