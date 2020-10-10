import React from "react";
import Title from "./Title";
import ExperienceModel from "../models/experience";
import Experience from "./Experience";

interface SectionProps {
  title: string;
  experiences: ExperienceModel[];
}

const Section: React.FunctionComponent<SectionProps> = ({
  title,
  experiences,
}) => (
  <div>
    <Title>{title}</Title>
    <ul className="my-1">
      {experiences.map((x) => (
        <Experience experience={x} />
      ))}
    </ul>
  </div>
);

export default Section;
