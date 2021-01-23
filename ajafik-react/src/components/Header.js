function Header() {
    return (
      <div >
        <header id="header" className="header-tops">
  
          <div className="container">
  
            <h1><a href="index.html">Oluwafikayo Ajayi</a></h1>
            {/* Uncomment below if you prefer to use an image logo  */}
            {/* <a href="index.html" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
            <h2>I'm a passionate <span>Software Engineer</span> from Lagos, Nigeria.</h2>
  
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active"><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            {/* .nav-menu  */}
  
            <div className="social-links">
              <a href="https://twitter.com/_ajafik" className="twitter"><i className="icofont-twitter"></i></a>
              <a href="https://facebook.com/ajayioluwafikayo/" className="facebook"><i className="icofont-facebook"></i></a>
              <a href="https://www.instagram.com/ajafik/" className="instagram"><i className="icofont-instagram"></i></a>
              <a href="https://github.com/ajafik" className="github"><i className="icofont-github"></i></a>
              <a href="https://www.linkedin.com/in/oluwafikayoajayi/" className="linkedin"><i className="icofont-linkedin"></i></a>
            </div>
  
          </div>
  
  
  
        </header>
      </div>
    );
  }
  
  export default Header;
  