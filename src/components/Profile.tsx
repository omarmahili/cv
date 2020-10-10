import React from "react";

interface ProfileProps {
  fullname: string;
  expertise: string;
  description: string;
}

const Profile: React.FunctionComponent<ProfileProps> = ({
  fullname,
  expertise,
  description,
}) => (
  <div className="flex flex-col items-center">
    <div className="w-40 h-40 rounded-full bg-gray-400"></div>
    <div className="flex flex-col items-center mt-6">
      <p className="text-lg">{fullname}</p>
      <p className="text-xl text-orange-600">{expertise}</p>
      <p className="text-gray-600 italic text-center mt-6">"{description}"</p>
    </div>
  </div>
);

export default Profile;
