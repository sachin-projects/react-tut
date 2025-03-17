import React from "react";
import About from "./About";
import Home from "./Home";
import UserComponent from "./UserComponent";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function Users20() {
  let student = [
    { id: 1, name: "Raj", age: 20, email: "raj@gmail.com" },
    { id: 2, name: "Ravi", age: 21, email: "ravi@gmail.com" },
    { id: 3, name: "Rahul", age: 22, email: "rahul@gmail.com" },
    { id: 4, name: "Ramesh", age: 23, email: "ramesh@gmail.com" },
  ];
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/notfound">Not Found</Link>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="*">
            <h1>Not Found</h1>
          </Route>
        </Switch>
        <hr />
        {student.map((stu) => {
          return (
            <h3>
              <Link to={"/UserComponent/" + stu.id + "/" + stu.name}>
                {stu.name}
              </Link>
            </h3>
          );
        })}
        <Route path={"/UserComponent/:id/:name"}>
          <UserComponent />
        </Route>
      </Router>
    </div>
  );
}
