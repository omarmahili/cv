import React from "react";
import { ImMail2, ImGithub, ImPhone, ImCalendar } from "react-icons/im";
import Subhead from "./Subhead";
import IconText from "./IconText";
import { InfoData } from "../models/cv";

interface InfoProps {
  info: InfoData;
}

const Info: React.FunctionComponent<InfoProps> = ({
  info
}) => (
  <div className="mt-8">
    <Subhead>Info</Subhead>
    <div className="text-sm text-gray-600">
      <IconText icon={<ImMail2 />}>{info.email}</IconText>
      <IconText icon={<ImPhone />}>{info.phoneNumber}</IconText>
      <IconText icon={<ImGithub />}>{info.githubNickname}</IconText>
      <IconText icon={<ImCalendar />}>{info.birthDate}</IconText>
    </div>
  </div>
);

export default Info;
