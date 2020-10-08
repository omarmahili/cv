import React from "react";

interface A4Props {
  children: React.ReactNode;
}

const A4: React.FunctionComponent<A4Props> = ({ children }) => {
  return <div className="a4 bg-white shadow" style={{ width: '210mm', height: '297mm' }}>{children}</div>;
};

export default A4;
