import { useState } from 'react'
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Home />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
