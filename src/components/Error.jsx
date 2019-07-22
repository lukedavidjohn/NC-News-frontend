import React from "react";

const Error = ({ location: { state } }) => {
  console.log(state);
  return (
    <div>
      <p>Oh, no!</p>
      {state === null || state.status === 404 ? (
        <p>404: That page doesn't exist!</p>
      ) : null}
      {state.status === 400 ? <p>400: Bad request!</p> : null}
    </div>
  );
};

export default Error;
