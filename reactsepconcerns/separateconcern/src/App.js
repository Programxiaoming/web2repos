import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Content from './pages/Content';
import Details from './pages/Details';
import LoginPage from './pages/LoginPage';
import MainLayout from './layouts/MainLayout';

function App() {
    return (
        <div>
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
    );
}

export default App;