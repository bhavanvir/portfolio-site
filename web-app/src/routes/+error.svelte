<script>
  import { page } from "$app/stores";
</script>

<div class="max-w-screen-2xl px-2 mx-auto">
  <div class="hero-spacing flex items-center">
    <p class="font-uncut text-4xl sm:text-6xl">
      {$page.status}
      {$page?.error?.message} — Looks like you've come across some uncharted territory,
      here take these 🧭🗺️
    </p>
  </div>
</div>

<style>
  :root {
    --header-height: 72px;
  }

  .hero-spacing {
    height: calc(100vh - 1.75 * var(--header-height));
  }
</style>
