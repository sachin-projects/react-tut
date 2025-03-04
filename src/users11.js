import React from "react";
import Users12 from "./Users12";

class Users11 extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div>
        <h1>Component will unmount method</h1>
        {this.state.show ? <Users12 /> : null}
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
            console.log("button clicked");
          }}
        >
          Hide show toggle
        </button>
      </div>
    );
  }
}

export default Users11;
