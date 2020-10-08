import React from "react";

interface TitleProps {
  children: string;
}

const Title: React.FunctionComponent<TitleProps> = ({ children }) => (
  <div className="flex items-center w-full h-10">
    <div className="flex-1 border-t-2 border-blue-600 h-0"></div>
    <div className="mx-10 uppercase font-thin text-xl">{children}</div>
    <div className="flex-1 border-t-2 border-blue-600 h-0"></div>
  </div>
);

export default Title;
