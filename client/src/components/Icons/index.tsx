import { FC } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { FaUserFriends } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { BsCalendar4Event } from 'react-icons/bs';
import { BsPlayBtn } from 'react-icons/bs';
import { FiFileText } from 'react-icons/fi';
import { BsHouse } from 'react-icons/bs';

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

export default Icons;
