"use client";

import { useEffect, useRef, useState } from 'react';
import { Container, Group, Burger, Drawer, ActionIcon, Flex, Tooltip, Text, Button, UnstyledButton } from '@mantine/core';
import { useDisclosure, useHover } from '@mantine/hooks';
import { ThemeToggle } from '../components/buttons/ThemeToggle';
import classes from './Header.module.css';
import { contacts, links } from '../components/Constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FloatingIndicator } from '@mantine/core';

function FloatingLinks({ direction, opened, toggle }: {
  direction: "row" | "column",
  opened: boolean, toggle: () => void
}) {
  const currPath = usePathname();
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState(links.findIndex((item) => item.link === currPath));
  const [loading, setLoading] = useState(true); // to make sure index 0 is filled before indicator is loaded

  useEffect(() => { // after rendering, loading is set to false as indicator is loaded
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log(currPath);
    console.log(active);
    setActive(links.findIndex((item) => item.link === currPath));
  }, [currPath]);

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const getVariant = (index: number) => {
    if (direction === 'column') {
      return active === index ? 'filled' : 'subtle';
    } else if (loading && active === index) {
      return 'filled';
    } else {
      return "subtle";
    }
  }

  const controls = links.map((item, index) => (
    <Link key={item.label} href={item.link} className={classes.link}>
      <Button
        className={classes.control}
        key={item.label} ref={setControlRef(index)}
        onClick={() => { setActive(index); opened && toggle(); }}
        variant={getVariant(index)} size="xs" fz="sm"
        c={active === index ? 'white' : undefined}>
        <span className={classes.controlLabel}>{item.label}</span>
      </Button>
    </Link >
  ));

  useEffect(() => {
    console.log(active);
    
  }, [active]);

  return (
    <Flex direction={direction} gap={5} pos="relative" ref={setRootRef}>
      {controls}
      {direction === 'row' &&
        <FloatingIndicator className={classes.indicator}
          target={controlsRefs[active]} parent={rootRef} />
      }
    </Flex>
  );
};
const Contacts = () => {
  return contacts.map((contact) => (
    <Tooltip
      key={contact.title}
      withArrow
      color='main-dark.9'
      openDelay={750}
      label={<Text fz="xs" lh="md">{contact.title}</Text>}>
      <ActionIcon
        key={contact.title}
        component="a"
        href={contact.link}
        target="_blank"
        variant='subtle'
        size="xl"
        aria-label={contact.title}
      >
        {contact.icon}
      </ActionIcon>
    </Tooltip>
  ))
};
const HeaderDrawer = ({ opened, toggle }:
  { opened: boolean, toggle: () => void }
) => {
  return <Drawer.Root opened={opened} hiddenFrom="xl" onClose={toggle}>
    <Drawer.Overlay />
    <Drawer.Content>
      <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
        <Drawer.Header>
          <Drawer.Title>Portfolio</Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body style={{ flexGrow: 1 }}>
          <Flex direction="column" wrap="wrap" justify="space-between" style={{ height: "100%" }}>
            <Flex direction="column" pt="1rem">
              <FloatingLinks direction='column' opened={opened} toggle={toggle} />
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
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [checkHeader, setCheckHeader] = useState(true);
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');
  const prevScrollVal = useRef(0);
  const headerHover = useHover();

  const handleScroll = () => {
    if (window.scrollY < 350) {
      setHeaderVisible(true);
    }

    if (window.scrollY < prevScrollVal.current || window.scrollY < 350) {
      setScrollDir('up');
    } else {
      setScrollDir('down');
    }
    if (Math.abs(window.scrollY - prevScrollVal.current) > 300) {
      prevScrollVal.current = window.scrollY;
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const intervalID = setTimeout(() => {
      if (scrollDir === 'down') {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setCheckHeader(!checkHeader);
    }, 200);
    return () => clearInterval(intervalID);
  }, [checkHeader, scrollDir]);

  useEffect(() => {
    setScrollDir("up");
  }, [headerHover.hovered]);

  const slideUp = {
    transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
    transition: "transform ease 0.25s"
  };

  return (
    <header>
      <div ref={headerHover.ref} className={classes.rootHeader}>
        <div className={classes.header} style={slideUp} >
          <Container size="xl" className={classes.inner}>
            {/* Desktop */}
            <Group visibleFrom="xl" w={"33%"} justify='center'>
              <FloatingLinks direction='row' opened={opened} toggle={toggle} />
            </Group>

            <Container visibleFrom="xl" w={"33%"}>
              <ThemeToggle />
            </Container>

            <Group gap={5} visibleFrom="xl" w={"33%"} justify='center'>
              <Contacts />
            </Group>

            {/* Mobile */}
            <Burger aria-label="Toggle navigation" onClick={toggle} hiddenFrom="xl" size="sm" />
            <ThemeToggle hiddenFrom="xl" />
            <HeaderDrawer opened={opened} toggle={toggle} />
          </Container>
        </div>
      </div>
    </header>
  );
}