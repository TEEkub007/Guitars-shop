import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Detail from './pages/Detail';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      {/*Params*/}
      <Route path="/about/:id" element={<Detail/>}/>
      <Route path="/contact/:name" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App