import { writable } from "svelte/store";

export let currentSlide = writable("About");

export function setCurrentSlide(slide) {
  currentSlide.set(slide);
}
