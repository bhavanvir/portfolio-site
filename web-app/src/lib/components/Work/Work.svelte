<script lang="ts">
  import data from "$lib/components/Work/projects.json";
  import { Star } from "svelte-lucide";

  const tagColors: Record<string, string> = {
    Completed: "bg-green-100 text-green-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    "On Hold": "bg-red-100 text-red-800",
  };
</script>

<div id="work" class="max-w-screen-2xl px-2 mx-auto">
  <div class="pt-8">
    <div class="flex justify-between items-end pb-4">
      <h1 class="text-4xl">Work</h1>
    </div>

    <div class="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
      {#each data as project}
        <div class="border-2 p-6">
          <div class="flex justify-between items-center">
            <div class="flex justify-start space-x-1 items-center">
              <a
                href={project.github}
                target="_blank"
                class="text-lg font-bold hover:underline decoration-2"
              >
                {project.title}
              </a>
              {#each project.tags ?? [] as tag}
                <span
                  class={`inline-block text-xs font-medium me-2 px-2.5 py-0.5 border-2 ${tagColors[tag]}`}
                  >{tag}</span
                >
              {/each}
            </div>

            <span class="flex items-center">
              <Star class="inline-block mr-1 fill-yellow-500 h-4 w-4" />
              {project.stars}
            </span>
          </div>

          <p class="text-md text-slate-700">{project.date}</p>
          {#if project.description}
            <p class="text-lg text-justify mt-4">
              {@html project.description}
            </p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
