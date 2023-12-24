<script>
  let context = "menu";
  function onClick() {
    const mobileMenu = document.querySelector(".mobile-menu");
    context = context === "menu" ? "close" : "menu";

    mobileMenu?.classList.toggle("hidden");
  }
</script>

<nav>
  <div class="px-3 mx-auto">
    <div class="flex justify-between font-uncut">
      <div class="flex space-x-4">
        <!-- Logo -->
        <div>
          <a href="/" class="flex items-center py-4 px-2">
            <svg
              class="h-10 w-10 mr-2"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.000488281H48.5597C75.3784 0.000488281 97.1193 21.7414 97.1193 48.5602C97.1193 75.3789 75.3784 97.1198 48.5597 97.1198H0V0.000488281Z"
                fill="black"
              />
              <path
                d="M0 155.556C0 126.464 23.5833 102.881 52.6749 102.881H97.1193V200H0V155.556Z"
                fill="black"
              />
              <path
                d="M102.881 151.441C102.881 124.622 124.622 102.881 151.44 102.881H200V200H151.44C124.622 200 102.881 178.26 102.881 151.441Z"
                fill="black"
              />
              <path
                d="M102.881 0.000488281H200V44.445C200 73.5365 176.417 97.1198 147.325 97.1198H102.881V0.000488281Z"
                fill="black"
              />
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
  <div class="mobile-menu hidden md:hidden font-uncut text-md py-10">
    <div class="flex-grow border-t-2 mx-3" />
    <a href="/" class="block py-2 px-3 hover:underline decoration-2">contact</a>
    <div class="flex-grow border-t-2 mx-3" />
    <a href="/" class="block py-2 px-3 hover:underline decoration-2">about</a>
    <div class="flex-grow border-t-2 mx-3" />
    <a href="/" class="block py-2 px-3 hover:underline decoration-2">work</a>
    <div class="flex-grow border-t-2 mx-3" />
    <a href="/" class="block py-2 px-3 hover:underline decoration-2"
      >experience</a
    >
    <div class="flex-grow border-t-2 mx-3" />
  </div>
</nav>

<style>
</style>
