import React from "react";

function DbData5() {
return (
<>
<button onClick={callPatchBodyUsername}>Update Partial PATCH</button>
</>
)}

export default DbData5;

function callPatchBodyUsername() {
    fetch("http://localhost:3001/users/user2/password", {
    method: "PATCH",
    body: JSON.stringify({
    password: "8888"
    }),
    headers: {
    "Content-type": "application/json;charset=UTF-8",
    },
    })
    .then((data) => data.json())
    .then((json) => 
    alert(JSON.stringify(json)));
    }
    