import React from "react";
import { ImUser } from "react-icons/im";
import { ProfileData } from "../models/cv";

interface ProfileProps {
  profile: ProfileData;
}

const Profile: React.FunctionComponent<ProfileProps> = ({ profile }) => (
  <div className="flex flex-col items-center mb-8">
    <div className=" flex items-center justify-center w-40 h-40 rounded-full bg-gray-300 mb-6 overflow-hidden">
      {profile.imageBase64 ? (
        <img
          className="w-40 h-auto"
          src={profile.imageBase64}
          alt="Profile"
        />
      ) : (
        <ImUser className="text-gray-400 w-24 h-auto" />
      )}
    </div>
    <div className="flex flex-col items-center">
      <p className="text-lg">{profile.fullname}</p>
      <p className="text-xl text-orange-600 mb-6">{profile.expertise}</p>
      <p className="text-gray-600 italic text-center">
        "{profile.description}"
      </p>
    </div>
  </div>
);

export default Profile;
