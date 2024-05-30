<script context="module">
  import { dev } from "$app/environment";
</script>

<script>
  import { inject } from "@vercel/analytics";
  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import "../app.css";

  inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
  <link
    rel="preload"
    href="/fonts/UncutSans-Variable.ttf"
    as="font"
    type="font/ttf"
    crossorigin
  />
</svelte:head>

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
