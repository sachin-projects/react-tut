import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function RouterSample() {
  return (
    <Router>
      <Link to="/home">Home</Link>
      <br></br>
      <Link to="/about">About</Link>

      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <h3>This is the Home Page Main Page</h3>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About Page</h1>
      <h3>This is the About Page Main Page</h3>
    </>
  );
}

export default RouterSample;
