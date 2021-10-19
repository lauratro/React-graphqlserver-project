const { gql } = require("apollo-server");

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

  type Category {
    id: ID!
    image: String
    category: String
    slug: String
    animals: [Animal!]!
  }
  type Query {
    mainCards: [MainCard]
    animals: [Animal]
    animal(slug: String!): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }
  type Mutation {
    addAnimal(
      image: String!
      title: String!
      rating: Float
      price: String!
      description: [String!]!
      stock: Int!
      onSale: Boolean
      slug: String
      category: String
    ): Animal
    removeAnimal(id: ID!): Boolean!
  }
`;
/* return a boolean if the the delete process was successful  */
module.exports = typeDefs;
