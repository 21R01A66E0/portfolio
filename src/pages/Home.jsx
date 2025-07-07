import React from "react";
import WordbyWordText from "../components/WordbyWordText";
import Footer from "../components/Footer";
import profilePic from "../assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import SkillCard from "../components/SkillCard";
import reactImage from "../assets/front-end-images/reactjsimage.jpeg";
import javaScriptImage from "../assets/front-end-images/javaScript.jpeg";
import htmlImage from "../assets/front-end-images/htmlimage.jpeg";
const Home = () => {
    const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh",paddingTop:"50px" }}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .skillSection{
          display:flex;
          justify-content:center;
          flex-direction:column;
          align-items:center;
          text-align:center;
          flex-wrap:wrap;
          margin: 0 auto;
          padding:20px 10px
        }
          .skillSection h1 {
            color:white;
            font-size:1.8rem;
            font-weight:bolder;
            margin-bottom:5px;
          }
          .skillSection h3 {
            color:white;
            font-size:1.4rem;
            font-weight:bolder;
            margin-bottom:5px;
          }
        .bgContainer {
          background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/asserts/bg-heroic-img.jpg');
          background-size: cover;
          background-position: center;
          width: 100%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 20px;
        }

        .aboutSection {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
          padding: 60px 20px;
          max-width: 1000px;
          margin: auto;
          margin-bottom:10px;
        }

        .aboutSection img {
          height: 200px;
          width: 200px;
          border-radius: 50%;
        }

        .aboutText {
          max-width: 500px;
          color: white;
        }

        .aboutText h2 {
          color:white;
          font-size: 1.4rem;
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .bgContainer {
            flex-direction: column;
            padding-top: 100px;
          }

          .aboutSection {
            flex-direction: column;
            text-align: center;
          }

          .aboutText h2 {
            font-size: 1.4rem;
          }
        }
      `}</style>
      <section className="bgContainer">
        <WordbyWordText />
      </section>
      <section id="about" className="aboutSection">
        <img src={profilePic} alt="Prashanth" />
        <div className="aboutText">
          <h2>About Me</h2>
          <h4>
            👋 Hi, I'm Prashanth — a Computer Science & ML enthusiast passionate
            about crafting user-focused web applications using modern
            technologies like React, NodeJS, and Python.
          </h4>
          <button
            onClick={() => navigate("/about")} 
            style={{
              marginTop: "10px",
              background: "none",
              border: "none",
              color: "#007BFF",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Read More →
          </button>
        </div>
      </section>
      <section id="skills" className="skillSection">
        <h1>Skills</h1>
        <h3>Front-end</h3>
        <div className="cardGrid">
          <SkillCard key={"html"} skillName={"HTML"} skillPic={htmlImage} skillValue={95} />
          <SkillCard key={"JavaScript"} skillName={"JavaScript"} skillPic={javaScriptImage} skillValue={90}/>
          <SkillCard key={"ReactJs"} skillName={"ReactJs"} skillPic={reactImage} skillValue={90}/>
        </div>
        <button onClick={()=>navigate("/skills")} 
        style={{
          background:"none",
          border: "none",
          color: "#007BFF",
          cursor: "pointer",
          fontSize: "30px",
          fontWeight:"bolder",
          marginBottom:"80px"
        }}>
          See more skills →
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
