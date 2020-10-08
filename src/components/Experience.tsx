import React from "react";
import moment from "moment";
import ExperienceModel from "../models/experience";

interface ExperienceProps {
  experience: ExperienceModel;
}

const Experience: React.FunctionComponent<ExperienceProps> = ({
  experience,
}) => (
  <div>
    <p>{experience.title}</p>
    <div>
      <p>{moment(experience.from).format("DD/MM/YYYY")}</p>
      <p>{experience.to ? moment(experience.to).format("DD/MM/YYYY") : 'Current'}</p>
    </div>
    <p>{experience.description}</p>
  </div>
);

export default Experience;
