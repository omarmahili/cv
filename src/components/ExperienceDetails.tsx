import React from "react";
import { ImLocation2 } from "react-icons/im";
import { ExperienceDetailsData } from "../models/cv";
import IconText from "./IconText";

interface ExperienceDetailsProps {
  details: ExperienceDetailsData;
}

const ExperienceDetails: React.FunctionComponent<ExperienceDetailsProps> = ({
  details,
}) => {
  const companyOrInstitute = details.companyOrInstitute ? (
    <p className="text-base text-gray-800">{`at ${details.companyOrInstitute}`}</p>
  ) : null;

  const description = details.description ? (
    <p className="text-sm my-2">{details.description}</p>
  ) : null;

  const profession = details.profession ? (
    <p className="text-lg text-orange-600">{details.profession}</p>
  ) : null;

  const location = details.location ? (
    <IconText icon={<ImLocation2 />}>{details.location}</IconText>
  ) : null;

  return (
    <li className="flex flex-row text-sm text-gray-800">
      <div className="h-6 flex justify-center items-center">
        <div className="w-2 h-2 border-2 border-blue-600 rounded-full"></div>
      </div>
      <div className="flex flex-col ml-4">
        <p className="h-6 flex items-center">{`${details.from} - ${
          details.to || "Current"
        }`}</p>
        <div className="mt-2">
          {profession}
          <div className="flex flex-row justify-between text-gray-600">
            {companyOrInstitute}
            <div className="text-sm">
              {location}
            </div>
          </div>
          {description}
        </div>
      </div>
    </li>
  );
};

export default ExperienceDetails;
