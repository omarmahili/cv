import React from "react";
import { ProfileData } from "../models/cv";

interface ProfileProps {
  profile: ProfileData;
}

const Profile: React.FunctionComponent<ProfileProps> = ({
  profile,
}) => (
  <div className="flex flex-col items-center mb-16">
    <div className="w-40 h-40 rounded-full bg-gray-400 mb-6"></div>
    <div className="flex flex-col items-center">
      <p className="text-lg">{profile.fullname}</p>
      <p className="text-xl text-orange-600 mb-6">{profile.expertise}</p>
      <p className="text-gray-600 italic text-center">"{profile.description}"</p>
    </div>
  </div>
);

export default Profile;
