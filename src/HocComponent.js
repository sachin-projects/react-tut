import react from "react";

function HocComponent(props) {
  return <ChildComponent cmp={TestComponent} />;
}

function ChildComponent(props) {
  return (
    <>
      <div style={{ backgroundColor: "red", padding: "20px" }}>
        <props.cmp />
      </div>
      <br />
      <div style={{ backgroundColor: "green", padding: "20px" }}>
        <props.cmp />
      </div>
    </>
  );
}

function TestComponent() {
  return <h1 style={{ color: "#fff" }}>Test Component Hear</h1>;
}

export default HocComponent;
