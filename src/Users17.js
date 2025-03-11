import react, { PureComponent } from "react";

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
        <h1>Pure Component Example = {this.props.data}</h1>
        <button
          onClick={() => {
            alert(this.props.data);
          }}
        >
          Pure Component
        </button>
      </>
    );
  }
}
