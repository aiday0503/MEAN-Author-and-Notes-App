const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    author: String,
    body: String
}, { timestamps: true })

mongoose.model('Note', NoteSchema);