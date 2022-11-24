
import React, {useState, useEffect} from 'react';
import { UserActions } from './UserActions';
import { CounterDisplay } from './CounterDisplay';
import { DisplayMessage } from './DisplayMessage';
import { Clock } from './Clock';

export function Main() {
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
export default Main;