// import About from './pages/About'
// import Contact from './pages/Contact'
// import Content from './pages/Content';
// import Details from './pages/Details';
// import MainLayout from './layouts/MainLayout';
// import { Route, Routes } from 'react-router-dom'

import React,{useState, createContext} from 'react';
import Home from './Pages/Home'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import LoginForm from './Components/LoginForm';

const centerItem ={
  display:'flex',
  textAlign:'center',
  alignItems: 'center',
  justifyContent: 'center',
  margin:'50px'
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn];
  return (
    /**       <Routes>
         <Route path='/' element={<MainLayout />}>
           <Route index element={<Home />} />
           <Route path='about' element={<About />} />
           <Route path='contact' element={<Contact />} />
           <Route path='content' element={<Content />} />
           <Route path='details' element={<Details />} />
         </Route>
       </Routes> */

    <div >
    <LoggedInContext.Provider value={loggedInValueToProvide}>
      <Header/>
      <div style={centerItem}>
      {isLoggedIn? <Home/>: <LoginForm/> }
      </div>
    </LoggedInContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;

export const LoggedInContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => { }
});

