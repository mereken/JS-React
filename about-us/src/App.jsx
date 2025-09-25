import './App.css'

function App(){
  return (
    <section id="about-us">
      <div className="about-wrapper">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Student: Nuray Mereke <br />
            Email: name_surname@kbtu.kz <br />
            StudentId: 23B000000 <br />
            Github link: <a href = 'https://github.com/mereken/JS-React' >JS React repository</a>
          </p>
          <a href="#">
            <button className="btn-black">Learn More</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default App
