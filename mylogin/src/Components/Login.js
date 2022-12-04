import React from 'react'

function Login() {
    return (
        <div>
            <button onClick={signing}>Login</button>
        </div>
    )
}

export default Login

function signing() {
    fetch("http://localhost:3001/users/login", {
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