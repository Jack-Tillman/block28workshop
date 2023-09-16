import { HexColorPicker } from "react-colorful";
//imported HexColorPicker components from an npm package I installed named 'react-colorful
// Github link: https://github.com/omgovich/react-colorful

const ColorPicker = ({ color, setColor }) => {
  return (
    <div 
      id="colorpicker-container"
      style={{
        //inline styling to dynamically update background color of the container
        backgroundColor: color
      }}
    >
      <h2>Pick your own color!</h2>
      <section id="color-section">
        {/* color is set on each change, including mouse dragging*/}
        <HexColorPicker 
          color={color} 
          onChange={setColor}
        />
        <p className="value">
          Your current color is {color}!
        </p>
      </section>
    </div>
  )
};

export default ColorPicker;

