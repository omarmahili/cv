import React from "react";

interface SubheadProps {
  children: string;
}

const Subhead: React.FunctionComponent<SubheadProps> = ({ children }) => (
  <p className="text-sm uppercase mb-2">{children}</p>
);

export default Subhead;
