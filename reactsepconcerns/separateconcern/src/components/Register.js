import React from "react";

function Register() {
    return (
    <>
        <button onClick={registering}>Register</button>
    </>
)}

export default Register;

async function registering() {
    fetch("http://localhost:3001/users/register", {
    method: "POST",
    body: JSON.stringify({
        username: "Xiaoming1", 
        password: "Abcd1234$",
    }),
    headers: {
    "Content-type": "application/json;charset=UTF-8",
    },
    })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
    }