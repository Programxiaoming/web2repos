
const mongoose = require("mongoose");
const NoteSchema = new mongoose.Schema({
    id: {
    type: String,
    required: true,
    },
    title: {
    type: String,
    required: true,
    },
    content: {
        type: String,
        required: true,
    },
    rate: {
        type: String,
        required: true,
    },
    });
    // Mongoose will assume there is a collection called the plural of this name (i.e., 'users' in this case).
    const Note = mongoose.model("Note", NoteSchema);
    module.exports = Note;