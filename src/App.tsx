import React, { useRef } from "react";
import A4 from "./components/A4";
import Info from "./components/Info";
import Profile from "./components/Profile";
import ExperiencesSection from "./components/ExperiencesSection";
import Skills from "./components/Skills";
import StackOverflow from "./components/StackOverflow";
import Languages from "./components/Languages";
import DownloadLink from "./components/DownloadLink";
import CVData from "./models/cv";

const staticData = require("./assets/data.json") as CVData;

const App: React.FunctionComponent = () => {
  const pageRef = useRef(null);

  return (
    <div className="flex flex-col items-center">
      <DownloadLink elementRef={pageRef} />

      <div ref={pageRef}>
        <A4>
          <div className="flex flex-col w-8/12 p-10">
            {staticData.experiences.map((x) => (
              <ExperiencesSection title={x.title} list={x.list} />
            ))}
          </div>
          <div className="flex flex-col w-4/12 bg-blue-100 p-10">
            <Profile profile={staticData.profile} />
            <Info info={staticData.info} />
            <Languages languages={staticData.languages} />
            <Skills skills={staticData.skills} />
            <StackOverflow stackoverflow={staticData.stackoverflow} />
          </div>
        </A4>
      </div>

      <div className="text-sm text-gray-500 text-center mt-4">
        <p>Copyright © 2020 - Omar Mahili</p>
        <p><a className="underline hover:text-gray-700" href="https://github.com/omarmahili/cv">Source code</a> - MIT License</p>
      </div>
    </div>
  );
};

export default App;
