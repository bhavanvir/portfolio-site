<script>
  import { MoveUp } from "svelte-lucide";
</script>

<footer class="bg-secondary-background bottom-0">
  <div class="max-w-[100rem] mx-auto px-2 py-4 flex justify-between">
    <div class="text-secondary-text font-uncut text-xl">
      Bhavanvir Rai © 2023-2024
    </div>

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
          class="text-secondary-text bg-font-uncut text-xl hover:underline decoration-2 flex space-x-1 items-center"
        >
          Back To Top
          <MoveUp class="h-6 w-6" />
        </p>
      </a>
    </div>
  </div>
</footer>
