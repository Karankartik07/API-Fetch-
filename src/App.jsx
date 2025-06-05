import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Data from './Component/Data'
import About from './Component/About'
import ProductInfo from './Component/ProductInfo';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="/about" element={<About />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
        </Routes>
      </Router>

    </>
  )
}
