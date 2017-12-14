const mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    index: function(req, res) {
        Note.find({}, function(err, results) {
            if (err) {
                console.log(err);
                res.json({ message: 'Ups you have an error' })
            } else {
                res.json(results);
            }
        })
    },

    new: function(req, res) {
        console.log(req.body);
        Note.create(req.body, function(err, results) {
            if (err) {
                console.log(err)
                res.json({ message: 'Ups it seems like you have an error' });
            } else {
                res.json(results)
            }
        })
    }
}