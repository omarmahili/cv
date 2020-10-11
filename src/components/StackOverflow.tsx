import React from "react";
import { ImStackoverflow } from "react-icons/im";
import IconText from "./IconText";
import Subhead from "./Subhead";

interface StackOverflowProps {
  from: number;
  reputation: string;
  answers: string;
  peopleReached: string;
}

const StackOverflow: React.FunctionComponent<StackOverflowProps> = ({
  from,
  reputation,
  answers,
  peopleReached,
}) => (
  <div className="mt-8">
    <Subhead>StackOverflow</Subhead>
    <div className="text-gray-600">
      <p className="text-xs italic">Active from {from}</p>
      <IconText icon={<ImStackoverflow />}>
        {`${reputation} Reputation`}
      </IconText>
      <p>{answers} answers</p>
      <p>
        {peopleReached} people reached
      </p>
    </div>
  </div>
);

export default StackOverflow;
