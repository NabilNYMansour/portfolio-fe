'use client';

import { Title, Text, Button, Container, Group } from '@mantine/core';
import classes from './error.module.css';

export default function Error({ error, reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>¯\_(ツ)_/¯</Title>
        <Text size="lg" ta="center" className={classes.description}>
          I don&apos;t know what you&apos;re looking for.
        </Text>
        <Group justify="center">
          {/* <Button variant='white'
            // gradient={{ from: 'main.6', to: 'main.9', deg: 90 }}
            size="md"
            onClick={
              () => reset()
            }>
            Refresh the page
          </Button> */}
        </Group>
      </Container>
    </div>
  );
}