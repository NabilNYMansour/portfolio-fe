import { IconBrandCSharp, IconBrandCpp, IconBrandGithub, IconBrandJavascript, IconBrandLinkedin, IconBrandMantine, IconBrandMysql, IconBrandPython, IconBrandReact, IconBrandThreejs, IconBrandTypescript, IconBrandUnity, IconBrandYoutubeFilled, IconFileCv, IconMailFilled } from '@tabler/icons-react';
import { ArduinoIcon, LispIcon, MediumIcon, MuiIcon, OpenGLIcon, PytorchIcon, ShaderToyIcon } from '../icons/CustomIcons';

export const links = [
  { link: '/', label: 'About' },
  { link: '/blogs', label: 'Blogs' },
  { link: '/work', label: 'Work' },
  { link: '/projects', label: 'Projects' },
  { link: '/shaders', label: 'Shaders' },
];
export const contacts = [
  {
    link: "https://www.youtube.com/@nabilnymansour",
    title: "YouTube",
    icon: <IconBrandYoutubeFilled />,
  },
  {
    link: "https://medium.com/@nabilnymansour",
    title: "Medium",
    icon: <MediumIcon />,
  },
  {
    link: "https://www.linkedin.com/in/nnym/",
    title: "LinkedIn",
    icon: <IconBrandLinkedin stroke={1.5} />,
  },
  {
    link: "https://github.com/NabilNYMansour",
    title: "GitHub",
    icon: <IconBrandGithub stroke={1.5} />,
  },
  {
    link: "https://www.shadertoy.com/user/chickenlegs",
    title: "ShaderToy",
    icon: <ShaderToyIcon />,
  },
  {
    link: "NNYM_Resume.pdf",
    title: "Resume",
    icon: <IconFileCv />,
  },
  {
    link: "mailto:nabilnymansour@gmail.com",
    title: "Email",
    icon: <IconMailFilled />,
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
