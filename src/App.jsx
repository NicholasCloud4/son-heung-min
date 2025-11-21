import './App.css'

import React from 'react';
import './App.css';

// Data for the stats section
const achievements = [
    {
        id: 1,
        title: "Premier League Golden Boot",
        year: "2021-2022",
        desc: "First Asian player to win the award, scoring 23 goals without a single penalty."
    },
    {
        id: 2,
        title: "FIFA Puskás Award",
        year: "2020",
        desc: "Awarded for his incredible solo goal against Burnley, running from box to box."
    },
    {
        id: 3,
        title: "Asian Footballer of the Year",
        year: "Multiple",
        desc: "Dominating the continent with record-breaking wins (7+ times)."
    },
    {
        id: 4,
        title: "Tottenham Hotspur Captain",
        year: "2023 - Present",
        desc: "Appointed club captain, leading the team in the Premier League."
    }
];

function App() {
    return (
        <div className="App">
            {/* Navigation */}
            <nav className="navbar">
                <div className="logo">HM<span>7</span> SON</div>
                <div className="nav-links">
                    <a href="#bio">Biography</a>
                    <a href="#stats">Stats</a>
                    <a href="#gallery">Gallery</a>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero">
                <h2>The Pride of Asia</h2>
                <h1>Son<br />Heung-Min</h1>
                <p style={{ marginTop: '20px', maxWidth: '500px', color: '#cbd5e1' }}>
                    World-class winger, South Korean Captain, and Premier League icon.
                    Known for his explosive speed, two-footed finishing, and infectious smile.
                </p>
                <div style={{ marginTop: '30px' }}>
                    <button className="hero-btn">View Highlights</button>
                </div>
            </header>

            {/* Biography Section */}
            <section id="bio" className="bio-section">
                <div className="bio-image">
                    <img
                        src="https://platform.cartilagefreecaptain.sbnation.com/wp-content/uploads/sites/60/chorus/uploads/chorus_asset/file/24170787/1427955163.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=1080"
                        alt="Son Heung-Min Portrait"
                    />
                </div>
                <div className="bio-content">
                    <h3>From Chuncheon to London</h3>
                    <p>
                        Born on July 8, 1992, in Chuncheon, Gangwon Province, Son Heung-min
                        moved to Germany as a teenager to join Hamburger SV's youth academy.
                        After making a name for himself in the Bundesliga with Hamburg and Bayer Leverkusen,
                        he signed with Tottenham Hotspur in 2015 for £22 million, becoming the
                        most expensive Asian player in history.
                    </p>
                    <p>
                        "Sonny" has since evolved into one of the most lethal forwards in world football.
                        Beyond his club success, he is the talismanic captain of the South Korea national team,
                        having represented his country in multiple World Cups and leading them to Asian Games gold in 2018.
                    </p>
                    <p>
                        <strong>Position:</strong> Forward / Winger<br />
                        <strong>Number:</strong> 7<br />
                        <strong>Nationality:</strong> South Korea 🇰🇷
                    </p>
                </div>
            </section>

            {/* Stats/Achievements Section */}
            <section id="stats" className="achievements">
                <h2 className="section-title">Career Milestones</h2>
                <div className="grid">
                    <div className="card">
                        <span className="highlight-number">100+</span>
                        <h4>Premier League Goals</h4>
                        <p>A member of the prestigious PL 100 club, cementing his legacy in England.</p>
                    </div>

                    {achievements.map((item) => (
                        <div key={item.id} className="card">
                            <span className="highlight-number" style={{ fontSize: '1.5rem', color: '#fff' }}>
                                {item.year}
                            </span>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer>
                <p>© {new Date().getFullYear()} Son Heung-Min Fan Page. Made with React.</p>
                <p style={{ marginTop: '10px', opacity: 0.5 }}>
                    Images used for educational/demonstration purposes.
                </p>
            </footer>
        </div>
    );
}

export default App;