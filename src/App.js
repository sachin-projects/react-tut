import "./App.css";
import React, { useState } from "react";
import Users from "./Users";
import Users1 from "./Users1";
import UserJSX from "./UserJSX";
import Users3 from "./Users3";
import Users4 from "./Users4";
import Users5 from "./Users5";
import UserLogin from "./UserLogin";
import User6 from "./Users6";
import Users7 from "./Users7";
import Users8 from "./Users8";
import Users9 from "./Users9";
import Users10 from "./Users10";

function App() {
  function handleClick() {
    alert("You clicked me");
  }

  let [data, setdata] = useState(1);
  const [name, setName] = useState("Sachin");
  const [txt, settxt] = useState(null);
  const [txtpo, setTxtpo] = useState(false);
  const [status, setStatus] = useState(true);

  let [frname, setFrname] = useState("");
  let [tnc, setTnc] = useState(false);
  let [gender, setGender] = useState("");

  function changeState() {
    setdata(data + 1);
  }

  function changeval(e) {
    console.log(e.target.value);
    settxt(e.target.value);
    setTxtpo(false);
  }

  function submitform(e) {
    e.preventDefault();
    console.log(frname, tnc, gender);
  }

  function parrentfun() {
    alert("this msg form parent");
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
      <br />
      10. Get Input Box Value
      <br />
      <input type="text" onChange={changeval} />
      <br />
      <h1>show Text :{txtpo ? txt : null}</h1>
      <button onClick={() => setTxtpo(true)}>Display Text</button>
      <br />
      11. show hide element / toggle effect
      <br />
      <h1>Hi,{status ? "Good Morining" : null}</h1>
      <br />
      <button onClick={() => setStatus(!status)}>Toogle</button>
      <br />
      12. Handle from
      <br />
      <form onSubmit={submitform}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            setFrname(e.target.value);
          }}
        />
        <br />
        <br />
        <select
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option>--Pl. Select--</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={(e) => {
            setTnc(e.target.checked);
          }}
        />
        <br />
        <br />
        <button type="submit">Submit Form</button>
      </form>
      <br />
      13. Conditional formating if else <br />
      <UserLogin login="2" />
      <br />
      14. call parent function to child Component
      <br />
      <User6 data={parrentfun} />
      <br />
      15. class life cycle (constructor)
      <br />
      <Users7 />
      <br />
      16. class life cycle (componentDidMount)
      <br />
      <Users8 />
      <br />
      17. class life cycle (componentDidUpdate)
      <Users9 />
      <br />
      18. Class life cycle (shouldComponentUpdate)
      <br />
      <Users10 />
    </div>
  );
}

export default App;

//class base commponent for prop
export class ClassBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <br />
        <button onClick={() => this.setState({ name: "Kartik Kumar" })}>
          Change Name H1
        </button>
      </div>
    );
  }
}
