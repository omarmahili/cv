import React from "react";
import Title from "./Title";
import ExperienceModel from "../models/experience";
import ExperienceDetails from "./ExperienceDetails";

interface ExperiencesSectionProps {
  title: string;
  experiences: ExperienceModel[];
}

const ExperiencesSection: React.FunctionComponent<ExperiencesSectionProps> = ({
  title,
  experiences,
}) => (
  <div>
    <Title>{title}</Title>
    <ul className="my-1">
      {experiences.map((x) => (
        <ExperienceDetails experience={x} />
      ))}
    </ul>
  </div>
);

export default ExperiencesSection;
