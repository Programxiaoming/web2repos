
//import { Route, Routes} from "react-router-dom";
//import About from './pages/About';
//import Contact from './pages/Contact';
//import Content from './pages/Content';
//import Details from './pages/Details';
//import LoginPage from './pages/LoginPage';
//import MainLayout from './layouts/MainLayout';
//import Home from './pages/Home'

import React from 'react';
import './App.css';
import {useState, createContext} from 'react';
import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn];
    return (
        <div>
        <LoggedInContext.Provider value={loggedInValueToProvide}>
          <Header/>
          <div>
          {isLoggedIn? <Home/>: <LoginForm/> }
          </div>
        </LoggedInContext.Provider>
          <Footer/>
        </div>
        /**
         * 
         *         <div>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="content" element={<Content />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="details" element={<Details />} />
                    <Route path="LoginPage" element={<LoginPage />} />
                </Route>
                <Route path="*" element={<p>Invalid URL</p>} />
            </Routes>
        </div>
         */

    );
}

export default App;

export const LoggedInContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => { }
  });