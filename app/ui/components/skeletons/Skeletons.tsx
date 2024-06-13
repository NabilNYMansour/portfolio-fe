"use client";
import {
  ActionIcon,
  Card,
  Group,
  Stack,
} from '@mantine/core';
import classes from './ArticleCardSkeleton.module.css';
import cx from 'clsx';

export function TechSkeleton() {
  return (
    <Card
      className={classes.shimmerEffect}
      pl={10}
      pr={10}
      pt={2}
      pb={2}
      style={{
        backgroundColor: "var(--mantine-primary-color-light-hover)",
      }}
      shadow="xs" withBorder
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Card>
  );
}

export function ProjectLinkSkeleton() {
  return (
    <ActionIcon
      variant='light'
      size="xl"
      aria-label="Toggle color scheme"
      loading
    />
  );
}


export function ArticleCardSkeleton() {
  const effect = classes.shimmerEffect;
  return (
    <Group m={0} p={0}>
      <Card shadow="xs" withBorder m={0} p={0} className={classes.main}>
        <Stack gap={0}>
          <Group gap={5} w={330} h={150} m={0} className={cx(effect, classes.image)} /> {/* Image */}
          <Stack gap={7.5} p={15}>
            <h2 className={cx(effect, classes.title)} >&nbsp;</h2>
            <h3 className={cx(effect, classes.subtitle)} >&nbsp;</h3>
            <Group gap={5} justify='space-between'>
              <span className={cx(effect, classes.readTime)} >&nbsp;</span>
              <span className={cx(effect, classes.date)} >&nbsp;</span>
            </Group>
          </Stack>
        </Stack>
      </Card>
    </Group>
  );
}

export function ProjectCardSkeleton() {
  const effect = classes.shimmerEffect;
  return (
    <Group>
      <Card shadow="xs" withBorder m={0} p={0} className={classes.main}>
        <Group gap={5} w={330} h={150} m={0} className={cx(effect, classes.image)} /> {/* Image */}
        <Stack gap={0}>
          <Stack gap={7.5} p={15}>
            <h2 className={cx(effect, classes.title)} >&nbsp;</h2>
            <h5 className={cx(effect, classes.subtitle)} >&nbsp;</h5>
            <Group gap={5}>
              <TechSkeleton />
              <TechSkeleton />
              <TechSkeleton />
            </Group>
            <ActionIcon.Group>
              <ProjectLinkSkeleton />
              <ProjectLinkSkeleton />
              <ProjectLinkSkeleton />
            </ActionIcon.Group>
          </Stack>
        </Stack>
      </Card>
    </Group>
  );
}