<script lang="ts">
  import ProjectCover1 from "$lib/assets/images/ProjectCover1.avif";
  import ProjectCover2 from "$lib/assets/images/ProjectCover2.avif";
  import ProjectCover3 from "$lib/assets/images/ProjectCover3.avif";
  import ProjectCover4 from "$lib/assets/images/ProjectCover4.avif";

  import data from "$lib/components/Work/projects.json";

  const projectCovers = [
    ProjectCover1,
    ProjectCover2,
    ProjectCover3,
    ProjectCover4,
  ];
</script>

<div id="work" class="max-w-[100rem] px-2 mx-auto">
  <div class="flex-grow border-t-2" />

  <div class="py-8">
    <div class="flex justify-between items-end pb-4">
      <h1 class="font-uncut text-4xl">Work</h1>

      <a href="/">
        <h1 class="font-uncut text-xl underline decoration-2">View All</h1>
      </a>
    </div>

    <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {#each data as project}
        <div>
          <a href="/">
            <img src={projectCovers[project.id]} alt="Project Cover" />
          </a>

          <a
            href="/"
            class="font-uncut text-lg font-bold hover:underline decoration-2"
          >
            {project.title}
          </a>
          {#each project.tags ?? [] as tag}
            <span
              class="bg-blue-100 text-blue-800 text-xs font-medium font-uncut me-2 px-2.5 py-0.5 rounded"
              >{tag}</span
            >
          {/each}
          <p class="font-uncut text-md text-slate-700">{project.date}</p>
          {#if project.description}
            <p class="font-uncut text-lg text-justify mt-4">
              {project.description}
            </p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
