import { NavLink } from "react-router-dom";
import './NavBar.css'; 
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">Ocean Basket</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/items">Meals</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;