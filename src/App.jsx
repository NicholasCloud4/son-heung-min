import React from 'react';
import './App.css';

// Data: Trophies & Milestones
const trophies = [
    {
        id: 0,
        title: "Europa League Winner",
        year: "2024-2025",
        team: "Tottenham Hotspur",
        desc: "A historic European triumph in his final season with Spurs."
    },
    {
        id: 1,
        title: "Premier League Golden Boot",
        year: "2021-2022",
        team: "Tottenham Hotspur",
        desc: "23 Goals. First Asian player to win the PL Golden Boot."
    },
    {
        id: 2,
        title: "FIFA Puskás Award",
        year: "2020",
        team: "Tottenham Hotspur",
        desc: "The wonder goal vs Burnley, dribbling the entire pitch."
    },
    {
        id: 3,
        title: "Asian Games Gold Medal",
        year: "2018",
        team: "South Korea U23",
        desc: "Captain's performance leading his country to gold."
    },
    {
        id: 4,
        title: "Champions League Runner-up",
        year: "2018-2019",
        team: "Tottenham Hotspur",
        desc: "Instrumental in Tottenham's run to the Madrid final."
    },
    {
        id: 5,
        title: "Asian Footballer of the Year",
        year: "Multiple",
        team: "Individual",
        desc: "Record-breaking 9-time winner of the Best Footballer in Asia award."
    }
];

// Data: Transfer History
const transferHistory = [
    {
        date: "05 Aug 2025",
        from: "Tottenham Hotspur",
        to: "Los Angeles FC",
        fee: "€ 22.0M",
        type: "Transfer"
    },
    {
        date: "27 Aug 2015",
        from: "Bayer 04 Leverkusen",
        to: "Tottenham Hotspur",
        fee: "€ 30.0M",
        type: "Transfer"
    },
    {
        date: "30 Jun 2013",
        from: "Hamburger SV",
        to: "Bayer 04 Leverkusen",
        fee: "€ 12.5M",
        type: "Transfer"
    },
    {
        date: "30 Jun 2010",
        from: "Hamburger SV Youth",
        to: "Hamburger SV",
        fee: "-",
        type: "Signed"
    },
    {
        date: "31 Mar 2010",
        from: "Hamburger SV U19",
        to: "Hamburger SV Youth",
        fee: "-",
        type: "Signed"
    },
    {
        date: "30 Jun 2009",
        from: "Hamburger SV U17",
        to: "Hamburger SV U19",
        fee: "-",
        type: "Signed"
    },
    {
        date: "31 Jul 2008",
        from: "Free Player",
        to: "Hamburger SV U17",
        fee: "-",
        type: "Signed"
    }
];

function App() {
    return (
        <div className="App">
            {/* Navigation */}
            <nav className="navbar">
                <div className="logo">HM<span>7</span> SON</div>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#trophies">Honors</a>
                    <a href="#transfers">Career Path</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-badge">Current Club: Los Angeles FC</div>
                <h1>SON<br />HEUNG-MIN</h1>
                <p>
                    The pride of South Korea. A Premier League icon.
                    Now conquering the MLS. Known for world-class finishing,
                    explosive speed, and unrivaled leadership.
                </p>
            </section>

            {/* Trophy Cabinet */}
            <section id="trophies" className="section">
                <h2 className="section-title">Trophy Cabinet</h2>
                <div className="trophy-grid">
                    {trophies.map((t) => (
                        <div key={t.id} className="trophy-card">
                            <span className="trophy-year">{t.year}</span>
                            <h3>{t.title}</h3>
                            <p style={{ color: '#94a3b8', marginBottom: '10px', fontSize: '0.9rem' }}>{t.team}</p>
                            <p style={{ lineHeight: '1.5' }}>{t.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Transfer History Section */}
            <section id="transfers" className="section alt-bg">
                <h2 className="section-title">Transfer History</h2>
                <div className="table-wrapper">
                    <table className="transfer-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Movement</th>
                                <th>Fee</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transferHistory.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ width: '20%' }}>
                                        <div style={{ fontWeight: 'bold', color: '#fff' }}>{item.date.split(' ').slice(1).join(' ')}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.date.split(' ')[0]}</div>
                                    </td>
                                    <td style={{ width: '40%' }}>
                                        <div style={{ marginBottom: '4px' }}>
                                            <span style={{ color: '#64748b', fontSize: '0.85rem' }}>From: </span>
                                            <span className="club-name">{item.from}</span>
                                        </div>
                                        <div>
                                            <span style={{ color: '#c39e6d', fontSize: '0.85rem' }}>To: </span>
                                            <span className="club-name">{item.to}</span>
                                        </div>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <span className="transfer-fee">{item.fee}</span>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <span style={{
                                            background: 'rgba(255,255,255,0.1)',
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            fontSize: '0.8rem'
                                        }}>
                                            {item.type}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <p>© {new Date().getFullYear()} HM7 Fan Profile. Data provided by AiScore.</p>
            </footer>
        </div>
    );
}

export default App;