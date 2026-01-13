import './About.css';

const About = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                </svg>
            ),
            title: 'Hands-on Workshops',
            description: 'Engage in practical sessions covering cutting-edge technologies and industry best practices.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            title: 'Expert Speakers',
            description: 'Learn from industry leaders and experienced professionals sharing their insights and knowledge.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            ),
            title: 'Networking',
            description: 'Connect with like-minded peers, mentors, and potential collaborators from diverse backgrounds.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            ),
            title: 'Certificates',
            description: 'Receive official IEEE certificates of participation to showcase your commitment to learning.'
        }
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About LINK CAMP 2025</h2>
                    <p className="section-subtitle">
                        A transformative learning experience designed to inspire and empower the next generation of innovators
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-main">
                        <div className="about-text">
                            <h3>What is LINK CAMP?</h3>
                            <p>
                                LINK CAMP is IEEE LINK's flagship annual event that brings together students, professionals,
                                and technology enthusiasts for an immersive two-day experience. Our camp is designed to bridge
                                the gap between academic learning and industry requirements through interactive workshops,
                                technical sessions, and networking opportunities.
                            </p>
                            <p>
                                Whether you're interested in emerging technologies, career development, or building meaningful
                                connections in the tech community, LINK CAMP 2025 offers something valuable for everyone.
                            </p>
                        </div>

                        <div className="about-ieee">
                            <div className="ieee-logo-section">
                                <div className="ieee-logo">IEEE LINK</div>
                                <p>
                                    <strong>IEEE LINK</strong> (Learning, Innovation, Networking, and Knowledge) is a student
                                    branch initiative dedicated to fostering technical excellence and professional development
                                    among IEEE student members.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="feature-icon">{feature.icon}</div>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="about-stats">
                        <div className="stat-card">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Past Participants</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">95%</div>
                            <div className="stat-label">Satisfaction Rate</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">20+</div>
                            <div className="stat-label">Industry Partners</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
