import Navbar from './components/Navbar'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("#aabbcc");
  const [textColor, setTextColor] = useState("rgb(99, 99, 100)");

  return (
    <div id="container">
        <Navbar />
        <MainContainer 
          color={color} 
          setColor={setColor}
          textColor={textColor}
          setTextColor={setTextColor}
          />
        <Footer />
    </div>
  )
}

export default App
