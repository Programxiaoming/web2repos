//import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
    const [color, setColor] = React.useState(JSON.parse(sessionStorage.getItem('color')) || "blue");
    const [count, setCount] = React.useState(JSON.parse(localStorage.getItem('count')) || 0);
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    console.log(color);
    console.log(count);

    React.useEffect(() => {
    sessionStorage.setItem('color', JSON.stringify(color));
    localStorage.setItem('count', JSON.stringify(count));
    const interval = setInterval(() =>
        setTime(new Date().toLocaleTimeString(),1000));
    return () => clearInterval(interval);
    }, [color, count]);
    
    return (<div>
    {/* This component has two children that display a message and a clock.
    It also has a button that counts clicks and toggles style color. */}
    <DisplayMessage color={color} />
    <Clock />
    <p>{count}</p>
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

function toggle(color) {
        if (color === "blue") {
            return "red";
        } else if (color ==="red") {
            return "green";
        } else if (color ==="green") {
            return "blue";
        }
    }

function DisplayMessage(props) {
        return <h1 style={{color: props.color}}>Hello React World!</h1>;
    }
    
function Clock(props) {
        return (<p>React Clock: {props.time} </p>);
    }
    

export default App;
