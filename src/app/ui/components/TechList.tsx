import { Card, Group } from "@mantine/core";

export default function TechList({ techList }: { techList: string[] }) {
  return (
    <Group justify="center">
      {techList.map((techString, i) =>
        <Card
          key={i}
          pl={10}
          pr={10}
          pt={2}
          pb={2}
          style={{
            backgroundColor: "var(--mantine-primary-color-light-hover)",
          }}
          shadow="xs" withBorder
        >
          {techString}
        </Card>
      )}
    </Group>
  );
}
