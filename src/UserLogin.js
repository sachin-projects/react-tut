import React, { useState } from "react";

function UserLogin(props) {
  const [login, setlogin] = useState(props.login);
  console.log(props.login);

  return (
    <h1>
      {login == "1"
        ? "Ramesh Login"
        : login == "2"
        ? "Suresh Login"
        : login == "3"
        ? "GuestLogin"
        : ""}
    </h1>
  );
}
export default UserLogin;
