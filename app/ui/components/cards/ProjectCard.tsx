import {
  ActionIcon,
  ActionIconGroup,
  Card,
  Flex,
  Group,
  Stack,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core';
import classes from './card.module.css';
import cx from 'clsx';

import { fetchProject } from '@/app/lib/data';
import Image from 'next/image';
import { IconBrandGithub, IconLink, IconBrandYoutubeFilled } from '@tabler/icons-react';
import { SteamIcon } from '../../icons/CustomIcons';
import Link from 'next/link';

const ButtonList = ({ link, gitLink, steamLink, youtubeLink }: {
  link?: string,
  gitLink?: string,
  steamLink?: string,
  youtubeLink?: string
}) => {
  const buttonListData = [{
    link: link,
    icon: <IconLink />,
    label: "Website Link"
  }, {
    link: gitLink,
    icon: <IconBrandGithub />,
    label: "GitHub Link"
  }, {
    link: steamLink,
    icon: <SteamIcon size={28} />,
    label: "Steam Link"
  }, {
    link: youtubeLink,
    icon: <IconBrandYoutubeFilled />,
    label: "YouTube Link"
  }];
  const getButtonColor = (label: string) => {
    switch (label) {
      case "Website Link":
        return 'blue';
      case "GitHub Link":
        return 'gray';
      case "Steam Link":
        return '#1B2838';
      case "YouTube Link":
        return 'red';
      default:
        return 'red';
    }
  }
  return (
    <>
      {buttonListData.map((data) => (
        data.link && <Tooltip
          key={data.label}
          position="bottom"
          withArrow
          color='main-dark.7'
          openDelay={750}
          label={<Text fz="xs" lh="md">{data.label}</Text>}>
          <ActionIcon
            component="a"
            href={data.link}
            target="_blank"
            variant='default'
            className={classes.actionIcon}
            color={getButtonColor(data.label)}
            size="xl"
            aria-label={data.label}
          >
            {data.icon}
          </ActionIcon>
        </Tooltip>
      ))}
    </>
  )
}



export async function ProjectCard({ id }: { id: string }) {
  const info = await fetchProject(id);

  const clickAbleLink = info.data.link || info.data.gitLink || info.data.steamLink || info.data.youtubeLink;

  return (
    <Group m={0} p={0}>
      <Card shadow="xs" withBorder m={0} p={0} className={classes.main}>
        <Link href={clickAbleLink} target="_blank" rel="noopener noreferrer" className={cx(classes.link, classes.mainJustHover)}>
          <div className={classes.image}>
            <Image
              src={info.banner}
              alt="Article Banner"
              sizes="300px"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <Stack gap={7.5} pl={15} pr={15} pb={0} pt={15}>
            <h2 className={classes.title} >{info.title}</h2>
            <div className={classes.subtitleNoClamp} >{info.subtitle}</div>
          </Stack>
        </Link>
        <Stack gap={7.5} pl={15} pr={15} pb={15} pt={7.5}>
          <Flex gap={5} maw={300} wrap='wrap'>
            {info.data.techList.map((tech: string, i: number) => (
              <Card key={i} pl={10} pr={10} pt={2} pb={2} shadow="xs" withBorder
                style={{ backgroundColor: "var(--mantine-primary-color-light-hover)" }}>
                {tech}
              </Card>))}
          </Flex>
          <ActionIconGroup>
            <ButtonList
              link={info.data.link}
              gitLink={info.data.gitLink}
              steamLink={info.data.steamLink}
              youtubeLink={info.data.youtubeLink}
            />
          </ActionIconGroup>
        </Stack>
      </Card>
    </Group>
  );
}