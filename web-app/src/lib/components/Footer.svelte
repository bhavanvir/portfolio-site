<script lang="ts">
  import { currentSlide, setCurrentSlide } from "$lib/store.js";
  import { ChevronLeft, ChevronRight } from "svelte-lucide";

  let slides = ["About", "Projects", "Contact"];
  function cycleSlides(direction: number) {
    let currentSlideIndex = slides.indexOf($currentSlide);
    let nextSlideIndex =
      (currentSlideIndex + direction + slides.length) % slides.length;
    setCurrentSlide(slides[nextSlideIndex]);
  }
</script>

<nav class="flex items-center justify-center py-4 sticky bottom-0">
  <div class="flex justify-center space-x-2 w-full max-w-lg">
    <span
      class="rounded-full glass-effect p-2 flex items-center justify-center hover:bg-primary-foreground/50"
      on:click={() => cycleSlides(-1)}
      role="button"
      tabindex="0"
    >
      <ChevronLeft class="h-6 w-6 text-primary-foreground" />
    </span>
    <span
      class="rounded-full glass-effect p-2 flex items-center justify-center hover:bg-primary-foreground/50"
      on:click={() => cycleSlides(1)}
      role="button"
      tabindex="0"
    >
      <ChevronRight class="h-6 w-6 text-primary-foreground" />
    </span>
  </div>
</nav>
