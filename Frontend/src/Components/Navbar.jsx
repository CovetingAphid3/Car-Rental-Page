import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <h1>ZoomWheels</h1>
      </Link>
      <Link to={"/pricing"}>Pricing</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/sign-in"}>Log-in</Link>
      <Dropdown/>
    </div>
  );
};

export default Navbar;
