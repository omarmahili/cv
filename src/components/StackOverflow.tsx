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
  <div className="mt-8">
    <Subhead>StackOverflow</Subhead>
    <div className="text-gray-600">
      <p className="text-xs italic">Active from {stackoverflow.from}</p>
      <IconText icon={<ImStackoverflow />}>
        {`${stackoverflow.reputation} Reputation`}
      </IconText>
      <p>{stackoverflow.answers} answers</p>
      <p>
        {stackoverflow.peopleReached} people reached
      </p>
    </div>
  </div>
);

export default StackOverflow;
