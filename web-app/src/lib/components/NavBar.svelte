<script>
  let currentSlide = "About";

  function changeSlide(slide) {
    currentSlide = slide;
  }
</script>

<div class="w-full flex justify-center p-4">
  <div class="w-full max-w-lg p-2 flex justify-center glass-effect rounded-full">
    <span
      class="rounded-full border-none h-6 p-2 flex items-center text-lg cursor-pointer"
      class:active={currentSlide === "About"}
      on:click={() => changeSlide("About")}
    >
      About
    </span>
    <span
      class="rounded-full border-none h-6 p-2 flex items-center text-lg cursor-pointer"
      class:active={currentSlide === "Projects"}
      on:click={() => changeSlide("Projects")}
    >
      Projects
    </span>
    <span
      class="rounded-full border-none h-6 p-2 flex items-center text-lg cursor-pointer"
      class:active={currentSlide === "Contact"}
      on:click={() => changeSlide("Contact")}
    >
      Contact
    </span>
  </div>
</div>

<style>
  .active {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
</style>

