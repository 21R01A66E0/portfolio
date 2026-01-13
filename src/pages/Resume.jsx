import React from "react";
import profilePic from "../assets/prasa.jpeg";
import { MdLocationPin,MdEmail } from "react-icons/md";
import { FaMobile} from "react-icons/fa";
import skills from "../data/skills";
import ResumeSkillBar from "../components/ResumeSkillBar";
import "./Resume.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const downloadResume = () => {
  const resumeElement = document.querySelector(".resumeMainContainer"); // only the actual resume

  html2canvas(resumeElement, {
    scale: 2,
    useCORS: true,
    backgroundColor: null, // No white background
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Create PDF with same pixel dimensions as canvas
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvasWidth, canvasHeight],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvasWidth, canvasHeight);
    pdf.save("Prashanth_Burra_Resume.pdf");
  });
};


const Resume = () =>{
  const skillType="Development tools";
  return (
    <>
      <div className="downloadButtonStyling">
        <button onClick={downloadResume}>Download Resume</button>
      </div>
      <div id="resume" style={{ display:"flex",height:"auto", alignItems:"center", justifyContent:"center",paddingTop:"40px",paddingBottom:"35px"}}>
        <div className="resumeMainContainer">
          <div className="resumeProfileSection">
            <div className="resumeProfileSectionImage">
              <img src={profilePic} alt="profile"/>
            </div>
            <h4>CONTACT</h4>
            <div className="contactItem">
              <MdEmail size={15}/> <span>prashanthreddyburra@gmail.com</span>
            </div>
            <div className="contactItem">
              <FaMobile size={15}/> <span>+91 9392400659</span>
            </div>
            <div className="contactItem">
              <MdLocationPin size={15}/> <span>Hyderabad, Telangana, India</span>
            </div>
            <h4>SKILLS</h4>
          < div className="skillItem">
              {
                skills.filter(item=>skillType!==item.techType).map((item)=>{
                  return <ResumeSkillBar key={item.language} skill={item.language} value={item.skillRange}/>
                })
              }
            </div>
            <h4>HOBBIES</h4>
            <div className="hobbies">
              <span>→ Playing cricket</span>
              <span>→ Watching cricket and movies</span>
              <span>→ Writing quotations</span>
              <span>→ Fascinated by night journies</span>
            </div>
            <h4>ACHIEVEMENTS</h4>
            <div className="achievements">
              <span>→ Golden badge in C++ on Hackerrank platform.</span>
            </div>
            <div className="certifications">
              <span>→ Python udemy certificate.</span>
              <span>→ Java (basic) certified by hackerrank.</span>
              <span>→ Python (basic) certified by hackerrank.</span>
            </div>
          </div>
          <div className="resumeDataSection">
            <div className="resumeNameSection">
              <h2>PRASHANTH BURRA</h2>
              <h4>Front End Developer</h4>
            </div>
            <h3>SUMMARY</h3>
            <span> Secure a responsible career opportunity to fully utilize my training and skills , While making a significant contribution to the success of
              the company.
            </span>
            <h3>EDUCATION</h3>
            <div>
              <section id="btech" className="resumeEducationStyling">
                <div className="sectionWiseEducationStyling">
                  <h4>CMR Institue of Technology</h4>
                  <span>Nov 2021 - Apr 2025</span>
                </div>
                <h5>B.Tech. - CSE-(AI & ML)</h5>
                <p>CGPA: 8.61</p>
              </section>
              <section id="intermidiate" className="resumeEducationStyling">
                <div className="sectionWiseEducationStyling">
                  <h4>SR Junior College</h4>
                  <span>Jun 2019 - Mar 2021</span>
                </div>
                <h5>Intermidiate. - MPC</h5>
                <p>Percentage: 97.8</p>
              </section>
              <section id="schooling" className="resumeEducationStyling">
                <div className="sectionWiseEducationStyling">
                  <h4>Orugallu Residential School</h4>
                  <span>Jun 2018 - Apr 2019</span>
                </div>
                <h5>SSC</h5>
                <p>Percentage: 92.15</p>
              </section>
            </div>
            <h3>PROJECTS</h3>
            <div>
              <div className="resumeProjectCard">
                <div className="projectHeadSection">
                  <h4>Real-Time Anonymous Chat Application</h4>
                  <span>Apr 2025</span>
                </div>
                <h5>Tech Stack: HTML CSS JavaScript NodeJs WebRTC Socket.io</h5>
                <h6 style={{fontSize:"12px",fontWeight:"normal"}}><span style={{fontWeight:"bold"}}>Discription: </span>A real-time chat application where users are randomly paired in 1-on-1 chat or video sessions. It supports infinite connections in parallel (up to 2 users per room) without storing any personal or chat data. Built with WebRTC, Socket.IO, and Node.js to ensure fast, anonymous communication.</h6>
                <a href="https://random-chatorvideochat-webapplication.onrender.com" target="_blank" rel="noopener noreferrer">Project Link →</a>
              </div>
              <div className="resumeProjectCard">
                <div className="projectHeadSection">
                  <h4>Obesity-Check-Application</h4>
                  <span>Dec 2024</span>
                </div>
                <h5>Tech Stack: HTML CSS JavaScript</h5>
                <h6 style={{fontSize:"12px",fontWeight:"normal"}}><span style={{fontWeight:"bold"}}>Discription: </span>A responsive web application where users can register or log in, input their weight (kg) and height (m) to calculate BMI and assess obesity levels. Based on the result, it provides personalized health tips, motivational videos, and guidance for overcoming obesity. User information is stored locally using LocalStorage to maintain session continuity without the need for a backend.</h6>
                <a href="https://obesitywebsite.netlify.app/" target="_blank" rel="noopener noreferrer">Project Link →</a>
              </div>
              <div className="resumeProjectCard">
                <div className="projectHeadSection">
                  <h4>Tic-tac-toe game</h4>
                  <span>Nov 2024</span>
                </div>
                <h5>Tech Stack: HTML CSS JavaScript</h5>
                <h6 style={{fontSize:"12px",fontWeight:"normal"}}><span style={{fontWeight:"bold"}}>Discription: </span>An interactive Tic Tac Toe web game that allows players to choose between classic 3x3 and advanced 6x6 grid modes via a slider. Players can seamlessly switch and play their preferred version with intuitive UI. The game is designed with responsive design principles and includes winning logic for both grid types.</h6>
                <a href="https://21r01a66e0-tic-tac-toe-game.netlify.app/" target="_blank" rel="noopener noreferrer">Project Link →</a>
              </div>
            </div>
            <!-- <h6 style={{marginBottom:"8px"}}>I here by declare that the above mentioned information is correct up to my knowledge and i bear the responsibility of the mentioned particulars.</h6>
            <h5 style={{fontSize:"15px" ,marginBottom:"15px"}}>PRASHNATH BURRA.</h5> -->
          </div>
        </div>
    </div>
    </>
  );
}
export default Resume;
