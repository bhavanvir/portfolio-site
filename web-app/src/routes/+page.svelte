<script>
  import { MapPin } from "svelte-lucide";
  import NavBar from "$lib/components/NavBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
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
  <div class="flex-1 flex items-center justify-center mx-auto max-w-4xl text-center">
    <div>
      <div class="flex items-center justify-center pb-4">
        <MapPin class="mr-2 text-primary-foreground" /> 
        <span class="text-lg">
          Victoria, British Columbia
        </span>
      </div>
        <h1 class="text-4xl">
          Software Engineer designing scalable and efficient 
          solutions to complex problems, with an emphasis on 
          human-centered design
        </h1>
      </div>
    </div>
  <Footer />
</main>

<style>
  :global(body) {
    /* Gradient from https://cssgradient.io/gradient-backgrounds/ */
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  }
</style>
