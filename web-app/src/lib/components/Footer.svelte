<script>
  import LogoIcon from "$lib/assets/icons/LogoIcon.svg?raw";
</script>

<footer class="bg-secondary-background bottom-0">
  <div class="max-w-[100rem] mx-auto">
    <div>
      <a href="/" class="flex items-center py-4 px-2">
        <svg class="h-8 w-8 mr-2 filter-white">
          {@html LogoIcon}
        </svg>
        <span class="text-secondary-text font-uncut font-bold text-lg"
          >bhavanvir</span
        >
      </a>
    </div>

    <div class="flex-grow border-t-2 border-t-tertiary-background" />

    <p class="py-4 font-uncut font-bold text-secondary-text">
      bhavanvir.ca © 2023-2024
    </p>
  </div>
</footer>

<style>
  /* Filter colour found using: https://codepen.io/sosuke/pen/Pjoqqp*/
  .filter-white {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(322deg)
      brightness(101%) contrast(102%);
  }
</style>
