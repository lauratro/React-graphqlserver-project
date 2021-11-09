const { model, Schema } = require("mongoose");
const postSchema = new Schema({
  id: String,
  image: String,
  title: String,
  rating: Number | 5.0,
  price: String,
  description: [String],
  stock: Number | 14,
  onSale: Boolean,
  slug: String,
  category: String,
});

module.export = model("post", postSchema);
