<script>
  import { currentSlide, setCurrentSlide } from "$lib/store.js";
</script>

<div class="w-full flex justify-center p-4">
  <div
    class="w-full max-w-lg p-2 flex justify-center glass-effect rounded-full"
  >
    <span
      class="rounded-full border-none h-6 p-2 flex items-center text-lg"
      class:active={$currentSlide === "About"}
      on:click={() => setCurrentSlide("About")}
      role="button"
      tabindex="0"
    >
      About
    </span>
    <span
      class="rounded-full border-none h-6 p-2 flex items-center text-lg"
      class:active={$currentSlide === "Projects"}
      on:click={() => setCurrentSlide("Projects")}
      role="button"
      tabindex="0"
    >
      Projects
    </span>
    <span
      class="rounded-full border-none h-6 p-2 flex items-center text-lg"
      class:active={$currentSlide === "Contact"}
      on:click={() => setCurrentSlide("Contact")}
      role="button"
      tabindex="0"
    >
      Contact
    </span>
  </div>
</div>

<style>
  .active {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
</style>
