import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useHotkeys } from "@mantine/hooks";
import cx from "clsx";
import classes from "./ColorScheme.module.css";

export function ColorScheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () =>
    setColorScheme(computedColorScheme === "light" ? "dark" : "light");

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ActionIcon
      onClick={toggleColorScheme}
      variant="default"
      // Setting the size to "lg" has the icon 2px shorter than the search bar
      size="2.2em"
      radius="md"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
