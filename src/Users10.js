import React from "react";

class Users10 extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "Ramesh",
    };
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Render</h1>
        <button
          onClick={() => {
            this.setState({ user: "Suresh" });
          }}
        >
          Update Click{" "}
        </button>
      </div>
    );
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}

export default Users10;
