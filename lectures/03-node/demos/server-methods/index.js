var http = require('http')

var collection = [{
    _id: 'a',
    name: 'foo',
    value: 21
}, {
    _id: 'b',
    name: 'bar',
    value: 31
}]

var itemRegex = /^\/items\/(\d+)/;

var controller = {
    getAll: function (req, res) {
        res.write(JSON.stringify(collection))
        res.end()
    },
    getOne: function (req, res) {
        var _id = req.url.match(itemRegex)[1]
        var v = collection.find(item => item._id === _id)
        res.write(JSON.stringify(v))
        res.end()
    },
    createOne: function (req, res) {
        var fullBody = ''
        req.on('data', function (chunk) {
            fullBody += chunk.toString()
        });
        req.on('end', function () {
            var reqBody = JSON.parse(fullBody)
            collection.push(reqBody)
            res.end();
        })
    },
    updateOne: function (req, res) {
        var fullBody = ''
        req.on('data', function (chunk) {
            fullBody += chunk.toString()
        });
        req.on('end', function () {
            var reqBody = JSON.parse(fullBody)
            collection = collection.map(item => {
                if (item._id === reqBody._id) {
                    return reqBody;
                }
                return item;
            })
            res.write(JSON.stringify(reqBody));
            res.end();
        })
    },
    deleteOne: function (req, res) {
        var _id = req.url.match(itemRegex)[1];
        collection = collection.filter(item => item._id !== _id);
        res.end();
    }
};

var server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/items/') {
        return controller.getAll(req, res);
    }
    if (req.method === 'GET' && itemRegex.test(req.url)) {
        return controller.getOne(req, res);
    }
    if (req.method === 'POST' && req.url === '/items/') {
        return controller.createOne(req, res);
    }
    if (req.method === 'PUT' && itemRegex.test(req.url)) {
        return controller.updateOne(req, res);
    }
    if (req.method === 'DELETE' && itemRegex.test(req.url)) {
        return controller.deleteOne(req, res);
    }
    res.statusCode = 404
    res.end()
})

server.listen(3000)
