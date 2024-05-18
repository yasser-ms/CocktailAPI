import React from 'react'
import {  useRouteError } from 'react-router-dom'
function SinglePageError() {
    const error = useRouteError();
    console.log(error)
  return (
    <h2>{error.message}</h2>
  )
}

export default SinglePageError