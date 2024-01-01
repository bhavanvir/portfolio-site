<script>
  import LionsBayImage from "$lib/assets/images/BCTravelPhotography-DSC_2210a.jpg";
  import LynnCanyonImage from "$lib/assets/images/BCTravelPhotography-DSC_3034-2a.jpg";
  import LighthouseParkImage from "$lib/assets/images/BCTravelPhotographyDSC_4419a.jpg";
  import BeaconHillParkImage from "$lib/assets/images/BCTravelPhotography-DSC_2503.jpg";
  import ArrowForwardIcon from "$lib/assets/icons/ArrowForwardIcon.svg?raw";
</script>

<div class="max-w-7xl mx-auto px-2 pt-2">
  <!-- Image gallery -->
  <div class="grid grid-cols-2 md:flex-row gap-3">
    <div class="grid gap-3 md:flex-col">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src={LionsBayImage}
          alt="lion's bay"
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src={LynnCanyonImage}
          alt="lynn canyon"
        />
      </div>
    </div>
    <div class="grid gap-3">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src={LighthouseParkImage}
          alt="lighthouse park"
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src={BeaconHillParkImage}
          alt="beacon hill park"
        />
      </div>
    </div>
  </div>

  <!-- Photo credits -->
  <div class="flex items-center">
    <svg class="h-6 w-6 mr-1">
      {@html ArrowForwardIcon}
    </svg>
    <span class="font-uncut text-sm">
      photos by
      <a href="https://emasuvajac.com/" class="underline decoration-2">
        ema suvajac
      </a>
    </span>
  </div>
</div>
