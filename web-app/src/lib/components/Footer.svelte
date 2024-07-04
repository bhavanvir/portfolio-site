<script>
  import { ChevronLeft, ChevronRight } from "svelte-lucide";
</script>

<div class="flex items-center justify-center py-4">
  <div class="flex justify-between w-full max-w-lg">
    <span
      class="rounded-full glass-effect p-2 flex items-center justify-center"
    >
      <ChevronLeft class="h-6 w-6 text-primary-foreground" />
    </span>
    <span
      class="rounded-full glass-effect p-2 flex items-center justify-center"
    >
      <ChevronRight class="h-6 w-6 text-primary-foreground" />
    </span>
  </div>
</div>

<style lang="css">
  .glass-effect {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
</style>
