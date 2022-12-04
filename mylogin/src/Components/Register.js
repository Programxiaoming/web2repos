import React from 'react'

function Register() {
  return (
    <div>
        <button onClick={registration}>Register</button>
    </div>
  )
}

export default Register


function registration() {
    fetch("http://localhost:3001/users/register", {
        method: "POST",
        body: JSON.stringify({
            username: "Lily",
            password: "Lily123!!!"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}