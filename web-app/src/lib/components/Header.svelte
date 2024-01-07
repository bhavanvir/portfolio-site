<script>
  import LogoIcon from "$lib/assets/icons/LogoIcon.svg?raw";
  import ArrowNarrowRightIcon from "$lib/assets/icons/ArrowNarrowRightIcon.svg?raw";

  let context = "menu";
  function onClick() {
    const mobileMenu = document.querySelector(".mobile-menu");
    context = context === "menu" ? "close" : "menu";

    mobileMenu?.classList.toggle("hidden");
  }
</script>

<nav class="sticky top-0">
  <div class="max-w-[100rem] mx-auto">
    <div class="flex justify-between font-uncut">
      <div class="flex space-x-4">
        <!-- Logo -->
        <div>
          <a href="/" class="flex items-center py-4 px-2">
            <svg class="h-10 w-10 mr-2">
              {@html LogoIcon}
            </svg>
            <span class="font-bold text-2xl">bhavanvir</span>
          </a>
        </div>

        <!-- Primary navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="/" class="text-lg py-4 px-3 hover:underline decoration-2"
            >contact
          </a>
        </div>
      </div>

      <!-- Secondary navigation -->
      <div class="hidden md:flex item-center space-x-1">
        <a href="/" class="text-lg py-5 px-3 hover:underline decoration-2"
          >about</a
        >
        <a href="/" class="text-lg py-5 px-3 hover:underline decoration-2"
          >work</a
        >
        <a href="/" class="text-lg py-5 px-3 hover:underline decoration-2"
          >experience</a
        >
      </div>

      <!-- Mobile button -->
      <div class="mobile-menu-button md:hidden flex items-center py-5 px-3">
        <a
          href="/"
          on:click={onClick}
          class="font-uncut text-lg hover:underline decoration-2">{context}</a
        >
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state -->
  <div class="mobile-menu hidden md:hidden font-uncut text-md py-10 mx-3">
    <div class="flex-grow border-t-2" />

    <div class="flex items-center justify-between">
      <div>
        <a href="/" class="block py-2 hover:underline decoration-2">contact</a>
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
        <a href="/" class="block py-2 hover:underline decoration-2">about</a>
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
        <a href="/" class="block py-2 hover:underline decoration-2">work</a>
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
        <a href="/" class="block py-2 hover:underline decoration-2"
          >experience</a
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
