<script>
  import Marquee from "./Marquee.svelte";
</script>

<div class="mx-auto">
  <div class="hero-spacing flex items-center justify-center">
    <Marquee
      additionalClasses="font-uncut text-4xl font-bold h-12"
      text="bhavanvir rai is a software engineer based in the pacific northwest, that designs scalable and efficient solutions to complex problems."
    />
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
