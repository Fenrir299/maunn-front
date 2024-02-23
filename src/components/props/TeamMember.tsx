import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

interface TeamMemberProps {
  name: string;
  role: string;
  email: string;
  description: string;
  photo: string;
  linkedin?: string;
  github?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  email,
  description,
  photo,
  linkedin,
  github,
}) => {
  return (
    <li className="flex flex-col md:flex-row space-x-4 pb-12">
      <img src={photo} alt={name} className="w-24 h-24 rounded-full" />
      <div className="flex flex-col ">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm">{role}</p>
        <a className="text-sm text-yellow-camille" href={`mailto:${email}`}>
          {email}
        </a>
        <p className="text-sm">{description}</p>
        <div className="flex space-x-4 mt-2 border-b-2 border-white w-24 pb-12 border-opacity-50 pt-6 ">
          <FontAwesomeIcon
            icon={faLinkedin}
            className={`h-6 w-6 ${
              linkedin
                ? "hover:text-yellow-camille cursor-pointer"
                : "text-gray-300 opacity-20"
            }`}
            onClick={
              linkedin ? () => window.open(linkedin, "_blank") : undefined
            }
          />
          <FontAwesomeIcon
            icon={faGithub}
            className={`h-6 w-6 ${
              github
                ? "hover:text-yellow-camille cursor-pointer"
                : "text-gray-300 opacity-20"
            }`}
            onClick={github ? () => window.open(github, "_blank") : undefined}
          />
        </div>
      </div>
    </li>
  );
};

export default TeamMember;
