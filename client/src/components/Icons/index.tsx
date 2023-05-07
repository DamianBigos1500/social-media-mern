import { FC } from 'react';
import { AiFillCaretDown, AiOutlineUserAdd } from 'react-icons/ai';
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { FaUserFriends } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { BiSearchAlt } from 'react-icons/bi';
import { BsHouse } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { BsCalendar4Event } from 'react-icons/bs';
import { BsPlayBtn } from 'react-icons/bs';
import { FiFileText } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';

interface IIcons {
  AiOutlineUserAdd: FC;
  HiOutlineChatBubbleOvalLeftEllipsis: FC;
}

interface IconProps {
  AiOutlineUserAdd: FC;
  HiOutlineChatBubbleOvalLeftEllipsis: FC;
}

const Icons: any = {};

Icons.AiOutlineUserAdd = ({ ...props }: IconProps) => {
  return <AiOutlineUserAdd {...props} />;
};

Icons.HiOutlineChatBubbleOvalLeftEllipsis = ({ ...props }: IconProps) => {
  return <HiOutlineChatBubbleOvalLeftEllipsis {...props} />;
};

Icons.FaUserFriends = ({ ...props }: IconProps) => {
  return <FaUserFriends {...props} />;
};

Icons.BiCategory = ({ ...props }: IconProps) => {
  return <BiCategory {...props} />;
};
Icons.BsCalendar4Event = ({ ...props }: IconProps) => {
  return <BsCalendar4Event {...props} />;
};

Icons.BsPlayBtn = ({ ...props }: IconProps) => {
  return <BsPlayBtn {...props} />;
};

Icons.HiOutlinePhoto = ({ ...props }: IconProps) => {
  return <HiOutlinePhoto {...props} />;
};

Icons.FiFileText = ({ ...props }: IconProps) => {
  return <FiFileText {...props} />;
};

Icons.BsHouse = ({ ...props }: IconProps) => {
  return <BsHouse {...props} />;
};

Icons.BsGithub = ({ ...props }: IconProps) => {
  return <BsGithub {...props} />;
};

Icons.BsGoogle = ({ ...props }: IconProps) => {
  return <BsGoogle {...props} />;
};

Icons.IoMdNotificationsOutline = ({ ...props }: IconProps) => {
  return <IoMdNotificationsOutline {...props} />;
};

Icons.BiSearchAlt = ({ ...props }: IconProps) => {
  return <BiSearchAlt {...props} />;
};

Icons.AiFillCaretDown = ({ ...props }: IconProps) => {
  return <AiFillCaretDown {...props} />;
};

Icons.GoogleIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      fill="#000000"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 210 210"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40  c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105  S0,162.897,0,105z" />
    </svg>
  );
};

Icons.GithubIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
};

export default Icons;
