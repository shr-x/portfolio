import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaCodepen,
  FaDev,
  FaGithub,
} from 'react-icons/fa';

import {
  EnvelopeIcon,
  JournalIcon,
  HeartIcon,
  HomeIcon,
} from '../components/svgs';

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    url: '/',
    svg: <HomeIcon />,
  },
  {
    id: 2,
    name: 'Works',
    url: '/works',
    svg: <HeartIcon />,
  },
  {
    id: 3,
    name: 'Journal',
    url: '/journal',
    svg: <JournalIcon />,
  },
  {
    id: 4,
    name: 'Contact',
    url: '/contact',
    svg: <EnvelopeIcon />,
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/shr-x',
    icon: <FaLinkedinIn />,
    color: 'teal',
  },
  {
    id: 2,
    name: 'Github',
    url: 'https://github.com/shr-x',
    icon: <FaGithub />,
    color: 'gray',
  },
  {
    id: 3,
    name: 'Twitter',
    url: 'https://x.com/_shr_x',
    icon: <FaTwitter />,
    color: 'blue',
  },
  {
    id: 4,
    name: 'Instagram',
    url: 'https://www.instagram.com/_.poojithr_/',
    icon: <FaInstagram />,
    color: 'pink',
  },
];

export const shortSocialLinks = [
  socialMediaLinks[0],
  socialMediaLinks[2],
  socialMediaLinks[3],
  socialMediaLinks[1],
];
