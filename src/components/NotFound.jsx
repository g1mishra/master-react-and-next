import React from "react";
import { Link, useRouteError } from "react-router-dom";
const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>
        Status : {error.status} - {error.data}
      </p>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default NotFound;
