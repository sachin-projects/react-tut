import { Component } from "react";

class Users3 extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }

  changestate() {
    this.setState({ data: this.state.data + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.changestate()}>StateChange</button>
      </div>
    );
  }
}

export default Users3;
