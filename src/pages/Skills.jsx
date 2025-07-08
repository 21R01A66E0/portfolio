import React from "react";
import SkillCard from "../components/SkillCard";
import skills from "../data/skills";

// Group skills by techType
const groupByTechType = () => {
  const grouped = {};
  skills.forEach((skill) => {
    if (!grouped[skill.techType]) grouped[skill.techType] = [];
    grouped[skill.techType].push(skill);
  });
  return grouped;
};

const Skills = () => {
  const groupedSkills = groupByTechType();

  return (
    <div className="skillsStyling">
      <style>{`
        .skillsStyling {
          padding:60px 20px;
        }
        @media (max-width:768px) {
          .skillsStyling h1 {
            font-size:18px;
            margin-left:20px;
          }
        }
      `}</style>
      {Object.entries(groupedSkills).map(([techType, skillGroup], groupIndex) => (
        <div key={groupIndex} style={{ marginBottom: "30px" }}>
          <h1 style={{ paddingTop:"30px", color: "white", textAlign: "center", marginBottom: "15px" }}>{techType}</h1>
          <div className="cardGrid">
            {skillGroup.map((item, index) => (
              <SkillCard
                key={index}
                skillName={item.language}
                skillPic={item.skillImage}
                skillValue={item.skillRange}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
