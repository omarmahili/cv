import React from "react";
import Subhead from "./Subhead";
import Tag from "./Tag";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FunctionComponent<SkillsProps> = ({ skills }) => (
  <div className="flex flex-col mt-8">
    <Subhead>Skills</Subhead>
    <div className="flex flex-wrap -ml-1 mt-2">
      {skills.map((x) => (
        <Tag>{x}</Tag>
      ))}
    </div>
  </div>
);

export default Skills;
