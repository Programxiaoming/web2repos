
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
    const [color, setColor] = useState(JSON.parse(sessionStorage.getItem('color')) || "blue");
    const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);
    //const [time, setTime] = useState(new Date().toLocaleTimeString());
    console.log(color);
    console.log(count);

    useEffect(() => {
    sessionStorage.setItem('color', JSON.stringify(color));
    localStorage.setItem('count', JSON.stringify(count));
    }, [color, count]);
    
    return (<div>
    {/* This component has two children that display a message and a clock.
    It also has a button that counts clicks and toggles style color. */}
    <DisplayMessage color={color} />
    <Clock />
    <CounterDisplay count={count}/>
    <UserActions setColor={setColor} setCount={setCount} count={count} color={color}/>
    </div>
    );
    }

function UserActions(props) {
        return <button onClick={() => {
        props.setColor(toggle(props.color)); 
        props.setCount(props.count+1)}}>
        Click me React
        </button>
        }
function CounterDisplay(props) {
    return <p>{props.count}</p>;
        }
   
function toggle(color) {
    return color === "blue" ? "red": color === "red"? "green": "blue";
    }

function DisplayMessage(props) {
        return <h1 style={{color: props.color}}>Hello React World!</h1>;
    }
    
function Clock(props) {
        return (<p>React Clock: {props.time} </p>);
    }
    

export default App;
