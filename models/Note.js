//Dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema constructor
let CommentSchema = new Schema({

    title: {type: String},

    body: {type: String}
    
});

let Note = mongoose.model("Note", CommentSchema);

//export model
module.exports = Note;

