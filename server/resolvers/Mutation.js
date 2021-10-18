const { v4 } = require("uuid");
const { animals } = require("./Query");
const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, description, stock, onSale, slug, category },
    { animals }
  ) => {
    let newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      stock,
      onSale,
      slug,
      category,
    };
    animals.push(newAnimal);
    return newAnimal;
  },
};
module.exports = Mutation;
