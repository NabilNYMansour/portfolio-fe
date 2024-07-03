import { MediumIcon, ShaderToyIcon } from '../icons/CustomIcons';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { GrDocumentUser } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';

export const links = [
  { link: '/', label: 'Home' },
  { link: '/articles', label: 'Articles' },
  // { link: '/work', label: 'Work' },
  { link: '/projects', label: 'Projects' },
  // { link: '/shaders', label: 'Shaders' },
];
export const contacts = [
  {
    link: "https://www.youtube.com/@nabilnymansour",
    title: "YouTube",
    icon: <FaYoutube size={28} />,
  },
  {
    link: "https://medium.com/@nabilnymansour",
    title: "Medium",
    icon: <MediumIcon size={28} />,
  },
  {
    link: "https://www.linkedin.com/in/nnym/",
    title: "LinkedIn",
    icon: <FaLinkedin size={24} />,
  },
  {
    link: "https://github.com/NabilNYMansour",
    title: "GitHub",
    icon: <AiFillGithub size={28} />,
  },
  {
    link: "https://www.shadertoy.com/user/chickenlegs",
    title: "ShaderToy",
    icon: <ShaderToyIcon size={28} />,
  },
  {
    link: "NNYM_Resume.pdf",
    title: "Resume",
    icon: <GrDocumentUser size={24} />,
  },
  {
    link: "mailto:nabilnymansour@gmail.com",
    title: "Email",
    icon: <MdEmail size={28}  />,
  },
];
export const professions = ["Software Engineer", "Web Developer", "Graphics Programmer", "Content Creator"]

export const technologies = [
  "TypeScript",
  "JavaScript",
  "Next.js",
  "React",
  "Python",
  "C/C++",
  "C#",
  "Mantine UI",
  "Material UI",
  "Three.js",
  "OpenGL",
  "Unity",
  "Pytorch",
  "SQL",
  "Arduino",
  "Common Lisp",
];
