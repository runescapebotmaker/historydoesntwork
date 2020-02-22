import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { css, cx } from "emotion";
import { withRouter } from "react-router-dom";

const css_for_form = css`
  form {
    padding: 50px;
    background-color: gray;
  }
  form h1 {
    color: red;
  }
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.props.history.push("/some/Path");
    console.log("clicked");
  };
  render() {
    return (
      <form onSubmit={this.HandleClick} className={css_for_form}>
        <label>email:</label>
        <input></input>
        <label>password:</label>
        <input></input>
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Submit
        </Button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
