import "./App.css";
import React, { useState } from "react";
import Users from "./Users";
import Users1 from "./Users1";
import UserJSX from "./UserJSX";
import Users3 from "./Users3";
import Users4 from "./Users4";
import Users5 from "./Users5";

function App() {
  function handleClick() {
    alert("You clicked me");
  }

  let [data, setdata] = useState(1);
  const [name, setName] = useState("Sachin");

  function changeState() {
    setdata(data + 1);
  }

  return (
    <div className="App">
      1.This is the first Program Hello world
      <h1>Hello World</h1>
      2. Functional Component
      <Users />
      3. Class Component
      <Users1 />
      4. JSX
      <UserJSX />
      5. OnClick Event
      <br />
      <button onClick={handleClick}>Click me</button>
      <br />
      6. Usestate Hook in Functional Component
      <h1>{data}</h1>
      <br />
      <button onClick={changeState}>Change State</button>
      <br />
      7. UseState in Class Component
      <Users3 />
      <br />
      8. Use props in Functional Component
      <Users4 name={name} />
      <br />
      <button onClick={() => setName("Santosh")}>Change Name</button>
      <button onClick={() => setName("Anant")}>Change Name</button>
      <br />
      9. Use Props in Class Component
      <Users5 name="Ramesh Kumar" />
      <ClassBase name="Jaint Kumar" />
    </div>
  );
}

export default App;

//class base commponent for prop
export class ClassBase extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <br />
        <button onClick={() => this.setName("Kartik Kumar")}>
          Change Name
        </button>
      </div>
    );
  }
}
