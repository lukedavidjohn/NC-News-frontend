import React from "react";
import { Link } from "@reach/router";

import "../CSS/Heading.css";

const Heading = () => {
  return (
    <Link className="Link" to="/">
      <h1 className="Heading">NC News</h1>
    </Link>
  );
};

export default Heading;
