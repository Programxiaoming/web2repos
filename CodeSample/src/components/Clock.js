import React from 'react';

function Clock() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => { clearInterval(interval); };
  }, [time]);

  return <p> React Clock: {time} </p>;
}

export default Clock;