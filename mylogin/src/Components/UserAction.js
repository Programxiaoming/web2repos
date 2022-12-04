import React from 'react';

function UserAction(props) {
  const color = (props.color === "blue" ? "red" : (props.color === 'red' ? 'green' : 'blue'));
  const handleOnClick = () => {
    props.setColor(color);
    props.setCount(props.count + 1);
  };
  return (
    <button onClick={handleOnClick}>Click me React</button>
  );
}

export default UserAction
