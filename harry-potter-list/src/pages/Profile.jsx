import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import './Profile.css'

const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login"); 
        } catch (err) {
            console.error("Failed to log out:", err);
        }

    };
    return (
    <div className="profile-container"> 
      <h1>My Profile</h1>
      <div className="profile-details"> 
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>User ID:</strong> {user?.uid}</p>
      </div>
      <button onClick={handleLogout} className="load-btn logout-btn-danger"> 
        Log Out
      </button>
    </div>
  );
};

export default Profile;