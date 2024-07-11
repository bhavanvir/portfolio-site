<script context="module">
  import { dev } from "$app/environment";
</script>

<script>
  import { inject } from "@vercel/analytics";
  import "../app.css";

  inject({ mode: dev ? "development" : "production" });
</script>

<div class="app bg-primary-background">
  <main class="main">
    <slot />
  </main>
</div>
