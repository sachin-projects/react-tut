import React from "react";

class Users9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <h1>Component Did Update Method</h1>
        <button onClick={() => this.updatenew(this)}>Upate Component</button>
      </>
    );
  }

  componentDidUpdate() {
    console.log("Component Did Update Method");
  }

  componentDidMount() {
    console.log("Component Did Mount Method");
  }

  updatenew(param) {
    alert("call....");
    param.setState({ count: param.state.count + 1 });
  }
}

export default Users9;
