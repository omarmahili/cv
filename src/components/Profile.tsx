import React from "react";

interface ProfileProps {
  fullname: string;
  expertise: string;
}

const Profile: React.FunctionComponent<ProfileProps> = ({
  fullname,
  expertise,
}) => (
  <div className="flex flex-col items-center">
    <div className="w-40 h-40 rounded-full bg-gray-400"></div>
    <div className="flex flex-col items-center mt-6">
      <p className="text-lg">{fullname}</p>
      <p className="text-xl text-orange-600">{expertise}</p>
    </div>
  </div>
);

export default Profile;
