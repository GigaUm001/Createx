import React from 'react'
import { Route, Routes } from 'react-router';
import HomePage from './Pages/HomePage/HomePage.jsx';
import Event from './Pages/Event/Event.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/event' element={<Event/>}/>
      </Routes>
    </div>
  )
}

export default App