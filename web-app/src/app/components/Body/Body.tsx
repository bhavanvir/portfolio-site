"use client";

import { Hero } from "./Hero/Hero";
import { Introduction } from "./Introduction/Introduction";
import { GetInTouchSimple } from "./Contact/Contact";

export function BodyGrid() {
  return (
    <>
      <Hero />
      <Introduction />
      <GetInTouchSimple />
    </>
  );
}
