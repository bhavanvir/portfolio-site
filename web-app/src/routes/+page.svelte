<script>
  import NavBar from "$lib/components/NavBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <title>Bhavanvir Rai — Software Engineer</title>
  <meta
    name="description"
    content="Bhavanvir Rai's personal website. Functions as a living portfolio."
  />
</svelte:head>

<main class="min-h-screen flex flex-col">
  <NavBar />
  <div class="flex-1 flex items-center justify-center max-w-4xl mx-auto">
    <h1 class="text-white text-4xl">
      Software Engineer based in British Columbia designing scalable and
      efficient solutions to complex problems, with an emphasis on
      human-centered design.
    </h1>
  </div>
  <Footer />
</main>

<style>
  :global(body) {
    /* Gradient from https://cssgradient.io/gradient-backgrounds/ */
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  }
</style>
