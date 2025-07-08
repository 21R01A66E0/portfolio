import React from "react";
import SkillBar from "./SkillBar";
const  SkillCard = ({skillPic,skillName,skillValue}) =>{
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
                        padding-top:30px;
                    }

                    .card {
                        background-color: #1e1e1e;
                        color: white;
                        border-radius: 12px;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                        transition: transform 0.2s ease;
                        min-width:300px;
                        height:auto;
                    }

                    .card:hover {
                        transform: scale(1.08);
                    }
                    @media (max-width: 768px) {
                        .cardGrid {
                            grid-template-columns: 1fr; 
                            margin-left:100px;
                        }
                    }
                `}
            </style>
            <div className="card">
                <img src={skillPic} alt={"skillimages"} style={{height:"350px",width:"100%", backgroundSize:"cover"}}/>
                <SkillBar skill={skillName} value={skillValue}/>
            </div>
        </div>
    );
}
export default SkillCard;