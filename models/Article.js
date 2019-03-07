// Start mongoose
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

//Makeing
let ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      // `link` is required and of type String
      link: {
        type: String,
        required: true
      },
      compress: {
        type: String,
        required: true
        
      },
      saved: {
        type: Boolean,
        default: false
      },
      note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
      }]
});

// creates th model from the above schema, using  model method for mongoose
const Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;



