import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Products from './components/Products'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="flex-1 pb-24 pt-12">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Products />
                </>
              }
            />
            <Route path="/products/:productId" element={<SingleProduct />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
