import React from "react";
import Title from "./Title";
import { ExperienceDetailsData } from "../models/cv";
import ExperienceDetails from "./ExperienceDetails";

interface ExperiencesSectionProps {
  title: string;
  list: ExperienceDetailsData[];
}

const ExperiencesSection: React.FunctionComponent<ExperiencesSectionProps> = ({
  title,
  list,
}) => (
  <div>
    <Title>{title}</Title>
    <ul className="my-1">
      {list.map((x, i) => (
        <ExperienceDetails key={i} details={x} />
      ))}
    </ul>
  </div>
);

export default ExperiencesSection;
