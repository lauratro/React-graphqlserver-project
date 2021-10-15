const { ApolloServer, gql } = require("apollo-server");
const { mainCards, animals } = require("./db");
const typeDefs = gql`
  type MainCard {
    title: String
    image: String
  }
  type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean
    slug: String
    category: String
  }
  type Query {
    mainCards: [MainCard]
    animals: [Animal]
    animal(slug: String!): Animal
  }
`;

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parent, args, ctx) => {
      let animalToBeFound = animals.find((animal) => {
        return animal.slug === args.slug;
      });
      return animalToBeFound;
    }, //the arguments are(parent, args, context)
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
