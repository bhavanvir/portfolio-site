<script>
  import Header from "../lib/components/Header.svelte";
  import "../app.css";
</script>

<div class="app">
  <Header />

  <main class="main">
    <slot />
  </main>
</div>

<style lang="postcss">
  :global(body) {
    @apply bg-primary-background;
  }
</style>
