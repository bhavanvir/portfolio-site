<script>
  import { currentSlide, setCurrentSlide } from "$lib/store.js";
</script>

<nav class="w-full flex justify-center p-4 sticky top-0 z-10">
  <div
    class="w-full max-w-lg p-2 flex justify-center glass-effect rounded-full text-md md:text-lg"
  >
    <span
      class={`rounded-full border-none h-6 p-2 flex items-center ${
        $currentSlide === "About"
          ? "text-primary-foreground"
          : "text-primary-foreground/50"
      }`}
      on:click={() => setCurrentSlide("About")}
      role="button"
      tabindex="0"
    >
      About
    </span>
    <span
      class={`rounded-full border-none h-6 p-2 flex items-center ${
        $currentSlide === "Projects"
          ? "text-primary-foreground"
          : "text-primary-foreground/50"
      }`}
      on:click={() => setCurrentSlide("Projects")}
      role="button"
      tabindex="0"
    >
      Projects
    </span>
    <span
      class={`rounded-full border-none h-6 p-2 flex items-center ${
        $currentSlide === "Contact"
          ? "text-primary-foreground"
          : "text-primary-foreground/50"
      }`}
      on:click={() => setCurrentSlide("Contact")}
      role="button"
      tabindex="0"
    >
      Contact
    </span>
  </div>
</nav>
