import React from "react";

interface TagProps {
  children: string;
}

const Tag: React.FunctionComponent<TagProps> = ({ children }) => (
  <div className="bg-blue-400 px-2 py-1 shadow mr-2 mb-2">
    <p className="text-white text-xs">{children}</p>
  </div>
);

export default Tag;
