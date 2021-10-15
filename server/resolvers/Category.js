const Category = {
  animals: (parents, args, { animals }) => {
    return animals.filter((animal) => {
      return animal.category === parents.id;
    });
  },
};
module.exports = Category;
