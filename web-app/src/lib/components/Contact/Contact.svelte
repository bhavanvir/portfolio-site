<script>
  import { onMount } from "svelte";

  let currentHours = 0;
  let currentMinutes = 0;
  let currentSeconds = 0;
  let timeOfDay = "A.M.";

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
</script>

<div id="contact" class="max-w-[100rem] px-2 mx-auto">
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
  </div>
</div>
