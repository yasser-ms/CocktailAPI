import React from "react";
import { Link, useRouteError } from "react-router-dom";
import NotFound from "../assets/not-found.svg";
import { Wrapper } from "../Wrapper/ErrorPage";
function Error() {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={NotFound} alt="Not Found Image" />
          <div>
            <h2>Ohh!</h2>
            <p>yo can't seem to find page you are looking for</p>
            <Link to="/">Back Home</Link>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h2>Something went wrong</h2>
      </div>
    </Wrapper>
  );
}

export default Error;
