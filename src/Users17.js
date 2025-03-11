import react, { PureComponent } from "react";
import { defult } from "./Users17";

export default class Users17 extends react.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("update");
    return (
      <>
        <h1>Pure Component Example</h1>
        <button onClick={() => this.setState({ count: 1 })}>
          Pure Component
        </button>
      </>
    );
  }
}
