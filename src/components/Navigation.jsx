import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'schedule', 'registration'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'registration', label: 'Register' }
  ];

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-logos-spread">
          <div className="nav-logo nav-logo-left" onClick={() => scrollToSection('home')}>
            <img src="/assets/ieee-link-logo.png" alt="IEEE LINK" className="nav-logo-img" />
          </div>
          <div className="nav-logo nav-logo-center">
            <img src="/assets/ieee-kerala-section-logo.png" alt="IEEE Kerala Section" className="nav-logo-img" />
          </div>
          <div className="nav-logo nav-logo-right">
            <img src="/assets/ieee-logo.png" alt="IEEE" className="nav-logo-img ieee-logo-small" />
          </div>
        </div>

        <div className="nav-content">
          {/* Desktop Navigation */}
          <ul className="nav-menu desktop-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
