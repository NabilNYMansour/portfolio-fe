"use client";

import { useState } from 'react';
import { Container, Group, Burger, Drawer, ActionIcon, Flex, Tooltip, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ThemeToggle } from '../components/ThemeToggle';
import classes from './Header.module.css';
import { IconBrandGithub, IconBrandLinkedin, IconBrandYoutubeFilled, IconFileCv, IconMailFilled } from '@tabler/icons-react';
import { MediumIcon, ShaderToyIcon } from '../../icons/CustomIcons';


const links = [
  { link: '/', label: 'About' },
  { link: '/work', label: 'Work' },
  { link: '/projects', label: 'Projects' },
  { link: '/blogs', label: 'Blogs' },
  { link: '/shaders', label: 'Shaders' },
];
const contacts = [
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
    icon: <IconBrandLinkedin />,
  },
  {
    link: "https://github.com/NabilNYMansour",
    title: "GitHub",
    icon: <IconBrandGithub />,
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

const Links = ({ active, setActive, opened, toggle }:
  { active: string, setActive: (arg0: string) => void, opened: boolean, toggle: () => void }) => {
  return links.map((link) => (
    <Button
      key={link.label}
      size="xs"
      radius="sm"
      component="a"
      href={link.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        opened && toggle();
      }}
      variant={active === link.link ? 'filled' : 'subtle'}
    >
      {link.label}
    </Button>
  ))
};
const Contacts = () => {
  return contacts.map((contact) => (
    <Tooltip
      withArrow
      color='main.9'
      openDelay={750}
      label={<Text fz="xs" lh="md">{contact.title}</Text>}>
      <ActionIcon
        key={contact.title}
        component="a"
        href={contact.link}
        target="_blank"
        variant='subtle'
        size="xl"
        aria-label="Toggle color scheme"
      >
        {contact.icon}
      </ActionIcon>
    </Tooltip>

  ))
};
const HeaderDrawer = ({ opened, toggle, active, setActive }:
  { opened: boolean, toggle: () => void, active: string, setActive: (arg0: string) => void }
) => {
  return <Drawer.Root opened={opened} hiddenFrom="md" onClose={toggle}>
    <Drawer.Overlay />
    <Drawer.Content>
      <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
        <Drawer.Header>
          <Drawer.Title>Portfolio</Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body style={{ flexGrow: 1 }}>
          <Flex direction="column" wrap="wrap" justify="space-between" style={{ height: "100%" }}>
            <Flex
              direction="column"
              wrap="wrap"
              style={{ paddingTop: "1rem" }}
            >
              <Links active={active} setActive={setActive} opened={opened} toggle={toggle} />
            </Flex>
            <Group
              justify='center'
              gap={5}>
              <Contacts />
            </Group>
          </Flex>
        </Drawer.Body>
      </div>
    </Drawer.Content>
  </Drawer.Root>
};


export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        {/* Desktop */}
        <Group gap={5} visibleFrom="md">
          <Links active={active} setActive={setActive} opened={opened} toggle={toggle} />
        </Group>

        {/* Mobile */}
        <Burger onClick={toggle} hiddenFrom="md" size="sm" />
        <HeaderDrawer opened={opened} toggle={toggle} active={active} setActive={setActive} />

        {/* Both */}
        <ThemeToggle />

        {/* Desktop */}
        <Group gap={5} visibleFrom="md">
          <Contacts />
        </Group>
      </Container>
    </header>
  );
}