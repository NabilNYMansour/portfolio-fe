import cx from 'clsx';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Group, Tooltip, Text } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from './ThemeToggle.module.css';

export function ThemeToggle() {
  // These are not hooks
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Group justify="center">
      <Tooltip
        withArrow
        color='main.9'
        openDelay={750}
        label={<Text fz="xs" lh="md">Toggle Theme</Text>}>
        <ActionIcon
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          variant='subtle'
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}