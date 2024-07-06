<script>
  import { ChevronLeft, ChevronRight } from "svelte-lucide";
</script>

<div class="flex items-center justify-center py-4">
  <div class="flex justify-center space-x-2 w-full max-w-lg">
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

