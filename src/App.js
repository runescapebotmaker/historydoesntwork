import React from "react";
import { useHistory } from "react-router-dom";

function HomeButton() {
  /* sample code https://reacttraining.com/react-router/web/api/Hooks/usehistory */
  let history = useHistory();

  function handleClick() {
    /* history.push("/home"); */
    history.replace("/home");
    console.log("[handleClick()]");
  }

  return (
    <>
      {React.version}
      <button type="button" onClick={handleClick}>
        Go home {React.version}
      </button>
    </>
  );
}

export default HomeButton;
