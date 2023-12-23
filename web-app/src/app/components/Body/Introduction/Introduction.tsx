"use client";

import {
  Grid,
  Container,
  Title,
  Text,
  Space,
  rem,
  Skeleton,
  Divider,
  List,
  ThemeIcon,
  ListItem,
} from "@mantine/core";
import { IconCheck, IconProgress } from "@tabler/icons-react";

const child = <Skeleton height={140} radius="md" animate={false} />;

export function Introduction() {
  return (
    <Container size="sm">
      <Grid align="center">
        <Grid.Col>
          <Container>
            <Divider
              my="xs"
              label={
                <>
                  <Title>A little bit about me</Title>
                </>
              }
              labelPosition="left"
            />
            <Space h="sm" />
            <Text>
              Hey there! My name is Bhavanvir, or you can call me Bhavy, and I'm
              a fourth-year Software Engineering student at the University of
              Victoria, specializing in data mining and artificial Intelligence.
            </Text>

            <Space h="md" />

            <Text>
              Most of my passion comes from my younger years, where I was
              exposed to the world of software development through languages
              like Scratch and Blitz3D; who would have thought that a simple
              Flappy Bird clone would have led me to where I am today!
            </Text>

            <Space h="md" />

            <Text>
              Fast forward to today and I've had the privlege of working at a{" "}
              <Text span fw={700} c="blue.6" inherit>
                medium-sized digital image editing company{" "}
              </Text>
              and currently, with the{" "}
              <Text span fw={700} c="blue.6" inherit>
                ARC Software Development Team{" "}
              </Text>
              within the University of Victoria's Research Computing services,
              where my focus is on collaborating with researchers to develop
              cutting-edge software solutions.
            </Text>

            <Space h="md" />

            <Text>
              Here are a handful of technologies I've been tinkering with
              recently:
            </Text>

            <Grid>
              <Grid.Col span={6}>
                <List
                  spacing="xs"
                  size="sm"
                  center
                  icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                      <IconCheck style={{ width: rem(16), height: rem(16) }} />
                    </ThemeIcon>
                  }
                >
                  <ListItem>LangChain</ListItem>
                  <ListItem>PyTorch</ListItem>
                  <ListItem>OR-Tools</ListItem>
                </List>
              </Grid.Col>
              <Grid.Col span={6}>
                <List
                  spacing="xs"
                  size="sm"
                  center
                  icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                      <IconCheck style={{ width: rem(16), height: rem(16) }} />
                    </ThemeIcon>
                  }
                >
                  <ListItem>React</ListItem>
                  <ListItem>Next.js</ListItem>
                  <List.Item
                    icon={
                      <ThemeIcon color="blue" size={24} radius="xl">
                        <IconProgress
                          style={{ width: rem(16), height: rem(16) }}
                        />
                      </ThemeIcon>
                    }
                  >
                    GraphQL
                  </List.Item>
                </List>
              </Grid.Col>
            </Grid>
          </Container>
        </Grid.Col>

        <Grid.Col style={{ minHeight: rem(200) }} />
      </Grid>
    </Container>
  );
}
