const { model, Schema } = require("mongoose");
const postSchema = new Schema({
  image: String,
  title: String,
  price: String,

  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("Post", postSchema);
