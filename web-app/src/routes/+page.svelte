<script>
  import { currentSlide } from "$lib/store.js";

  import NavBar from "$lib/components/NavBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import About from "$lib/components/About.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import Projects from "$lib/components/Projects.svelte";
</script>

<svelte:head>
  <title>Bhavanvir Rai — Software Engineer</title>
  <meta
    name="description"
    content="Bhavanvir Rai's personal website. Functions as a living portfolio."
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</svelte:head>

<main class="min-h-screen flex flex-col px-8">
  <NavBar />
  <div class="flex-1 flex items-center justify-center mx-auto">
    {#if $currentSlide === "About"}
      <About />
    {:else if $currentSlide === "Contact"}
      <Contact />
    {:else if $currentSlide === "Projects"}
      <Projects />
    {/if}
  </div>
  <Footer />
</main>
