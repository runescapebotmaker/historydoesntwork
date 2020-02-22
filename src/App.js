import React from "react";
import Button from "@material-ui/core/Button";

function SubmitForm() {
  function handleClick(e) {
    e.preventDefault();
    console.log("[handleClick()]");
  }

  return (
    <>
      <form onSubmit={handleClick}>
        <div>
          <label>email</label>
        </div>
        <div>
          <input placeholder="email"></input>
        </div>
        <div>
          <label>password</label>
        </div>
        <div>
          <input placeholder="password"></input>
        </div>
        <button>OldSchool Submit Button</button>
        {/* type submit fixes the exact error */}
        <Button variant="contained" color="primary" type="submit">
          Material UI Button
        </Button>
      </form>
    </>
  );
}

export default SubmitForm;
