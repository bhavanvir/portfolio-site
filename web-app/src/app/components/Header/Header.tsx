"use client";

import classes from "./Header.module.css";
import {
  Autocomplete,
  Group,
  Burger,
  rem,
  Text,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconBrandGithub } from "@tabler/icons-react";
import { ColorScheme } from "../ToggleColorScheme/ColorScheme";

const links = [
  { link: "/about", label: "About" },
  { link: "/pricing", label: "Experience" },
  { link: "/learn", label: "Work" },
  { link: "/community", label: "Contact" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Text size="xl">Bhavanvir Rai</Text>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            size="sm"
            radius="md"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            visibleFrom="xs"
          />
          <ColorScheme />
          <ActionIcon
            variant="default"
            // Setting the size to "lg" has the icon 2px shorter than the search bar
            size="2.2em"
            radius="md"
            aria-label="Toggle color scheme"
          >
            <IconBrandGithub stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </header>
  );
}
