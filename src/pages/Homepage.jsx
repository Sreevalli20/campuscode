import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/globals.css';
import './Homepage.css';

function Homepage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="campus-landing">
      {/* Custom cursor glow effect */}
      <div
        className="landing-cursor"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      {/* Navigation */}
      <header className="landing-nav">
        <button type="button" className="landing-logo" aria-label="CampusCode home">
          <span className="landing-logo-mark" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>
            <strong>CAMPUSCODE</strong>
            <small>HACKATHON ARENA</small>
          </span>
        </button>

        <nav className="landing-links">
          <button onClick={() => scrollToSection('about')}>ABOUT</button>
          <button onClick={() => scrollToSection('works')}>HOW IT WORKS</button>
          <button onClick={() => scrollToSection('hackathons')}>HACKATHONS</button>
          <button onClick={() => scrollToSection('community')}>COMMUNITY</button>
          <button className="landing-join" onClick={handleRegister}>JOIN CAMPUSCODE<span>↗</span></button>
        </nav>

        <div className="landing-nav-actions">
          <button className="landing-login" onClick={handleLogin}>LOGIN</button>
          <button className="landing-join" onClick={handleRegister}>JOIN CAMPUSCODE<span>↗</span></button>
        </div>

        <button className="landing-menu" aria-label="Toggle menu">☰</button>
      </header>

      {/* Hero Section */}
      <section className="landing-hero">
        <div className="landing-hero-grid"></div>
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>
        <div className="hero-glow glow-three"></div>

        <div className="hero-network">
          <svg viewBox="0 0 1400 800" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 600 C180 450 250 620 420 430 S680 80 900 270 S1150 500 1400 180"></path>
            <path d="M80 130 C280 300 380 80 570 270 S800 620 1080 500 S1250 400 1400 620"></path>
            <path d="M250 800 C400 600 570 650 720 460 S970 180 1160 80"></path>
            <circle cx="420" cy="430" r="5"></circle>
            <circle cx="900" cy="270" r="5"></circle>
            <circle cx="1080" cy="500" r="5"></circle>
            <circle cx="570" cy="270" r="5"></circle>
            <circle cx="1160" cy="80" r="5"></circle>
          </svg>
        </div>

        <div className="hero-top-line">
          <span><i></i>THE DIGITAL HOME FOR STUDENT INNOVATION</span>
          <span>CHENNAI · INDIA</span>
        </div>

        <div className="hero-content">
          <div className="hero-label">CAMPUSCODE / 001</div>
          <h1>BUILD<br /><span>COMPETE</span><br />SHIP.</h1>
          <div className="hero-description">
            <p>A digital arena for students<br />who don't just have ideas.<br />They build them.</p>
            <button className="hero-explore" onClick={handleRegister}>
              <span>EXPLORE HACKATHONS</span>
              <b>↗</b>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="landing-about">
        <div className="container">
          <div className="about-content">
            <div className="about-label">ABOUT CAMPUSCODE</div>
            <h2>The Student Innovation Platform</h2>
            <p>
              CampusCode is a digital arena where students from across India come together to build,
              compete, and ship their ideas. We host hackathons, coding challenges, and innovation
              events that help students transform their concepts into reality.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="works" className="landing-works">
        <div className="container">
          <div className="section-header">
            <div className="section-label">HOW IT WORKS</div>
            <h2>Your Journey From Idea to Impact</h2>
          </div>

          <div className="works-grid">
            <div className="work-card">
              <div className="work-number">01</div>
              <h3>Discover</h3>
              <p>Explore hackathons and challenges that match your interests and skills.</p>
            </div>

            <div className="work-card">
              <div className="work-number">02</div>
              <h3>Team Up</h3>
              <p>Find teammates and collaborate with like-minded students.</p>
            </div>

            <div className="work-card">
              <div className="work-number">03</div>
              <h3>Build</h3>
              <p>Develop your solution with mentorship and resources.</p>
            </div>

            <div className="work-card">
              <div className="work-number">04</div>
              <h3>Ship</h3>
              <p>Launch your project and showcase it to the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="landing-hackathons">
        <div className="container">
          <div className="section-header">
            <div className="section-label">HACKATHONS</div>
            <h2>Upcoming Events</h2>
          </div>

          <div className="hackathon-grid">
            <div className="hackathon-card">
              <div className="hackathon-status">OPEN</div>
              <h3>ReBuild '26</h3>
              <p>Recreate the CampusCode platform and showcase your frontend skills.</p>
              <button className="hackathon-cta" onClick={handleRegister}>View Details →</button>
            </div>

            <div className="hackathon-card">
              <div className="hackathon-status">UPCOMING</div>
              <h3>AI Innovation Challenge</h3>
              <p>Build AI-powered solutions for real-world problems.</p>
              <button className="hackathon-cta" onClick={handleRegister}>Coming Soon</button>
            </div>

            <div className="hackathon-card">
              <div className="hackathon-status">UPCOMING</div>
              <h3>Degree Zero</h3>
              <p>Prove your skills beyond academics with practical challenges.</p>
              <button className="hackathon-cta" onClick={handleRegister}>Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="landing-community">
        <div className="container">
          <div className="community-content">
            <div className="community-label">COMMUNITY</div>
            <h2>Join the Innovation Revolution</h2>
            <p>
              Connect with thousands of students, mentors, and industry experts who are
              passionate about building the future together.
            </p>
            <button className="community-cta" onClick={handleRegister}>
              JOIN CAMPUSCODE<span>↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="landing-logo-mark">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span>
                  <strong>CAMPUSCODE</strong>
                  <small>HACKATHON ARENA</small>
                </span>
              </div>
              <p>The digital home for student innovation.</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Platform</h4>
                <a href="#">About</a>
                <a href="#">How It Works</a>
                <a href="#">Hackathons</a>
                <a href="#">Community</a>
              </div>

              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#">Student Guide</a>
                <a href="#">Documentation</a>
                <a href="#">Support</a>
                <a href="#">FAQ</a>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <a href="#">Contact</a>
                <a href="#">Partners</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 CampusCode. Chennai, India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
