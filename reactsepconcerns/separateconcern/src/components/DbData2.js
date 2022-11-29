import React from "react";

function DbData2() {
return (
<>
<button onClick={callPostBody}>Create user</button>
</>
)}

export default DbData2;

function callPostBody() {
    fetch("http://localhost:3001/users", {
    method: "POST",
    body: JSON.stringify({username: "user1", password: "1234",
    }),
    headers: {
    "Content-type": "application/json;charset=UTF-8",
    },
    })
    .then((data) => data.json())
    .then((json) => 
    alert(JSON.stringify(json)));
    }