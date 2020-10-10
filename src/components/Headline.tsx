import React from "react";

interface HeadlineProps {
  children: string;
}

const Headline: React.FunctionComponent<HeadlineProps> = ({ children }) => (
  <p className="text-sm uppercase">{children}</p>
);

export default Headline;
