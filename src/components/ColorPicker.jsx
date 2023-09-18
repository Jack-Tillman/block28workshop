/* eslint-disable react/prop-types */
import { HexColorPicker } from "react-colorful";
import { useEffect } from "react";

//imported HexColorPicker components from an npm package I installed named 'react-colorful
// Github link: https://github.com/omgovich/react-colorful


const ColorPicker = ({ color, setColor, textColor, setTextColor }) => {
  /*
  ColorPicker component utilizes four props: color, textColor, setColor, setTextColor
  color stores the Hex code of whatever color user selects within the color picker itself 
  and then the background color of the page will changes to match the selected color 
  textColor will change based on the background color 
  */

  /* Code below that translates hex code to its full form and then sets the text color based off of that 
  was created by slightly modifying this response on stackoverflow: https://stackoverflow.com/questions/59193701/how-to-change-font-color-based-on-background-color-using-reactjs */
  
  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      //creates hexcode looking like: #rrggbb
      return r + r + g + g + b + b;
    });

    /* 
    Code below will executes a search on the newly made hex string using the
    regular expression pattern that precedes it, and returns an array containing 
    the results of that search.
    */
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  /*
  When color state changes, create variables to hold return value of passing color to hexToRgb function 
  Hold the value of the rgb values in template literal
  create array to store the 3 rgb values that return after matching targetColor string to regExp 

  */
  useEffect(() => {
    let { r, g, b } = hexToRgb(color);
    const targetColor = `rgb(${r},${g},${b})`;
    const colors = targetColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    const brightness = 1;

    const R = colors[1];
    const G = colors[2];
    const B = colors[3];

    const ir = Math.floor((255 - R) * brightness);
    const ig = Math.floor((255 - G) * brightness);
    const ib = Math.floor((255 - B) * brightness);
    setTextColor(`rgb(${ir}, ${ig}, ${ib})`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  return (
    <div
      id="colorpicker-container"
      style={{
        //inline styling to dynamically update background color of the container
        backgroundColor: color,
        color: textColor,
      }}
    >
      <h2>Pick your own color!</h2>
      <section id="color-section">
        {/* color is set on each change, including mouse dragging*/}
        <HexColorPicker color={color} onChange={setColor} />
        <p className="value">Your current color is {color}!</p>
        <p>This component was made with react-colorful! Check it out here:</p>
        <span className="referral-container">
          <a
            className="referral-a"
            href="https://github.com/omgovich/react-colorful"
            rel="external"
          >
            GitHub
          </a>
          <span>|</span>
          <a
            className="referral-a"
            href="https://www.npmjs.com/package/react-colorful"
            rel="external"
          >
            NPM
          </a>
        </span>
      </section>
    </div>
  );
};

export default ColorPicker;
