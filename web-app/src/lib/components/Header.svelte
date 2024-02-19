<script lang="ts">
  import LogoIcon from "$lib/assets/icons/LogoIcon.svg?raw";
  import ArrowNarrowRightIcon from "$lib/assets/icons/ArrowNarrowRightIcon.svg?raw";

  let y = 0;
  let context = "Menu";

  function onClick() {
    const mobileMenu = document.querySelector(".mobile-menu");
    context = context === "Menu" ? "Close" : "Menu";

    mobileMenu?.classList.toggle("hidden");
  }

  function scrollToSection(event: Event) {
    event.preventDefault();

    const targetId = (event?.target as Element)
      ?.getAttribute("href")
      ?.substring(1);
    const targetElement = document.getElementById(targetId as string);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<nav
  class={y >= 100
    ? "sticky top-0 bg-secondary-background text-secondary-text transition-all ease-in delay-50"
    : "sticky top-0 transition-all ease-out delay-50"}
>
  <div class="max-w-[100rem] mx-auto">
    <div class="flex justify-between font-uncut">
      <div class="flex space-x-4">
        <!-- Logo -->
        <div>
          <a href="/" class="flex items-center py-4 px-2">
            <svg
              class={y >= 100
                ? "h-10 w-10 mr-2 filter-secondary-background transition-all ease-in delay-50"
                : "h-10 w-10 mr-2 transition-all ease-out delay-50"}
            >
              {@html LogoIcon}
            </svg>
            <span class="font-bold text-2xl">Bhavanvir</span>
          </a>
        </div>

        <!-- Primary navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="/" class="text-xl py-4 px-3 hover:underline decoration-2"
            >Contact
          </a>
        </div>
      </div>

      <!-- Secondary navigation -->
      <div class="hidden md:flex item-center space-x-1">
        <a
          href="#about"
          on:click={scrollToSection}
          class="text-xl py-5 px-3 hover:underline decoration-2">About</a
        >
        <a
          href="#work"
          on:click={scrollToSection}
          class="text-xl py-5 px-3 hover:underline decoration-2">Work</a
        >
        <a href="/" class="text-xl py-5 px-3 hover:underline decoration-2"
          >Experience</a
        >
      </div>

      <!-- Mobile button -->
      <div class="mobile-menu-button md:hidden flex items-center py-5 px-3">
        <!-- Use a button instead of a link to prevent going to the top of the page -->
        <button
          on:click={onClick}
          class="font-uncut text-xl hover:underline decoration-2"
          >{context}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state -->
  <div class="mobile-menu hidden md:hidden font-uncut text-md py-10 mx-3">
    <div class="flex-grow border-t-2" />

    <div class="flex items-center justify-between">
      <div>
        <a href="/" class="block text-xl py-2 hover:underline decoration-2"
          >Contact</a
        >
      </div>
      <div>
        <svg class="flex h-6 w-6">
          {@html ArrowNarrowRightIcon}
        </svg>
      </div>
    </div>

    <div class="flex-grow border-t-2" />

    <div class="flex items-center justify-between">
      <div>
        <a
          href="#about"
          on:click={scrollToSection}
          class="block text-xl py-2 hover:underline decoration-2">About</a
        >
      </div>
      <div>
        <svg class="flex h-6 w-6">
          {@html ArrowNarrowRightIcon}
        </svg>
      </div>
    </div>

    <div class="flex-grow border-t-2" />

    <div class="flex items-center justify-between">
      <div>
        <a
          href="#work"
          on:click={scrollToSection}
          class="block text-xl py-2 hover:underline decoration-2">Work</a
        >
      </div>
      <div>
        <svg class="flex h-6 w-6">
          {@html ArrowNarrowRightIcon}
        </svg>
      </div>
    </div>

    <div class="flex-grow border-t-2" />

    <div class="flex items-center justify-between">
      <div>
        <a href="/" class="block text-xl py-2 hover:underline decoration-2"
          >Experience</a
        >
      </div>
      <div>
        <svg class="flex h-6 w-6">
          {@html ArrowNarrowRightIcon}
        </svg>
      </div>
    </div>
    <div class="flex-grow border-t-2" />
  </div>
</nav>

<svelte:window bind:scrollY={y} />

<style>
  /* Filter colour found using: https://codepen.io/sosuke/pen/Pjoqqp*/
  .filter-secondary-background {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(322deg)
      brightness(101%) contrast(102%);
  }
</style>
