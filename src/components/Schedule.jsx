import { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
    const [activeDay, setActiveDay] = useState('day1');

    const scheduleData = {
        day1: [
            {
                time: '09:00 AM - 09:30 AM',
                title: 'Registration & Welcome',
                description: 'Check-in, collect materials, and network with fellow participants',
                type: 'general'
            },
            {
                time: '09:30 AM - 10:00 AM',
                title: 'Opening Ceremony',
                description: 'Welcome address by IEEE LINK team and keynote introduction',
                type: 'keynote'
            },
            {
                time: '10:00 AM - 11:30 AM',
                title: 'Keynote: Future of Technology',
                description: 'Industry expert shares insights on emerging tech trends and career opportunities',
                speaker: 'Dr. Sarah Johnson, Tech Lead at Google',
                type: 'keynote'
            },
            {
                time: '11:30 AM - 11:45 AM',
                title: 'Coffee Break',
                description: 'Networking opportunity with refreshments',
                type: 'break'
            },
            {
                time: '11:45 AM - 01:15 PM',
                title: 'Workshop Track A: Web Development',
                description: 'Build modern web applications using React and Next.js',
                type: 'workshop'
            },
            {
                time: '01:15 PM - 02:15 PM',
                title: 'Lunch Break',
                description: 'Networking lunch with participants and speakers',
                type: 'break'
            },
            {
                time: '02:15 PM - 03:45 PM',
                title: 'Workshop Track B: AI & Machine Learning',
                description: 'Introduction to ML algorithms and practical applications',
                type: 'workshop'
            },
            {
                time: '03:45 PM - 04:00 PM',
                title: 'Tea Break',
                description: 'Short refreshment break',
                type: 'break'
            },
            {
                time: '04:00 PM - 05:30 PM',
                title: 'Panel Discussion: Career in Tech',
                description: 'Industry professionals discuss career paths and opportunities',
                type: 'panel'
            }
        ],
        day2: [
            {
                time: '09:00 AM - 09:30 AM',
                title: 'Day 2 Registration',
                description: 'Check-in for day 2 participants',
                type: 'general'
            },
            {
                time: '09:30 AM - 11:00 AM',
                title: 'Workshop Track C: IoT & Embedded Systems',
                description: 'Hands-on session with Arduino and sensor integration',
                type: 'workshop'
            },
            {
                time: '11:00 AM - 11:15 AM',
                title: 'Coffee Break',
                description: 'Networking opportunity with refreshments',
                type: 'break'
            },
            {
                time: '11:15 AM - 12:45 PM',
                title: 'Workshop Track D: Cloud Computing',
                description: 'Deploy applications on AWS and Azure platforms',
                type: 'workshop'
            },
            {
                time: '12:45 PM - 01:45 PM',
                title: 'Lunch Break',
                description: 'Networking lunch',
                type: 'break'
            },
            {
                time: '01:45 PM - 03:15 PM',
                title: 'Hackathon Challenge',
                description: 'Team-based problem-solving competition with prizes',
                type: 'special'
            },
            {
                time: '03:15 PM - 03:30 PM',
                title: 'Tea Break',
                description: 'Final refreshment break',
                type: 'break'
            },
            {
                time: '03:30 PM - 04:30 PM',
                title: 'Closing Ceremony & Awards',
                description: 'Certificate distribution, hackathon winners announcement, and closing remarks',
                type: 'keynote'
            }
        ]
    };

    const getTypeColor = (type) => {
        const colors = {
            keynote: 'keynote',
            workshop: 'workshop',
            panel: 'panel',
            special: 'special',
            break: 'break',
            general: 'general'
        };
        return colors[type] || 'general';
    };

    return (
        <section id="schedule" className="schedule section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Event Schedule</h2>
                    <p className="section-subtitle">
                        Two days packed with workshops, keynotes, and networking opportunities
                    </p>
                </div>

                <div className="schedule-tabs">
                    <button
                        className={`tab-button ${activeDay === 'day1' ? 'active' : ''}`}
                        onClick={() => setActiveDay('day1')}
                    >
                        <span className="tab-day">Day 1</span>
                        <span className="tab-date">February 15, 2025</span>
                    </button>
                    <button
                        className={`tab-button ${activeDay === 'day2' ? 'active' : ''}`}
                        onClick={() => setActiveDay('day2')}
                    >
                        <span className="tab-day">Day 2</span>
                        <span className="tab-date">February 16, 2025</span>
                    </button>
                </div>

                <div className="schedule-timeline">
                    {scheduleData[activeDay].map((item, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${getTypeColor(item.type)}`}
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-time">{item.time}</div>
                                <h4 className="timeline-title">{item.title}</h4>
                                <p className="timeline-description">{item.description}</p>
                                {item.speaker && (
                                    <div className="timeline-speaker">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        {item.speaker}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="schedule-note">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <p>Schedule is subject to change. Participants will be notified of any updates via email.</p>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
