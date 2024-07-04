<script>
  import { Button } from "$lib/components/ui/button";
</script>

<div class="w-full flex justify-center p-4">
  <div
    class="w-full max-w-lg p-2 flex justify-center space-x-4 items-center glass-effect rounded-full"
  >
    <Button class="rounded-full border-none h-6" variant="secondary"
      >About</Button
    >
    <Button class="rounded-full border-none h-6" variant="secondary"
      >Projects</Button
    >
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
