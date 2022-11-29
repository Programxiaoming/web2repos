import React from "react";

function DbData4() {
return (
<>
<button onClick={callPutBody}>Update Full PUT</button>
</>
)}

export default DbData4;

function callPutBody() {
    fetch("http://localhost:3001/users", {
    method: "PUT",
    body: JSON.stringify({
    username: "user1",
    password: "1234"
    }),
    headers: {
    "Content-type": "application/json;charset=UTF-8",
    },
    })
    .then((data) => data.json())
    .then((json) => 
    alert(JSON.stringify(json)));
    }