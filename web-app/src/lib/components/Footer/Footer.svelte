<script>
  import { ArrowUp } from "svelte-lucide";
</script>

<footer class="bg-secondary-background bottom-0">
  <div class="max-w-screen-2xl mx-auto px-2 py-4 flex justify-between">
    <div class="text-secondary-text text-xl">Bhavanvir Rai © 2023-2024</div>

    <div>
      <a
        href="/"
        on:click|preventDefault={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        class="flex items-center"
      >
        <p
          class="text-secondary-text bg-text-xl hover:underline decoration-2 flex space-x-1 items-center"
        >
          <span>Back To Top</span>
          <ArrowUp class="h-6 w-6" />
        </p>
      </a>
    </div>
  </div>
</footer>
