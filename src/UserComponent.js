import React from "react";
import { withRouter } from "react-router-dom";

function UserComponent(props) {
  return (
    <div>
      <h1>User Component id {props.match.params.id}</h1>
      <h2>This is user Component {props.match.params.name}</h2>
    </div>
  );
}

export default withRouter(UserComponent);
