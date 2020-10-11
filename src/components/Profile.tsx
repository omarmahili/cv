import React from "react";
import { ProfileData } from "../models/cv";

interface ProfileProps {
  profile: ProfileData;
}

const Profile: React.FunctionComponent<ProfileProps> = ({
  profile,
}) => (
  <div className="flex flex-col items-center">
    <div className="w-40 h-40 rounded-full bg-gray-400"></div>
    <div className="flex flex-col items-center mt-6">
      <p className="text-lg">{profile.fullname}</p>
      <p className="text-xl text-orange-600">{profile.expertise}</p>
      <p className="text-gray-600 italic text-center mt-6">"{profile.description}"</p>
    </div>
  </div>
);

export default Profile;
