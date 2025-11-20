import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import './NavBar.css'; 

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };
  
  return (
    <nav className="navbar">
      <div className="nav-brand">Ocean Basket</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/items">Meals</NavLink>
        <NavLink to="/about">About</NavLink>
        
        {!user ? (
            <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
            </>
        ) : (
            <>
                <NavLink to="/profile">Profile</NavLink>
                <button 
                    onClick={handleLogout} 
                    className="logout-button" 
                >
                    Logout
                </button>
            </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;