import { LoggedInContext } from '../App';
import React , {useContext} from 'react'

function LogoutButton() {
const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);

const logoutHandler = ()=>{
    setIsLoggedIn(false);
}
  return (
    <div className='form-btn'>
        <button onClick={logoutHandler}>
            Logout
        </button>
    </div>
  )
}

export default LogoutButton;