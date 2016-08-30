const http = require('http')
const url = require('url')

const funs = [
    (x, y) => x + y,
    (x, y) => x - y,
    (x, y) => x * y,
    (x, y) => x + Math.pow(x, y),
    (x, y) => +('' + y + x * 3) * 2
];

const server = http.createServer((req, res) => {
    const {level, x, y} = url.parse(req.url, true).query;
    if (level == null || x == null || y == null) {
        res.end();
        return;
    }
    res.write('' + funs[level](+x, +y));
    res.end();
});

server.listen(3000)
