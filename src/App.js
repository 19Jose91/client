import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
