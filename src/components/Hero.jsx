import './Hero.css';

const Hero = () => {
    const scrollToRegistration = () => {
        const element = document.getElementById('registration');
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title animate-fadeInUp">
                        LINK CAMP <span>2025</span>
                    </h1>

                    <p className="hero-subtitle animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                        Empowering the Next Generation of Innovators
                    </p>

                    <div className="hero-details animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        <div className="detail-item">
                            <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <div>
                                <span className="detail-label">Date</span>
                                <span className="detail-value">February 15-16, 2025</span>
                            </div>
                        </div>

                        <div className="detail-item">
                            <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <div>
                                <span className="detail-label">Venue</span>
                                <span className="detail-value">College Campus Auditorium</span>
                            </div>
                        </div>

                        <div className="detail-item">
                            <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <div>
                                <span className="detail-label">Registration</span>
                                <span className="detail-value">Open Now</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-cta animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                        <button onClick={scrollToRegistration} className="btn btn-primary btn-large">
                            Register Now
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                        <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="btn btn-secondary btn-large">
                            Learn More
                        </button>
                    </div>

                    <div className="hero-stats animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                        <div className="stat-item">
                            <span className="stat-number">2</span>
                            <span className="stat-label">Days</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Sessions</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Speakers</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
};

export default Hero;
