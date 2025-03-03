import React from "react";

class Users8 extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }

  render() {
    console.log("render");
    return <h1>Hello</h1>;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
}

export default Users8;
