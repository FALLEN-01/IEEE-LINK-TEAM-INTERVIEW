import './Registration.css';

const Registration = () => {
    return (
        <section id="registration" className="registration section">
            <div className="container">
                <div className="registration-content">
                    <div className="registration-info">
                        <h2 className="section-title">Join LINK CAMP 2025</h2>
                        <p className="registration-intro">
                            Don't miss this opportunity to be part of an incredible learning experience.
                            Register now to secure your spot at LINK CAMP 2025!
                        </p>

                        <div className="info-cards">
                            <div className="info-card">
                                <div className="info-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <h4>Registration Deadline</h4>
                                <p>February 10, 2025</p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="12" y1="1" x2="12" y2="23"></line>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </div>
                                <h4>Registration Fee</h4>
                                <p>₹500 for IEEE Members<br />₹700 for Non-Members</p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="8.5" cy="7" r="4"></circle>
                                        <polyline points="17 11 19 13 23 9"></polyline>
                                    </svg>
                                </div>
                                <h4>Eligibility</h4>
                                <p>Open to all college students and IEEE members</p>
                            </div>
                        </div>

                        <div className="benefits-section">
                            <h3>What You'll Get</h3>
                            <ul className="benefits-list">
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Access to all workshops and sessions
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Official IEEE certificate of participation
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Networking opportunities with industry experts
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Lunch and refreshments for both days
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Event kit with exclusive merchandise
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    Chance to win exciting prizes in hackathon
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="registration-form-section">
                        <div className="form-card">
                            <div className="form-header">
                                <h3>Register Now</h3>
                                <p>Fill in your details to complete registration</p>
                            </div>

                            <form className="registration-form" onSubmit={(e) => {
                                e.preventDefault();
                                alert('Registration form submission would be handled here. Please integrate with your backend or use a form service like Google Forms, Typeform, or a custom API.');
                            }}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="college">College/University *</label>
                                    <input
                                        type="text"
                                        id="college"
                                        name="college"
                                        required
                                        placeholder="Enter your institution name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="year">Year of Study *</label>
                                    <select id="year" name="year" required>
                                        <option value="">Select year</option>
                                        <option value="1">First Year</option>
                                        <option value="2">Second Year</option>
                                        <option value="3">Third Year</option>
                                        <option value="4">Fourth Year</option>
                                        <option value="pg">Postgraduate</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="ieee-member">IEEE Membership Status *</label>
                                    <select id="ieee-member" name="ieee-member" required>
                                        <option value="">Select status</option>
                                        <option value="yes">IEEE Member</option>
                                        <option value="no">Non-Member</option>
                                    </select>
                                </div>

                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" required />
                                        <span>I agree to the terms and conditions *</span>
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-large submit-btn">
                                    Complete Registration
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </form>

                            <div className="form-note">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg>
                                <p>You will receive a confirmation email with payment details after registration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
