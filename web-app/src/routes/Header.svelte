<script>
  function onClick() {
    const mobileMenu = document.querySelector(".mobile-menu");

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
        <button on:click={onClick}>
          <svg
            class="h-6 w-6"
            fill="#000000"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 297 297"
            xml:space="preserve"
          >
            <path
              d="M280.214,39.211H16.786C7.531,39.211,0,46.742,0,55.997v24.335c0,9.256,7.531,16.787,16.786,16.787h263.428
				c9.255,0,16.786-7.531,16.786-16.787V55.997C297,46.742,289.469,39.211,280.214,39.211z"
            />
            <path
              d="M280.214,119.546H16.786C7.531,119.546,0,127.077,0,136.332v24.336c0,9.255,7.531,16.786,16.786,16.786h263.428
				c9.255,0,16.786-7.531,16.786-16.786v-24.336C297,127.077,289.469,119.546,280.214,119.546z"
            />
            <path
              d="M280.214,199.881H16.786C7.531,199.881,0,207.411,0,216.668v24.335c0,9.255,7.531,16.786,16.786,16.786h263.428
				c9.255,0,16.786-7.531,16.786-16.786v-24.335C297,207.411,289.469,199.881,280.214,199.881z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state -->
  <div class="mobile-menu hidden md:hidden font-uncut text-md">
    <a href="/" class="block py-2 px-3 hover:underline decoration-2">contact</a>
    <a href="/" class="block py-2 px-3 hover:underline decoration-2">about</a>
    <a href="/" class="block py-2 px-3 hover:underline decoration-2">work</a>
    <a href="/" class="block py-2 px-3 hover:underline decoration-2"
      >experience</a
    >
  </div>
</nav>
