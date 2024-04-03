<script lang="ts">
  import { onMount } from "svelte";
  import BellRingingIcon from "$lib/assets/icons/BellRingingIcon.svg?raw";

  let currentHours = 0;
  let currentMinutes = 0;
  let currentSeconds = 0;
  let timeOfDay = "A.M.";
  let showAlert = false;

  const updateTime = () => {
    const currentTime = new Date();
    currentHours = currentTime.getHours();
    currentMinutes = currentTime.getMinutes();
    currentSeconds = currentTime.getSeconds();

    if (currentHours >= 12) {
      timeOfDay = "P.M.";
      if (currentHours > 12) {
        currentHours = currentHours - 12;
      }
    } else {
      timeOfDay = "A.M.";
    }
  };

  // Update time on component mount
  onMount(() => {
    updateTime();

    // Update time every second
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });

  let name = "";
  let email = "";
  let message = "";

  function areAllFieldsFilled(name: string, email: string, message: string) {
    return !name || !email || !message;
  }

  $: isDisabled = areAllFieldsFilled(name, email, message);

  function sendEmail(name: string, email: string, message: string) {
    // Simulate a successful submission
    showAlert = true;

    // Clear form fields after a successful submission
    name = "";
    email = "";
    message = "";

    // Hide the alert after 3 seconds
    setTimeout(() => {
      showAlert = false;
    }, 3000);
  }
</script>

<div id="contact" class="max-w-[100rem] px-2 mx-auto">
  {#if showAlert}
    <div
      class="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center h-screen"
    >
      <div class="bg-green-100 text-green-800 p-4 border-2">
        <div class="flex items-center">
          <svg class="w-6 h-6 mr-2">
            {@html BellRingingIcon}
          </svg>
          <p class="font-uncut text-xl mb-2">Notification</p>
        </div>
        <p class="font-uncut text-lg">
          Your message has been sent, I'll get back to you as soon as I can.
        </p>
      </div>
    </div>
  {/if}

  <div class="pt-8">
    <div class="flex justify-between items-end pb-4">
      <div>
        <h1 class="font-uncut text-4xl">Contact</h1>
      </div>

      <div>
        <h2 class="font-uncut text-lg">
          {currentHours}:{currentMinutes < 10
            ? `0${currentMinutes}`
            : currentMinutes}:{currentSeconds < 10
            ? `0${currentSeconds}`
            : currentSeconds}
          {timeOfDay} GMT-8
        </h2>
      </div>
    </div>

    <p class="font-uncut text-xl">
      Have a question, proposal, or just want to chat? Feel free to reach out to
      me.
    </p>
    <form class="py-4" name="msgForm">
      <div class="grid grid-cols-2 grid-rows-5 gap-6">
        <div class="row-span-2">
          <input
            required
            type="name"
            placeholder="Elon Musk"
            class="w-full h-full p-2 border-2"
            bind:value={name}
          />
        </div>
        <div class="row-span-2">
          <input
            required
            type="email"
            placeholder="info@spacex.com"
            class="w-full h-full p-2 border-2"
            bind:value={email}
          />
        </div>
        <div class="col-span-2 row-span-5">
          <textarea
            required
            placeholder="We need your help with the Mars mission, are you in? No one else knows how to fly a rocket, so..."
            rows="5"
            class="w-full p-2 border-2 resize-none"
            bind:value={message}
          />
        </div>
      </div>
    </form>

    <div class="flex justify-end pb-4">
      <button
        type="submit"
        class="font-uncut text-lg px-4 py-2 border-2"
        disabled={areAllFieldsFilled(name, email, message)}
        class:cursor-not-allowed={isDisabled}
        class:opacity-25={isDisabled}
        on:click={() => sendEmail(name, email, message)}
      >
        Send
      </button>
    </div>
  </div>
</div>
