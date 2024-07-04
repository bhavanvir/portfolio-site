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

<main class="grid grid-flow-row">
  <NavBar />
  <div class="">
    <h1>Yo</h1>
  </div>
  <Footer />
</main>

<style>
  :global(body) {
    /* Gradient from https://cssgradient.io/gradient-backgrounds/ */
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
    height: 100vh;
  }
</style>
