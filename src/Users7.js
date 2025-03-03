import react from "react";

class Users7 extends react.Component {
  constructor() {
    super();
    this.state = {
      data: "hello",
    };
    console.log("constructor");
  }
  render() {
    console.log("render");
    console.log(this);
    return <h1>this is class component {this.state.data}</h1>;
  }
}

export default Users7;
