import React from "react";
import { ImMail2, ImGithub, ImPhone, ImCalendar } from "react-icons/im";
import Subhead from "./Subhead";
import IconText from "./IconText";

interface InfoProps {
  email: string;
  phoneNumber: string;
  githubNickname: string;
  birthDate: string;
}

const Info: React.FunctionComponent<InfoProps> = ({
  email,
  phoneNumber,
  githubNickname,
  birthDate,
}) => (
  <div className="mt-8">
    <Subhead>Info</Subhead>
    <div className="text-sm text-gray-600">
      <IconText icon={<ImMail2 />}>{email}</IconText>
      <IconText icon={<ImPhone />}>{phoneNumber}</IconText>
      <IconText icon={<ImGithub />}>{githubNickname}</IconText>
      <IconText icon={<ImCalendar />}>{birthDate}</IconText>
    </div>
  </div>
);

export default Info;
