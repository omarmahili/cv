import React from "react";
import ExperienceModel from "../models/experience";

interface ExperienceDetailsProps {
  experience: ExperienceModel;
}

const ExperienceDetails: React.FunctionComponent<ExperienceDetailsProps> = ({
  experience,
}) => {
  const companyOrInstitute = experience.companyOrInstitute ? (
    <p className="text-base text-gray-800">{`at ${experience.companyOrInstitute}`}</p>
  ) : null;

  const description = experience.description ? (
    <p className="text-sm my-2">{experience.description}</p>
  ) : null;

  const profession = experience.profession ? (
    <p className="text-lg text-orange-600">{experience.profession}</p>
  ) : null;

  return (
    <li className="flex flex-row text-sm text-gray-800">
      <div className="h-6 flex justify-center items-center">
        <div className="w-2 h-2 border-2 border-blue-600 rounded-full"></div>
      </div>
      <div className="flex flex-col ml-4">
        <p className="h-6 flex items-center">{`${experience.from} - ${
          experience.to || "Current"
        }`}</p>
        <div className="mt-2">
          {profession}
          {companyOrInstitute}
          {description}
        </div>
      </div>
    </li>
  );
};

export default ExperienceDetails;
