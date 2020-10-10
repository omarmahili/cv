import React from "react";
import Headline from "./Headline";
import Tag from "./Tag";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FunctionComponent<SkillsProps> = ({ skills }) => (
  <div className="flex flex-col mt-8">
    <Headline>Skills</Headline>
    <div className="flex flex-wrap -ml-1 mt-2">
      {skills.map((x) => (
        <Tag>{x}</Tag>
      ))}
    </div>
  </div>
);

export default Skills;
