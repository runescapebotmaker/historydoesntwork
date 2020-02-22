import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

function HomeButton() {
  /* sample code https://reacttraining.com/react-router/web/api/Hooks/usehistory */
  let history = useHistory();

  function handleClick() {
    /* history.push("/home"); */
    history.replace("/homebuton");
    console.log("[handleClick()]");
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Go to 'homebutton'
      </button>
    </>
  );
}

const App = () => {
  return (
    <>
      <p style={{ color: "#D00" }}>{React.version}</p>
      <Router>
        <HomeButton></HomeButton>
      </Router>
    </>
  );
};

export default App;
