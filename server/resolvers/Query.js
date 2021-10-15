const Query = {
  mainCards: () => mainCards,
  animals: () => animals,
  animal: (parent, args, { animals }) => {
    let animalToBeFound = animals.find((animal) => {
      return animal.slug === args.slug;
    });
    return animalToBeFound;
  },
  categories: () => categories,
  category: (parents, args, { categories }) => {
    let category = categories.find((category) => {
      return category.slug === args.slug;
    });
    return category;
  },
};

module.exports = Query;
