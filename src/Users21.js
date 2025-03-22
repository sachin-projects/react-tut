import React, { useEffect, useState } from "react";

export default function Users21() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users").then((result) => {
      result.json().then((resp) => {
        //console.log(resp.users[2].id);
        setData(resp.users);
      });
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tboady>
          {data.map((d) => {
            return (
              <tr>
                <td>{d.id}</td>
                <td>{d.firstName}</td>
                <td>{d.lastName}</td>
                <td>{d.email}</td>
                <td>{d.gender}</td>
              </tr>
            );
          })}
        </tboady>
      </table>
    </div>
  );
}
