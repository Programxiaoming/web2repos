import React, { useContext, useRef } from "react";
import './LoginForm.css';
import Register from "./Register";
import {LoggedInContext} from "../App";

function LoginForm() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);

    const handleSubmit = (event) => {
        event.preventDefault()
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        fetch("http://localhost:3001/users/login", {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((data) => data.json())
        .then((json) => {alert(JSON.stringify(json));
        json.success ? setIsLoggedIn(true): setIsLoggedIn(false);
    })

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-item'>
                <label htmlFor='username'>Username:</label>
                <input id='username' type='text' ref={usernameRef} required />
            </div>
            <div className='form-item'>
                <label htmlFor='password'>Password:</label>
                <input id='password' type='password' ref={passwordRef} required />
            </div>
            <div className='form-btn'>
                <button type="submit">Login</button>
                <Register/>
            </div>
        </form>
    );
}
export default LoginForm
