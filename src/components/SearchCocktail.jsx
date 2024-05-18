import React from "react";
import { Form, useNavigation } from "react-router-dom";
import { Wrapper } from "../Wrapper/SearchForm";

function SearchCocktail({ SearchDrink }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form">
      <Wrapper>
        <input
          type="search"
          className="form-input"
          name="search"
          id="search"
          placeholder="enter you favorite drink"
          defaultValue={SearchDrink}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "is searching" : "search"}
        </button>
      </Wrapper>
    </Form>
  );
}

export default SearchCocktail;
