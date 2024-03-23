<script>
  import Hero from "$lib/components/Hero/Hero.svelte";
  import About from "$lib/components/About/About.svelte";
  import Work from "$lib/components/Work/Work.svelte";
  import Contact from "$lib/components/Contact/Contact.svelte";
</script>

<svelte:head>
  <link
    rel="preload"
    href="../../static/fonts/UncutSans-Variable.ttf"
    as="font"
    type="font/ttf"
  />
  <title>Bhavanvir Rai — Software Engineer</title>
  <meta
    name="description"
    content="Bhavanvir Rai's personal website. Functions as a living portfolio."
  />
</svelte:head>

<main>
  <Hero />
  <About />
  <Work />
  <Contact />
</main>
