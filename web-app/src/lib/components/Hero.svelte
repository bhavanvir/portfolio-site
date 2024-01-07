<script>
  import ArrowForwardIcon from "$lib/assets/icons/ArrowForwardIcon.svg?raw";
</script>

<div class="max-w-[100rem] px-2 mx-auto">
  <div
    class="font-uncut text-4xl sm:text-6xl hero-spacing flex items-center justify-center"
  >
    bhavanvir is a software engineer based in british columbia, that designs
    scalable and efficient solutions to complex problems, with an emphasis on
    human-centered design.
  </div>

  <div class="flex items-center pb-12">
    <svg class="h-6 w-6 mr-1">
      {@html ArrowForwardIcon}
    </svg>
    <span class="font-uncut text-md">
      photos by
      <a
        href="https://emasuvajac.com/britishcolumbiatravelphotography/"
        class="underline decoration-2"
      >
        ema suvajac
      </a>
      of british columbia
    </span>
  </div>
</div>

<style>
  :root {
    --header-height: 72px;
  }

  .hero-spacing {
    height: calc(100vh - 2 * var(--header-height));
  }
</style>
