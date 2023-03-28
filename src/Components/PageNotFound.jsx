import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h3>Page Not Found</h3>
      <p>
        Go to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}

export default PageNotFound;
