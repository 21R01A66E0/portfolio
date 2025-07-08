import React from "react";
import profilePic from "../assets/profile.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate=useNavigate();
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh" }}>
      <style>{`
        .aboutWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          padding: 40px 20px;
          color: #f0f0f0;
          max-width: 1200px;
          margin: auto;
          font-family: 'Segoe UI', sans-serif;
        }

        .aboutTop {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 40px;
          text-align: left;
        }

        .aboutTop img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #00bcd4;
        }

        .aboutText {
          max-width: 600px;
          line-height: 1.8;
          font-size: 1rem;
        }

        .aboutText h4 {
          margin-bottom: 10px;
          color: #00bcd4;
        }

        .hobbiesContainer {
          text-align: center;
        }

        .hobbiesContainer h2 {
          color: #00bcd4;
          margin-bottom: 15px;
        }

        .hobbiesContainer ul {
          list-style: none;
          padding: 0;
          font-size: 1rem;
        }

        .hobbiesContainer li,
        .hobbiesContainer p {
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          .aboutTop {
            flex-direction: column;
            text-align: center;
            margin-left:100px;
          }

          .aboutText {
            text-align: center;
          }
        }
        .buttonStyle{
            font-size:16px;
            width:150px;
            height:40px;
            cursor:pointer;
            background-color:yellow;
            border-radius:10px;
        }
        button:hover{
            color:green;
            background-color:white;
            transition:linear 0.2s ease;
        }
      `}</style>

      <div className="aboutWrapper">
        <div className="aboutTop">
          <img src={profilePic} alt="Prashanth" />
          <div className="aboutText">
            <h4>About Me</h4>
            <p>
              👋 Hi, I'm Prashanth — a Computer Science & ML enthusiast passionate
              about crafting user-focused web applications using modern technologies.
              With a strong foundation in C, C++, Java, JavaScript, and Python,
              I’ve independently developed multiple web applications — from a real-time chat app to useful tools like an obesity checker and anti-ragging portal.
              My stack includes HTML5, CSS Flexbox, ReactJS, NodeJs, and SQL. I continually sharpen my skills through hands-on projects and certifications.
              I believe in lifelong learning, thoughtful design, and enjoy challenges that push my coding and problem-solving skills.
            </p>
          </div>
        </div>

        <div className="hobbiesContainer">
          <h2>My Hobbies</h2>
          <ul>
            <li>🏏 Playing cricket</li>
            <li>🎬 Watching cricket and movies</li>
            <li>🖋️ Writing quotations</li>
            <li>🌌 Fascinated by night journies</li>
          </ul>
        </div>
        <button onClick={()=>navigate("/contact")} className="buttonStyle">Contact Me</button>
      </div>
    </div>
  );
};

export default About;
