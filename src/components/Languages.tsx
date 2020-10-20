import React from "react";
import Subhead from "./Subhead";

interface LanguagesProps {
  languages: string[];
}

const Languages: React.FunctionComponent<LanguagesProps> = ({
  languages,
}) => (
  <div className="mb-8">
    <Subhead>Languages</Subhead>
    <ul className="text-gray-600 list-disc list-inside">
      {languages.map(x => <li>{x}</li>)}
    </ul>
  </div>
);

export default Languages;
