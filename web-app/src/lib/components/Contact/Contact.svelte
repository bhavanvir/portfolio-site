<script lang="ts">
  import { onMount } from "svelte";
  import { Linkedin, Facebook, Github, Mail } from "svelte-lucide";

  let currentHours = 0;
  let currentMinutes = 0;
  let currentSeconds = 0;
  let timeOfDay = "A.M.";
  let statusColour = "bg-red-500";

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

    updateStatusColour(currentTime);
  };

  const updateStatusColour = (currentTime: Date) => {
    // 0 (Sunday) to 6 (Saturday)
    const dayOfWeek = currentTime.getDay();
    const hours = currentTime.getHours();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      // Weekend
      statusColour = "bg-yellow-500";
    } else if (hours >= 9 && hours < 17) {
      // Weekday 9 AM to 5 PM
      statusColour = "bg-green-500";
    } else {
      // Outside of working hours
      statusColour = "bg-red-500";
    }
  };

  // Update time on component mount
  onMount(() => {
    updateTime();

    // Update time every second
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });
</script>

<div id="contact" class="max-w-[100rem] px-2 mx-auto pb-8">
  <div class="pt-8">
    <div class="flex justify-between items-end pb-4">
      <div>
        <h1 class="font-uncut text-4xl">Contact</h1>
      </div>

      <div class="border-2 relative inline-flex items-center p-2">
        <h2 class="font-uncut text-lg">
          {currentHours}:{currentMinutes < 10
            ? `0${currentMinutes}`
            : currentMinutes}:{currentSeconds < 10
            ? `0${currentSeconds}`
            : currentSeconds}
          {timeOfDay} GMT-8
        </h2>
        <span
          class={`absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white ${statusColour} border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900`}
        >
        </span>
      </div>
    </div>

    <div class="md:grid grid-cols-2">
      <p class="font-uncut text-xl">
        Have a question, proposal, or just want to chat? Feel free to reach out
        to me at any of the platforms I'm active on.
      </p>

      <div
        class="pt-4 flex justify-start space-x-1 sm:grid grid-flow-row gap-1 sm:pt-0 sm:space-x-0"
      >
        <p>
          <a
            href="https://www.linkedin.com/in/bhavanvir/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-1"
          >
            <Linkedin />
            <div class="hidden md:block">
              <span class="font-uncut text-xl">bhavanvir</span>
            </div>
          </a>
        </p>

        <p class="relative">
          <a
            href="https://www.facebook.com/bhavanvirs"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-1"
          >
            <Facebook />
            <div class="hidden md:block">
              <span class="font-uncut text-xl">bhavanvirs</span>
            </div>
          </a>
        </p>

        <p>
          <a
            href="https://www.github.com/bhavanvir"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-1"
          >
            <Github />
            <div class="hidden md:block">
              <span class="font-uncut text-xl">bhavanvir</span>
            </div>
          </a>
        </p>

        <p>
          <a
            href="mailto:me@bhavanvir.ca"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-1"
          >
            <Mail />
            <div class="hidden md:block">
              <span class="font-uncut text-xl">me@bhavanvir.ca</span>
            </div>
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
