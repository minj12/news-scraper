//Dependencies
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let NoteSchema = new Schema({

    title: {type: String},

    body: {type: String}
    
});

var Note = mongoose.model("Article", ArticleSchema);

//export model
module.exports = Note;

