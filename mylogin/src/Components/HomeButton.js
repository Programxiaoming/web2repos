import React from 'react'
import {NavLink, useNavigate } from 'react-router-dom'

function HomeButton() {
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        try{
            navigate("/", {replace:true});
        }catch(error){
            console.log(error);
        }
    }
const buttonStyle ={
    backgroundColor: 'green',
    border: 'none',
    color: 'while',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px'
};

  return (
    <NavLink to="/">
        <button style={buttonStyle} onClick ={handleSubmit}>
            Home
        </button>
    </NavLink>
  )
}

export default HomeButton