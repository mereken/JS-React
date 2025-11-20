import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ErrorBox from "../components/ErrorBox";
import '../components/AuthForm.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signup(email, password);
      navigate("/profile");
    } catch (err) {
      setError("Failed to create an account: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="auth-container"> 
      <h1>Sign Up</h1>
      {error && <ErrorBox message={error} />}
      <form onSubmit={handleSubmit} className="auth-form"> 
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button disabled={loading} type="submit" className="load-btn">
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <p className="auth-footer"> 
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default Signup;