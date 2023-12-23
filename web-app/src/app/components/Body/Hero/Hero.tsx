"use client";

import {
  Grid,
  Container,
  Title,
  Text,
  Space,
  rem,
  Button,
  Group,
  Divider,
} from "@mantine/core";

export function Hero() {
  return (
    <Container size="lg" style={{ position: "relative", height: "100vh" }}>
      <Grid>
        <Grid.Col>
          <Text span c="blue.6" fw={700}>
            Hi, my name is
          </Text>
          <Title size={rem(60)}>Bhavanvir Rai.</Title>
          <Title size={rem(60)} c="dimmed">
            I build cool things{" "}
            <Text span fs="italic" inherit>
              occasionally
            </Text>
            .
          </Title>
          <Grid.Col span={8}>
            <Text c="dimmed">
              I'm a software engineer specializing in data mining and artifical
              intelligence, passionate about building software that adds value
              to people's lives, whether that be through visualizations of data
              or through the creation of new tools. Currently at{" "}
              <Text span fw={700} c="blue.6" inherit>
                ARCSoft{""}
              </Text>
              .
            </Text>

            <Space h="md" />

            <Group>
              <Button size="lg" mt="md">
                Want to book a meeting?
              </Button>
              <Button size="lg" variant="outline" mt="md">
                Check out my resume!
              </Button>
            </Group>
          </Grid.Col>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
