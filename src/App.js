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
import Users11 from "./users11";
import { useEffect } from "react";
import "./Style.css";
import style from "./Custom.module.css";
import { Button } from "react-bootstrap";
import BootstrapAlert from "./BootstrapAlert";
import User15 from "./Users15";
import usePlaceholder from "./../node_modules/react-bootstrap/esm/usePlaceholder";
import Users16 from "./Users16";
import Users17 from "./Users17";

function App() {
  function handleClick() {
    alert("You clicked me");
  }

  let [data, setdata] = useState(1);
  const [name, setName] = useState("Sachin");
  const [txt, settxt] = useState(null);
  const [txtpo, setTxtpo] = useState(false);
  const [status, setStatus] = useState(true);
  let [no, setNo] = useState(0);

  let [frname, setFrname] = useState("");
  let [tnc, setTnc] = useState(false);
  let [gender, setGender] = useState("");
  let [d, setD] = useState(1);
  let [p, setP] = useState(1);

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

  useEffect(() => {
    console.log("Use Effect Hook Run as component did mount");
  });

  useEffect(() => {
    console.log("update D State");
  }, [d]);

  let student = [
    {
      Name: "Santosh",
      email: "santosh@gmail.com",
      Phone: "1234567890",
    },
    {
      Name: "Sachin",
      email: "sachin@gmail.com",
      Phone: "1234567890",
    },
    {
      Name: "Sandeep",
      email: "sandeep@gmail.com",
      Phone: "1234567890",
    },
  ];

  function exchangeData(testdata) {
    alert(testdata);
    console.log(testdata);
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
      19. class life cycle (componentWillUnmount)
      <br />
      <Users11 />
      <br />
      20. useState Hook (Already Use)
      <br />
      <h1>useState</h1>
      <br />
      21. useEffect Hook
      <br />
      <h1>This is UseEffect Hook</h1>
      <button
        onClick={() => {
          setNo(no + 1);
        }}
      >
        Click for Update
      </button>
      22. UseEffect Hook update after state update and prop update
      <h1>useEffect auto Call and call specific state and prop</h1>
      <button
        onClick={() => {
          setD(d + 1);
        }}
      >
        Click Button
      </button>
      <button
        onClick={() => {
          setP(p + 1);
        }}
      >
        Click for p
      </button>
      <br />
      23. use of css style in react
      <h1 className="primary">use of css style in react</h1>
      <h1 style={{ color: "blue", backgroundColor: "Yellow" }}>In Line Css</h1>
      <h1 className={style.sucess}>use of css style in react</h1>
      24. Use React Bootstrap Library
      <br />
      <Button onClick={() => alert("Hello")}>Click Me</Button>
      <hr />
      <BootstrapAlert />
      <hr />
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <br />
      25. Use of MAP Function
      {student.map((item) => {
        return (
          <h4>
            Name = {item.Name}, Email = {item.email}, Phone = {item.Phone}
          </h4>
        );
      })}
      <br />
      26. Re-useability of component
      <br />
      {student.map((item) => {
        return <User15 data={item} />;
      })}
      <br />
      27. Send Data Child to Parent Component / Lifiting state
      <br />
      <Users16 data={exchangeData} />
      <br />
      28. Pour Componet use only in class
      <br />
      <Users17 />
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
