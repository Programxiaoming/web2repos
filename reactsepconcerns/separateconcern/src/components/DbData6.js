import React from "react";

function DbData6() {
return (
<>
<button onClick={callDeleteParams}>Delete</button>
</>
)}

export default DbData6;

function callDeleteParams() {
    fetch("http://localhost:3001/users/user1", 
    { method: "DELETE" })
    .then((data) => data.json())
    .then((json) => 
    alert(JSON.stringify(json)));
    }
    