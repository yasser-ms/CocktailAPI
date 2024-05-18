import React from "react";
import CocktailCard from "./CocktailCard";
import { Wrapper } from "../Wrapper/CocktailListPage";

function CocktailList({ drinks }) {
  if (!drinks) {
    return <h2 style={{ textAlign: "center" }}> Type your favorite Drink!!</h2>;
  } 
    const FormatDrinks = drinks.map((drink) => {
      const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } =
        drink;
      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        infos: strAlcoholic,
        glass: strGlass,
      };
    });
    return <div>
        <Wrapper>
            {FormatDrinks.map((item)=>{
                return <CocktailCard key={item.id} {...item}/>
            })}
        </Wrapper>
    </div>
  }


export default CocktailList;
