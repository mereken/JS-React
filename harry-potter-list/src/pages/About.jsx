import './About.css';

const About = () => {
  return (
    <div className="about-content">
      
      <h2>About Ocean Basket: Our Story and Passion</h2>

      <p>
        Welcome to the Ocean Basket family! We're more than just a restaurant; 
        we're a feeling—a taste of the Mediterranean brought to your table. 
        Our philosophy is Simple, Fresh, and Generous. The Ocean Basket journey 
        began with a simple idea: to make delicious, high-quality seafood 
        accessible to everyone, everywhere. We believe that sharing a meal is 
        one of life's greatest pleasures.
      </p>

      <h3>The Mediterranean Way</h3>
      
      <p>
        Our inspiration comes directly from the shores of the Mediterranean Sea. 
        Think sunny skies, cool breezes, and tables overflowing with platters 
        of golden fried calamari, perfectly grilled fish, and our famously 
        irresistible creamy lemon butter sauce. We strip away the formalities 
        to focus on what matters: **great food and great company.**
      </p>

      <h3>Contact & Location</h3>
      
      <div className="contact-details">
        <p><strong>Location:</strong> 14 Seaside Avenue, Coastal City, 75001</p>
        <p><strong>Phone:</strong> +1 (555) 555-FISH (3474)</p>
        <p><strong>Email:</strong> dine@oceanbasket.com</p>
        <p>
          <strong>Hours:</strong> <br/>
          Monday - Thursday: 11:00 AM – 9:00 PM <br/>
          Friday - Sunday: 11:00 AM – 10:30 PM
        </p>
      </div>
      
      <button className="load-btn" style={{marginTop: '2rem'}}>Learn More</button>
      
    </div>
  );
};

export default About;
