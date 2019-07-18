import React from "react";
import "../CSS/Heading.css";
import { Link } from "@reach/router";

const Heading = () => {
  return (
    <Link className="Link" to="/">
      <h1 className="Heading">NC News</h1>
    </Link>
  );
};

export default Heading;
