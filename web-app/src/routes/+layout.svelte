<script>
  import Header from "./Header.svelte";
  import Hero from "./Hero.svelte";
  import "../app.css";
</script>

<div class="app">
  <Header />
  <Hero />

  <main class="main">
    <slot />
  </main>
</div>
