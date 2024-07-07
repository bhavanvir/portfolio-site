<script>
  import { cn } from "$lib/utils.js";
  let className = undefined;
  export { className as class };
</script>

<div
  class={cn("rounded-lg border glass-effect shadow-sm", className)}
  {...$$restProps}
>
  <slot />
</div>
