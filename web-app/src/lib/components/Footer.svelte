<script>
  import { currentSlide, setCurrentSlide } from '$lib/store.js';
  import { ChevronLeft, ChevronRight } from "svelte-lucide";

  let slides = ["About", "Projects", "Contact"];
  function cycleSlides(direction) {
    let currentSlideIndex = slides.indexOf($currentSlide);
    let nextSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
    setCurrentSlide(slides[nextSlideIndex]);
  }
</script>

<div class="flex items-center justify-center py-4">
  <div class="flex justify-center space-x-2 w-full max-w-lg">
    <span
      class="rounded-full glass-effect p-2 flex items-center justify-center"
      on:click={() => cycleSlides(-1)}
    >
      <ChevronLeft class="h-6 w-6 text-primary-foreground" />
    </span>
    <span
      class="rounded-full glass-effect p-2 flex items-center justify-center"
      on:click={() => cycleSlides(1)}
    >
      <ChevronRight class="h-6 w-6 text-primary-foreground" />
    </span>
  </div>
</div>

