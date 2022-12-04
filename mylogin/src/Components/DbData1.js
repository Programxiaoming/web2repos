import React from 'react'

function DbData1() {
    return (
        <div>
            <button onClick={callGetAll}>Get all users</button>
            <br />
            <button onClick={callPostBody}> post require</button>
            <br />
            <button onClick={callGetQuery}> get by username</button>
            <br />
            <button onClick={callGetParams}> get by params</button>
            <br />
            <button onClick={callGetBody}> get by body</button>
            <br />
            <button onClick={callPutBody}>update</button>
            <br />
            <button onClick={callDeleteParams}> Delete</button>
            <br />
        </div>
    )
}

export default DbData1

//get
function callGetAll() {
    fetch("http://localhost:3001/users", { method: "GET" })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)))
}

//post
function callPostBody() {
    fetch("http://localhost:3001/users", {
        method: "POST",
        body: JSON.stringify({
            username: "Lily",
            password: "lily123"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}

//get query params
function callGetQuery() {
    fetch("http://localhost:3001/user?username=Alex", { method: "GET" })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}

//get path params
function callGetParams() {
    fetch("http://localhost:3001/users/Lily", { method: "GET" })
        .then((data) => {
            return data.json();
        })
        .then((json) => alert(JSON.stringify(json)));

}


//post body params
function callGetBody() {
    fetch("http://localhost:3001/users/get",
        {
            method: "POST",
            body: JSON.stringify({
                username: "Sara",
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}

//update
function callPutBody() {
    fetch("http://localhost:3001/users",
        {
            method: "PUT",
            body: JSON.stringify({
                username: "Alex",
                password: "alex123"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}

//delete 
function callDeleteParams() {
    fetch("http://localhost:3001/users/Alex", { method: "DELETE" })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}


