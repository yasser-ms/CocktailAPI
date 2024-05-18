import React from "react";
import { Wrapper } from "../Wrapper/CocktailCard";
import { Link } from "react-router-dom";
function CocktailCard(item) {
  return (
    <Wrapper>
      <div className="image-container">
        <img className="img" src={item.image} alt={item.name} />
      </div>
      <div className="footer">
        <h2>{item.name}</h2>
        <h4>{item.glass}</h4>
        <p>{item.infos}</p>
        <div className="details-link">
          <Link className="btn" to={`Cocktail/${item.id}`}> Details</Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default CocktailCard;
