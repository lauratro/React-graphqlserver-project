const { ApolloServer } = require("apollo-server");
const { mainCards, animals, categories } = require("./db");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Category = require("./resolvers/Category");
const Animal = require("./resolvers/Animal");
const Mutation = require("./resolvers/Mutation");

/* const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parent, args, ctx) => {
      let animalToBeFound = animals.find((animal) => {
        return animal.slug === args.slug;
      });
      return animalToBeFound;
    }, //the arguments are(parent, args, context)
    categories: () => categories,
    category: (parents, args, cxt) => {
      let category = categories.find((category) => {
        return category.slug === args.slug;
      });
      return category;
    },
  },
  Category: {
    animals: (parents, args, ctx) => {
      return animals.filter((animal) => {
        return animal.category === parents.id;
      });
    },
  },
  Animal: {
    category: (parent, args, cxt) => {
      return categories.find((category) => {
        return category.id === parent.category;
      });
    },
  },
}; */

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Animal,
    Category,
    Query,
    Mutation,
  },
  context: {
    mainCards,
    animals,
    categories,
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
