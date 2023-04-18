const { model, Schema } = require("mongoose");

const questionSchema = new Schema({
  name: String,
  description: String,
  createdAt: String,
});

module.exports = model("Question", questionSchema);
