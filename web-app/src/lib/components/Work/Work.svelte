<script lang="ts">
  import data from "$lib/components/Work/projects.json";

  const tagColors: Record<string, string> = {
    Python: "bg-emerald-100 text-emerald-800",
    Go: "bg-emerald-100 text-emerald-800",

    FastAPI: "bg-amber-100 text-amber-800",
    Gin: "bg-amber-100 text-amber-800",

    MongoDB: "bg-rose-100 text-rose-800",
    PostgreSQL: "bg-rose-100 text-rose-800",

    Bootstrap: "bg-violet-100 text-violet-800",
    TailwindCSS: "bg-violet-100 text-violet-800",
    Mantine: "bg-violet-100 text-violet-800",

    Streamlit: "bg-cyan-100 text-cyan-800",
    Django: "bg-cyan-100 text-cyan-800",
    React: "bg-cyan-100 text-cyan-800",
    "Next.js": "bg-cyan-100 text-cyan-800",
  };
</script>

<div id="work" class="max-w-[100rem] px-2 mx-auto">
  <div class="pt-8">
    <div class="flex justify-between items-end pb-4">
      <h1 class="font-uncut text-4xl">Work</h1>

      <a href="/">
        <h1 class="font-uncut text-xl underline decoration-2">View All</h1>
      </a>
    </div>

    <div class="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
      {#each data as project}
        <div class="border-2 p-6">
          <a
            href={project.github}
            target="_blank"
            class="font-uncut text-lg font-bold hover:underline decoration-2"
          >
            {project.title}
          </a>
          {#each project.tags ?? [] as tag}
            <span
              class={`inline-block text-xs font-medium font-uncut me-2 px-2.5 py-0.5 rounded-lg ${tagColors[tag]}`}
              >{tag}</span
            >
          {/each}

          <p class="font-uncut text-md text-slate-700">{project.date}</p>
          {#if project.description}
            <p class="font-uncut text-lg text-justify mt-4">
              {@html project.description}
            </p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
