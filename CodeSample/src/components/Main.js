import React , {useState, useEffect}  from 'react'
import Clock  from './Clock';
import UserAction from './UserAction';
import CounterDisplay from './CounterDisplay';
import DisplayMessage from './DisplayMessage';
import LogoutButton from './LogoutButton';

const Main = () => {
  const [color, setColor] = useState(JSON.parse(sessionStorage.getItem('color')) || 'blue');
  const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);
 useEffect(() => {
    sessionStorage.setItem('color', JSON.stringify(color));
    localStorage.setItem('count', JSON.stringify(count));
  }, [color, count]);

  return (<div>
    <DisplayMessage color={color} />
    <Clock />
    <CounterDisplay count = {count}/>
    <UserAction 
      setColor = {setColor} 
      setCount={setCount} 
      count={count} 
      color={color}/>
  </div>
  );
}

export default Main