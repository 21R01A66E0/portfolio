import React from "react";
const  ProjectCard = ({projectImage,projectTitle,projectDiscription,techStack,projectLink}) =>{
    return (
        <div>
            <style>
                {`
                    *{
                        margin:0px;
                        border-sizing:border-box;
                    }
                    .cardGrid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 20px;
                        padding: 40px;
                        padding-top:100px;
                    }

                    .card {
                        background-color:#2c2c2c;
                        color: white;
                        border-radius: 12px;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                        transition: transform 0.2s ease;
                        min-width:200px;
                        height: 700px;
                    }
                    .card a{
                        display: block;
                        text-align: center;
                        margin-top: 15px;
                        color: #00bcd4;
                        text-decoration: none;
                    }
                    .card img {
                        height:400px;
                        width:100%;
                        margin-bottom:15px;
                    }
                    .card:hover {
                        transform: scale(1.05);
                    }
                    @media (max-width: 768px) {
                        .cardGrid {
                            grid-template-columns: 1fr; 
                            margin-left:100px;
                            margin-bottom:30px;
                            padding-right:8px;
                        }
                        .card img{
                            height:200px;
                        }
                        .card h2 {
                            margin-left:10px;
                        }
                        .card p {
                            margin-left:10px;
                        }
                        .card h3 {
                            margin-left:10px;
                        }
                        .card:hover {
                            transform:scale(1.03);
                        }
                    }
                `}
            </style>
            <div className="card">
                <img src={projectImage} alt={projectTitle}/>
                <h2 style={{marginBottom:"15px"}}><span style={{color:"cyan",fontWeight:"bold"}}>Title:  </span>{projectTitle}</h2>
                <p style={{marginBottom:"15px"}}><spam style={{color:"cyan",fontWeight:"bold"}}>Discription:  </spam> {projectDiscription}</p>
                <h3><spam style={{color:"cyan"}}>Tech Stack used:  </spam>  {techStack}</h3>
                <a href={projectLink} target="_blank" rel="noopener noreferrer">Project link</a>
            </div>
        </div>
    );
}
export default ProjectCard;