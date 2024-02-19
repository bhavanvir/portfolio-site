<script>
  import { page } from "$app/stores";
</script>

<div class="max-w-[100rem] px-2 mx-auto">
  <div class="hero-spacing flex items-center">
    <p class="font-uncut text-4xl sm:text-6xl">
      {$page.status}
      {$page?.error?.message} — Looks like you've come across some uncharted territory
      🧍🗺️
    </p>
  </div>
</div>

<style>
  :root {
    --header-height: 72px;
  }

  .hero-spacing {
    height: calc(100vh - var(--header-height));
  }
</style>
