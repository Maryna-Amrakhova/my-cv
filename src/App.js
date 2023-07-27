import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Experience from './components/pages/experience';
import Education from './components/pages/education';
import Portfolio from './components/pages/portfolio';


function App() {
    return (
        <Router>
            <Navbar />
            
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} /> 
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/education' element={<Education />} />                
                <Route path='/contact' element={<Contact />} />
                
            </Routes>
            
        </Router>
    );
}
 
export default App;