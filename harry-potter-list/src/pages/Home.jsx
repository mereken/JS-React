import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '3rem', color: 'var(--ocean-blue)', marginBottom: '1rem' }}>
        Welcome to Ocean Basket
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
        The most loved seafood restaurant. Fresh fish, sushi, and that famous lemon sauce.
      </p>
      
      
      
      <div style={{ marginTop: '2rem' }}>
        <Link to="/items">
          <button className="load-btn" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>
            View Our Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;