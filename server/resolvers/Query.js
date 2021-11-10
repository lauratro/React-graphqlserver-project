const Post = require("../models/Post");

const Query = {
  async getPosts() {
    try {
      const posts = await Post.find();
      console.log("p", posts);
      return posts;
    } catch (err) {
      throw new Error(err);
    }
  },
  mainCards: (parent, args, { mainCards }) => mainCards,
  animals: (parent, args, { animals }) => animals,
  animal: (parent, args, { animals }) => {
    let animal = animals.find((animal) => {
      return animal.slug === args.slug;
    });
    return animal;
  },
  categories: (parents, args, { categories }) => categories,
  category: (parents, args, { categories }) => {
    let category = categories.find((category) => {
      return category.slug === args.slug;
    });
    return category;
  },
};

module.exports = Query;
