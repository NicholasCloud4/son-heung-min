import React from 'react';
import './App.css';

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
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">HM<span>7</span> SON</div>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#overview">Stats</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#trophies">History</a>
                </div>
            </nav>

            {/* Hero Section - Updated to Split Layout */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <div className="hero-badge">Current Club: Los Angeles FC</div>
                    <h1>SON<br />HEUNG-MIN</h1>
                    <p>
                        The pride of South Korea. A Premier League Legend.
                        World-class finisher, tireless worker, and global icon.
                    </p>
                </div>
                {/* New Image Container */}
                <div className="hero-image-container">
                    <img
                        src="https://ca-times.brightspotcdn.com/dims4/default/fdc5380/2147483647/strip/true/crop/4168x2778+0+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fac%2Fb6%2Fe4d3de5d479f9c4867cd1a1671d0%2F2235448117.jpg"
                        alt="Son Heung-Min"
                    />
                </div>
            </section>

            {/* AiScore Player Overview Section */}
            <section id="overview" className="section alt-bg">
                <h2 className="section-title">Live Player Overview</h2>
                <div className="aiscore-container">
                    {/* Direct Iframe Implementation */}
                    <iframe
                        src="https://www.aiscore.com/player-son-heung-min/g6763id2w3t97ry?isplugin=true"
                        height="500"
                        width="100%"
                        scrolling="auto"
                        frameBorder="0"
                        title="Son Heung-Min AiScore Stats"
                        style={{ display: 'block', border: 'none' }}
                    ></iframe>
                </div>
                <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#64748b', textAlign: 'center' }}>
                    Data provided by AiScore
                </p>
            </section>

            {/* Gallery & Highlights Section */}
            <section id="gallery" className="section">
                <h2 className="section-title">Gallery & Highlights</h2>
                <div className="media-grid">
                    {/* Photo 1: National Team */}
                    <div className="media-item">
                        <img
                            src="https://newsimg.koreatimes.co.kr/2024/07/06/def56e0d-b412-48b8-a0e7-a3865707a6d1.jpg?v=1720335480000&w=1200"
                            alt="Son Heung-Min South Korea"
                        />
                        <div className="media-caption">South Korea National Team</div>
                    </div>

                    {/* Video 1: Puskas Goal (YouTube Embed) */}
                    <div className="media-item">
                        <iframe
                            width="100%"
                            height="250"
                            src="https://www.youtube.com/embed/CXCmLUD1EDA"
                            title="Son Puskas Goal"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="media-caption">FIFA Puskás Award Winner 2020</div>
                    </div>

                    {/* Photo 2: Portrait */}
                    <div className="media-item">
                        <img
                            src="https://wfpusa.org/wp-content/uploads/2022/07/210628_WFP-3148n2.jpeg"
                            alt="Son Heung-Min Portrait"
                        />
                        <div className="media-caption">The Face of Asian Football</div>
                    </div>

                    {/* Video 2: Top Goals */}
                    <div className="media-item">
                        <iframe
                            width="100%"
                            height="250"
                            src="https://www.youtube.com/embed/bxAah1EemnI"
                            title="Son Heung-Min Top Goals"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="media-caption">Premier League Highlights</div>
                    </div>
                </div>
            </section>

            {/* Trophies Section */}
            <section id="trophies" className="section alt-bg">
                <h2 className="section-title">Trophy Cabinet</h2>
                <div className="trophy-grid">
                    {trophies.map((t) => (
                        <div key={t.id} className="trophy-card">
                            <span className="trophy-year">{t.year}</span>
                            <h3>{t.title}</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '5px' }}>{t.team}</p>
                            <p>{t.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Transfers Section */}
            <section className="section">
                <h2 className="section-title">Transfer History</h2>
                <div className="table-wrapper">
                    <table className="transfer-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>From / To</th>
                                <th>Fee</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transferHistory.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <div style={{ fontWeight: 'bold', color: '#fff' }}>{item.date.split(' ').slice(1).join(' ')}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.date.split(' ')[0]}</div>
                                    </td>
                                    <td>
                                        <div><span style={{ color: '#64748b' }}>From: </span> {item.from}</div>
                                        <div><span style={{ color: '#c39e6d' }}>To: </span> {item.to}</div>
                                    </td>
                                    <td><span className="transfer-fee">{item.fee}</span></td>
                                    <td><span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>{item.type}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <footer>
                <p>© {new Date().getFullYear()} Son Heung-Min Fan Page.</p>
            </footer>
        </div>
    );
}

export default App;