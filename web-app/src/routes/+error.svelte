<script>
  import { ArrowLeft } from "svelte-lucide";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
</script>

<div class="min-h-screen flex flex-col px-8">
  <div class="flex-1 flex items-center justify-center mx-auto">
    <div class="max-w-4xl">
      <h1 class="text-2xl md:text-4xl text-center">
        {$page.status}
        {$page?.error?.message}
      </h1>
      <div class="flex items-center justify-center pt-4">
        <span
          class="rounded-full glass-effect p-2 flex items-center justify-center hover:bg-primary-foreground/50"
          on:click={() => goto("/")}
          role="button"
          tabindex="0"
        >
          <ArrowLeft class="mr-2" />
          Go Back Home</span
        >
      </div>
    </div>
  </div>
</div>
