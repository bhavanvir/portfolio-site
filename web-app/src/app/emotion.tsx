"use client";

import { CacheProvider } from "@emotion/react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  useEmotionCache,
  rem,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache();
  cache.compat = true;

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
}
