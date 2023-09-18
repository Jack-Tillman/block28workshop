import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer-container">
      <Link to="/">Home</Link>
      {/* Wanted footer to be slightly different from header 
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/pink">Pink</Link>
      <Link to="/purple">Purple</Link>
      <Link to="/rainbow">Rainbow</Link> */}
      <Link to="/colorpicker">Custom!</Link>
    </div>
  );
}
