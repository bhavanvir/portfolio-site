<script>
  import { onMount } from "svelte";
  import {
    ArrowUpRight,
    ArrowRight,
    Bell,
    BellRing,
    BellOff,
  } from "svelte-lucide";

  let status = "";
  let currentMessage = "";

  const updateMessageAndColor = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    if (day === 0 || day === 6) {
      // Weekend
      currentMessage = "I'm unlikely to respond on weekends";
      status = "Offline";
    } else if (hour < 9 || hour >= 17) {
      // Weekdays after 5 PM or before 9 AM
      currentMessage = "I may be slower to respond outside of work hours";
      status = "Away";
    } else {
      // Weekdays between 9 AM and 5 PM
      currentMessage = "I should be able to respond promptly!";
      status = "Online";
    }
  };

  onMount(() => {
    updateMessageAndColor();

    const interval = setInterval(updateMessageAndColor, 60000);
    return () => clearInterval(interval);
  });
</script>

<div class="max-w-2xl">
  <div class="pb-4 flex justify-center items-center">
    {#if status === "Offline"}
      <BellOff class="mr-2" />
    {:else if status === "Away"}
      <BellRing class="mr-2" />
    {:else if status === "Online"}
      <Bell class="mr-2" />
    {/if}
    <span class="text-xl">{currentMessage}</span>
  </div>

  <h1 class="text-4xl text-center">
    Have a question, proposal, or just want to chat? Feel free to reach out to
    me at any of the platforms I'm active on
  </h1>

  <div class="flex pt-4 text-xl gap-2 space-x-4 justify-center">
    <span class="flex items-center justify-end hover:underline decoration-2">
      <a href="mailto:me@bhavanvir.ca">Email</a>
      <ArrowRight class="ml-2" />
    </span>

    <span class="flex items-center justify-end hover:underline decoration-2">
      <a href="https://www.linkedin.com/in/bhavanvir/" target="_blank"
        >LinkedIn</a
      >
      <ArrowUpRight class="ml-2" />
    </span>

    <span class="flex items-center justify-end hover:underline decoration-2">
      <a href="https://www.github.com/bhavanvir" target="_blank">GitHub</a>
      <ArrowUpRight class="ml-2" />
    </span>
  </div>
</div>
