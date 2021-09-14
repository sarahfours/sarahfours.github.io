import './App.css';

function App() {
  return (
    <div className="app">
        <header>
            <div className="logo">
                <img src="img/devjane.png" alt="" />
            </div>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                    <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                </ul>
            </nav>
        </header>
        
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Jane Smith</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src="img/dev-jane-01.jpg" alt="Jane Smith smiling" />
        </section>
        
        
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Design + Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                <div className="service">
                    <h3>E-Commerce</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                <div className="service">
                    <h3>WordPress</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            
            <a href="#work" className="btn">My Work</a>
        </section>
        
        <section className="about-me" id="about">
           <h2 className="section__title section__title--about">Who I am</h2>
           <p className="section__subtitle section__subtitle--about">Designer & developer based out of NYC</p>
           
           <div className="about-me__body">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
           
           <img src="img/dev-jane-02.jpg" alt="Jane leaning against a bus" />
        </section>
        
        <section className="my-work" id="work">
            <h2 className="section__title">My work</h2>
            <p className="section__subtitle"></p>
            
            <div className="portfolio">
                <a href="#" className="portfolio__item">
                    <img src="img/portfolio-01.jpg" alt="" className="portfolio__img" />
                </a>
                
                <a href="#" className="portfolio__item">
                    <img src="img/portfolio-02.jpg" alt="" className="portfolio__img" />
                </a>
                
                <a href="#" className="portfolio__item">
                    <img src="img/portfolio-03.jpg" alt="" className="portfolio__img" />
                </a>
                
                <a href="#" className="portfolio__item">
                    <img src="img/portfolio-04.jpg" alt="" className="portfolio__img" />
                </a>
                
                <a href="#" className="portfolio__item">
                    <img src="img/portfolio-05.jpg" alt="" className="portfolio__img" />
                </a>
                
                <a href="#" className="portfolio__item">
                    <img src="img/portfolio-06.jpg" alt="" className="portfolio__img" />
                </a>
                
                <a href="#" className="portfolio__item">
                    <img src="img/portfolio-07.jpg" alt="" className="portfolio__img" />
                </a>
                
                <a href="#" className="portfolio__item">
                    <img src="img/portfolio-08.jpg" alt="" className="portfolio__img" />
                </a>
                
                <a href="#" className="portfolio__item">
                    <img src="img/portfolio-09.jpg" alt="" className="portfolio__img" />
                </a>
                
                <a href="#" className="portfolio__item">
                    <img src="img/portfolio-10.jpg" alt="" className="portfolio__img" />
                </a>
            </div>
        </section>
        
        <footer>
            <a href="mailto:hello@jane.dev" className="footer__link">hello@jane.dev</a>
            <ul className="social-list">
                <li className="social-list__item"><a className="social-list__link" href="https://codepen.io">a</a></li>
                <li className="social-list__item">b<a className="social-list__link" href="http://dribbble.com"></a></li>
                <li className="social-list__item"><a className="social-list__link" href="https://twitter.com">c</a></li>
                <li className="social-list__item"><a className="social-list__link" href="https://github.com">d</a></li>
            </ul>
        </footer>
    </div>
  );
}

export default App;
