 import React from "react";
 import { useContext, useRef } from "react";
 import {LoggedInContext} from "../App";


 function LoginForm() {
   const usernameRef = useRef();
   const passwordRef = useRef();
   const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);//new added

   const handleSubmit = (event) => {
        event.preventDefault(); // prevent page reload
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        // to fill in based on callPostBody
        fetch("http://localhost:3001/users/login", {
            method: "POST",
            body: JSON.stringify({
                username: username, 
                password: password,
            }),
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            }
            })
            .then((data) => data.json())
            .then((json) => {alert(JSON.stringify(json));
            json.success ? setIsLoggedIn(true): setIsLoggedIn(false);
        })
    };

   return (
   <form onSubmit={handleSubmit}>
   <label htmlFor="username">Username</label>
   <input id="username" type="text" ref={usernameRef} required />
   <label htmlFor="password">Password</label>
   <input id="password" type="password" ref={passwordRef} required />
   <button type="submit">Login</button>
   </form>
   );

}


export default LoginForm;
