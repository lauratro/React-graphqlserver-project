import React from "react";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, gql } from "@apollo/client";

const QUERY_ANIMALS = gql`
  {
    animals {
      image
      id
      price
      slug
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(QUERY_ANIMALS);

  if (loading) return <div>is Loading</div>;
  if (error) return <div> there is an error </div>;

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
    </div>
  );
}

export default LandingPage;
