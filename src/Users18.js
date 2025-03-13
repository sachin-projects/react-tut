import react, { createRef } from "react";

export default class Users18 extends react.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    this.inputRef.current.value = "Hello World";
  }

  render() {
    console.log(this.inputRef);

    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
