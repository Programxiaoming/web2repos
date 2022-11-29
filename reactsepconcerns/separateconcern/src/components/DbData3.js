import React from "react";

function DbData3() {
return (
<>
<button onClick={callGetBody}>Read-Single Post</button>
</>
)}

export default DbData3;

function callGetBody() {
    fetch("http://localhost:3001/users/get", 
    {
    method: "POST",
    body: JSON.stringify({
    username: "user1",}),
    headers: {
    "Content-type": "application/json;charset=UTF-8",
    },
    })
    .then((data) => data.json())
    .then((json) => 
    alert(JSON.stringify(json)));
    }
    