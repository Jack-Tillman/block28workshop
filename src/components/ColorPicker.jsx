import { HexColorPicker } from "react-colorful";
import { useState, useEffect } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#aabbcc");


  useEffect(() => {
    // updateColor();
  }, []);
// https://stackoverflow.com/questions/67117635/change-background-color-using-react-color-picker

  return (
    <div id="colorpicker-container">
        <h2>Pick your own color!</h2>
        <section id="color-section">
          <HexColorPicker color={color} onChange={(e)=> setColor(e.hex)} />
        </section>
    </div>
  )
};

export default ColorPicker;