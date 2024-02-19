<script>
  import { onMount } from "svelte";

  let currentHours = 0;
  let currentMinutes = 0;
  let currentSeconds = 0;
  let timeOfDay = "AM";

  const updateTime = () => {
    const currentTime = new Date();
    currentHours = currentTime.getHours();
    currentMinutes = currentTime.getMinutes();
    currentSeconds = currentTime.getSeconds();

    if (Number(currentHours) > 12) {
      currentHours = currentHours - 12;
      timeOfDay = "pm";
    } else {
      timeOfDay = "am";
    }
  };

  // Update time on component mount
  onMount(() => {
    updateTime();
    // Update time every second
    setInterval(updateTime, 1000);
  });
</script>

<h1 class="font-uncut text-2xl mt-4">
  current time: {currentHours}:{currentMinutes}:{currentSeconds < 10
    ? `0${currentSeconds}`
    : currentSeconds}
  {timeOfDay}
</h1>
