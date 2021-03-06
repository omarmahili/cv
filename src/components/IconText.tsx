import React from "react";

interface IconTextProps {
  icon: React.ReactNode;
  children: string;
}

const IconText: React.FunctionComponent<IconTextProps> = ({
  icon,
  children,
}) => (
  <div className="flex flex-row items-center mb-1">
    <div className="mr-2">{icon}</div>
    {children}
  </div>
);

export default IconText;
