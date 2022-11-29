import React from "react";

function DbData1() {
return (
<>
<button onClick={callGetQuery}>Read-Single Get</button>
</>
)}

export default DbData1;
function callGetQuery() {
    fetch("http://localhost:3001/user?username=user1", { method: "GET" })
    .then((data) => data.json())
    .then((json) => 
    alert(JSON.stringify(json)));
    }
    