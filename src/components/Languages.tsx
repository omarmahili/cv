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
    {/* list-inside would be better, but it doesn't work when exporting the pdf */}
    <ul className="text-gray-600 list-disc ml-4">
      {languages.map(x => <li>{x}</li>)}
    </ul>
  </div>
);

export default Languages;
