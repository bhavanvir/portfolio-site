<script>
  import ProjectCover1 from "$lib/assets/images/ProjectCover1.avif";
  import ProjectCover2 from "$lib/assets/images/ProjectCover2.avif";
  import ProjectCover3 from "$lib/assets/images/ProjectCover3.avif";
  import ProjectCover4 from "$lib/assets/images/ProjectCover4.avif";
</script>

<div id="work" class="max-w-[100rem] px-2 mx-auto">
  <div class="flex-grow border-t-2" />

  <div class="py-8">
    <h1 class="font-uncut text-4xl pb-4">work</h1>

    <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div>
        <a href="/">
          <img src={ProjectCover1} alt="Project Cover" />
        </a>

        <a
          href="/"
          class="font-uncut text-lg font-bold hover:underline decoration-2"
        >
          marketscrape
        </a>
        <p class="font-uncut text-lg">sept 19, 2022 - jul 3, 2023</p>
      </div>

      <div>
        <a href="/">
          <img src={ProjectCover2} alt="Project Cover" />
        </a>

        <a
          href="/"
          class="font-uncut text-lg font-bold hover:underline decoration-2"
          >qoaba</a
        >
        <p class="font-uncut text-lg">jul 19, 2023 - present</p>
      </div>

      <div>
        <a href="/">
          <img src={ProjectCover3} alt="Project Cover" />
        </a>

        <a
          href="/"
          class="font-uncut text-lg font-bold hover:underline decoration-2"
        >
          workout planner
        </a>
        <p class="font-uncut text-lg">oct 20, 2023 - dec 3, 2023</p>
      </div>

      <div>
        <a href="/">
          <img src={ProjectCover4} alt="Project Cover" />
        </a>

        <a
          href="/"
          class="font-uncut text-lg font-bold hover:underline decoration-2"
        >
          day trader
        </a>
        <p class="font-uncut text-lg">jan 16, 2024 - present</p>
      </div>
    </div>
  </div>
</div>
