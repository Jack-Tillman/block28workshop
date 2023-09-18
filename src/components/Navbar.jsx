import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/pink">Pink</Link>
      <Link to="/purple">Purple</Link>
      <Link to="/rainbow">Rainbow</Link>
      <Link to="/colorpicker">Custom!</Link>
    </div>
  );
}

