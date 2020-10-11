import React from "react";
import Subhead from "./Subhead";
import Tag from "./Tag";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FunctionComponent<SkillsProps> = ({ skills }) => (
  <div className="flex flex-col mt-8">
    <Subhead>Skills</Subhead>
    <div className="flex flex-wrap -ml-1">
      {skills.map((x, i) => (
        <Tag key={i}>{x}</Tag>
      ))}
    </div>
  </div>
);

export default Skills;
