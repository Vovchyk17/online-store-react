import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Products from './components/Products'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <Products />
      </main>
      <Footer />
    </div>
  )
}

export default App
