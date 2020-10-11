import React from "react";

interface A4Props {
  children: React.ReactNode;
}

const A4: React.FunctionComponent<A4Props> = ({ children }) => (
  <div className="a4 bg-white shadow flex flex-row">{children}</div>
);

export default A4;
