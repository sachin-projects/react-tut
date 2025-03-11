import React from "react";

function Users15(prop) {
  return (
    <>
      <div style={{ background: "blue", color: "white" }}>
        Name : {prop.data.Name} | Email : {prop.data.email} | Phone :
        {prop.data.Phone}
      </div>
    </>
  );
}

export default Users15;
