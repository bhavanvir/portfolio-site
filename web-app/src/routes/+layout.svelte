<script>
  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import "../app.css";
</script>

<div class="app bg-primary-background">
  <Header />

  <main class="main">
    <slot />
  </main>

  <Footer />
</div>

<style lang="postcss">
  :global(body) {
    @apply bg-secondary-background;
  }
</style>
