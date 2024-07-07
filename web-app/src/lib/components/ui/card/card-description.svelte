<script>
  import { cn } from "$lib/utils.js";
  let className = undefined;
  export { className as class };
</script>

<p class={cn("text-sm text-primary-foreground/50", className)} {...$$restProps}>
  <slot />
</p>
