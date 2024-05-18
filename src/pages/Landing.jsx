import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SearchCocktail from "../components/SearchCocktail";
import CocktailList from "../components/CocktailList";

const CocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const Loader = async ({request}) => {
  const query 
  const url = new URL(request.url)
  const SearchDrink = url.searchParams.get("search" || "");
  const response = await axios.get(`${CocktailURL}${SearchDrink}`);
  return { drinks: response.data.drinks, SearchDrink };
};

function Landing() {
  const { drinks, SearchDrink } = useLoaderData();
  console.log(drinks)
  return (
    <>
      <SearchCocktail SearchDrink={SearchDrink} />
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;
