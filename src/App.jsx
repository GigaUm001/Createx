import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


import { Route, Routes } from 'react-router';
import HomePage from './Pages/HomePage/HomePage.jsx';
import Event from './Pages/Event/Event.jsx';
import Course from './Pages/Course/Course.jsx';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<HomePage/>}/> */}
        <Route path='/' element={<Course />} />
        {/* <Route path='/event' element={<Event/>}/> */}
      </Routes>
    </div>
  )
}

export default App