<script>
  import { currentSlide } from "$lib/store.js";

  import NavBar from "$lib/components/NavBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import About from "$lib/components/About.svelte";
</script>

<svelte:head>
  <title>Bhavanvir Rai — Software Engineer</title>
  <meta
    name="description"
    content="Bhavanvir Rai's personal website. Functions as a living portfolio."
  />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</svelte:head>

<main class="min-h-screen flex flex-col">
  <NavBar />
  <div class="flex-1 flex items-center justify-center mx-auto">
    {#if $currentSlide === "About"}
      <About />
    {/if}
  </div>
  <Footer />
</main>

<style>
  :global(body) {
    /* Gradient from https://cssgradient.io/gradient-backgrounds/ */
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  }
</style>
