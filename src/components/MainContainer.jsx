/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Pink from "./Pink";
import Purple from "./Purple";
import Rainbow from "./Rainbow";
import ColorPicker from "./ColorPicker";

export default function MainContainer({ color, setColor, textColor, setTextColor }) {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/pink" element={<Pink />} />
        <Route path="/purple" element={<Purple />} />
        <Route path="/rainbow" element={<Rainbow />} />
        <Route
          path="/colorpicker"
          element={<ColorPicker color={color} setColor={setColor} textColor={textColor} setTextColor={setTextColor}/>}
        />
      </Routes>
    </div>
  );
}
