import React from "react";
import A4 from "./components/A4";
import Info from "./components/Info";
import Profile from "./components/Profile";
import ExperiencesSection from "./components/ExperiencesSection";
import Skills from "./components/Skills";
import StackOverflow from "./components/StackOverflow";
import CVData from "./models/cv";

const staticData = require('./assets/data.json') as CVData;

const App: React.FunctionComponent = () => (
  <A4>
    <div className="flex flex-col w-8/12 p-10">
      {staticData.experiences.map(x =>
        <ExperiencesSection
          title={x.title}
          list={x.list}
        />
      )}
    </div>
    <div className="flex flex-col w-4/12 bg-blue-100 p-10">
      <Profile profile={staticData.profile} />
      <Info info={staticData.info} />
      <Skills skills={staticData.skills} />
      <StackOverflow stackoverflow={staticData.stackoverflow} />
    </div>
  </A4>
);

export default App;
