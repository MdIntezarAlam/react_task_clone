import React from 'react'
import Home from './component/page1/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page2 from './component/page2/Page2'
import Page3 from './component/page3/Page3'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
        
        </Routes>
    </BrowserRouter>
  )
}

export default App