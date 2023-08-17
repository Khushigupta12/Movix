import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footermain">
        <div className="left">
          <h1 className="footer_logo">MOVIX</h1>
          <button>JOIN THE COMMUNITY</button>
        </div>
        <div className="right">
          <div className="list">
            <h1 className="heading">THE BASICS</h1>
            <a>About</a>
            <a>TMDB</a>
            <a>Contact Us </a>
            <a>Support Forums</a>
            <a>API</a>
            <a>System Status</a>
          </div>
          <div className="list">
            <h1 className="heading">GET INVOLVED</h1>
            <a>Contribution Bible </a>
            <a>Add New Movie</a>
            <a>Add New TV Show</a>
          </div>
          <div className="list">
            <h1 className="heading">COMMUNITY</h1>
            <a>Guidelines</a>
            <a>Discussions</a>
            <a>Leaderboard</a>
            <a>Twitter</a>
          </div>
          <div className="list">
            <h1 className="heading">LEGAL</h1>
            <a>Terms of Use</a>
            <a>API Terms of Use</a>
            <a>Provacy Policy</a>
            <a>DMCA Takedown Request</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer