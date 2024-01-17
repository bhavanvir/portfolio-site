<script>
  import LogoIcon from "$lib/assets/icons/LogoIcon.svg?raw";
  import ArrowNarrowUp from "$lib/assets/icons/ArrowNarrowUp.svg?raw";
</script>

<footer class="bg-secondary-background bottom-0">
  <div
    class="max-w-[100rem] mx-auto px-2 text-secondary-text font-uncut text-lg"
  >
    <a href="/" class="flex items-center py-4 px-2">
      <svg class="h-8 w-8 mr-2 ml-[-0.5rem] filter-white">
        {@html LogoIcon}
      </svg>
      <span class="font-bold text-xl">bhavanvir</span>
    </a>

    <div class="flex-grow border-t-2 border-t-tertiary-background" />

    <div class="grid lg:grid-cols-[40%_60%] grid-cols-[60%_40%]">
      <div class="py-4">
        <p class="font-bold">bhavanvir.ca © 2023-2024</p>
        <a href="/" class="block hover:underline decoration-2">terms of use</a>
        <a href="/" class="block hover:underline decoration-2">privacy policy</a
        >
        <a href="/" class="block hover:underline decoration-2"
          >brand guidelines</a
        >
      </div>

      <div class="py-4 flex flex-col">
        <div class="lg:flex lg:justify-start lg:space-x-4">
          <a href="/" class="block lg:inline-block hover:underline decoration-2"
            >linkedin</a
          >
          <a href="/" class="block lg:inline-block hover:underline decoration-2"
            >github</a
          >
        </div>

        <div class="filter-white lg:mt-[3.5rem] mt-[1.75rem]">
          <a
            href="/"
            class="flex items-center filter-white hover:underline decoration-2"
          >
            back to top
            <svg class="h-6 w-6 mr-2">
              {@html ArrowNarrowUp}
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  /* Filter colour found using: https://codepen.io/sosuke/pen/Pjoqqp*/
  .filter-white {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(322deg)
      brightness(101%) contrast(102%);
  }
</style>
