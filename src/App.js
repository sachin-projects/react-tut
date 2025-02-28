import "./App.css";
import React, { useState } from "react";
import Users from "./Users";
import Users1 from "./Users1";
import UserJSX from "./UserJSX";
import Users3 from "./Users3";

function App() {
  function handleClick() {
    alert("You clicked me");
  }

  let [data, setdata] = useState(1);

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
    </div>
  );
}

export default App;
