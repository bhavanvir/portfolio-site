<script>
  import ArrowNarrowUp from "$lib/assets/icons/ArrowNarrowUp.svg?raw";
</script>

<footer class="bg-secondary-background bottom-0">
  <div class="max-w-[100rem] mx-auto px-2 py-4 flex justify-between">
    <div class="text-secondary-text font-uncut text-xl">
      Bhavanvir Rai © 2023-2024
    </div>

    <div>
      <a
        href="/"
        on:click|preventDefault={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        class="flex items-center"
      >
        <p
          class="text-secondary-text bg-font-uncut text-xl hover:underline decoration-2"
        >
          Back To Top
        </p>
        <svg class="h-6 w-6 filter-secondary-background">
          {@html ArrowNarrowUp}
        </svg>
      </a>
    </div>
  </div>
</footer>

<style>
  .filter-secondary-background {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(322deg)
      brightness(101%) contrast(102%);
  }
</style>
