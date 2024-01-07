<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";
</script>

<div class="app">
  <Header />

  <main class="main">
    <slot />
  </main>

  <Footer />
</div>

<style lang="postcss">
  :global(body) {
    @apply bg-primary-background;
  }
</style>
