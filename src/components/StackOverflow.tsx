import React from "react";
import { ImStackoverflow } from "react-icons/im";
import { StackOverflowData } from "../models/cv";
import IconText from "./IconText";
import Subhead from "./Subhead";

interface StackOverflowProps {
  stackoverflow: StackOverflowData;
}

const StackOverflow: React.FunctionComponent<StackOverflowProps> = ({
  stackoverflow,
}) => (
  <div className="mb-4">
    <Subhead>StackOverflow</Subhead>
    <div className="text-sm text-gray-600">
      <p className="text-xs italic mb-1">Active from {stackoverflow.from}</p>
      <IconText icon={<ImStackoverflow />}>
        {`${stackoverflow.reputation} Reputation`}
      </IconText>
      <p className="mb-1">{stackoverflow.answers} answers</p>
      <p className="mb-1">
        {stackoverflow.peopleReached} people reached
      </p>
    </div>
  </div>
);

export default StackOverflow;
