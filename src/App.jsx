import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Home />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
