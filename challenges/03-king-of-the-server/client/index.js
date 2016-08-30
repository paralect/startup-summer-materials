const request = require('request');

const url = 'http://188.166.10.98';

function getCurrentLeader(cb) {
    return request(url, (error, response, body) => {
        if (error) {
            return cb(error);
        }
        if (response.statusCode !== 200) {
            return cb(new Error('Request is not successful'));
        }
        return cb(null, body);
    });
}

function setLeader(currentLeaderName, newLeaderName, cb) {
    return request.post({
        url: url,
        json: true,
        body: [currentLeaderName, newLeaderName]
    }, (error, response, obj) => {
        return cb(error, response);
    });
}
