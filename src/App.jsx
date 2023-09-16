import Navbar from './components/Navbar'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div id="container">
        <Navbar />
        <MainContainer 
          color={color} 
          setColor={setColor}/>
        <Footer />
    </div>
  )
}

export default App
