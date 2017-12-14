const path = require('path');
const users = require('../controllers/notes.js');

module.exports = function(app) {
    app.post('/new', function(req, res) {
        users.new(req, res);
    })

    app.get('/all', function(req, res) {
        users.index(req, res);
    })

    app.all("*", (req, res) => {
        res.sendFile(path.resolve("../client/dist/index.html"))
    });
}