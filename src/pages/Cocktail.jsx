import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { Wrapper } from "../Wrapper/SingleCocktailPage";
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
export const Loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { data };
};
function Cocktail() {
  const { data } = useLoaderData();
  const SingleCocktail = data.drinks[0];
  console.log(SingleCocktail);
  const {
    strDrinkThumb: image,
    strDrink: name,
    strCategory: Category,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
  } = SingleCocktail;
  return (
    <Wrapper>
      <div className="container-center">
        <div className="col1">
          <Link className="btn" to="/">
            Back Home
          </Link>
          <h2 className="title">{name}</h2>
        </div>
        <div className="col2">
          <div className="image container">
            <img className="img" src={image} alt={name} />
          </div>
          <div className="Cocktail-infos">
            <p className="text">
              <span>Name :</span>
              {name}
            </p>
            <p className="text">
              <span>Category :</span>
              {Category}
            </p>
            <p className="text">
              <span>Info :</span>
              {info}
            </p>
            <p className="text">
              <span>Glass :</span>
              {glass}
            </p>
            <p className="text">
              <span>Insctructions :</span>
              {instructions}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Cocktail;
