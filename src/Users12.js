import React from "react";

class Users12 extends React.Component {
  render() {
    return (
      <div>
        <h1>Component Display</h1>
      </div>
    );
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }
}

export default Users12;
