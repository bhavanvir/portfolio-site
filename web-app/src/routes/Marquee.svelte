<script>
  export let text = "";
  export let additionalClasses = "";
</script>

<div class="marquee-container marquee {additionalClasses}">
  <span>{text}</span>
</div>

<style>
  .marquee-container {
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }

  .marquee {
    white-space: nowrap;
    mask-image: linear-gradient(
      var(--mask-direction, to right),
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 20%,
      hsl(0 0% 0% / 1) 80%,
      hsl(0, 0%, 0%, 0)
    );
  }

  .marquee span {
    display: inline-block;
    animation: marqueeAnimation 30s linear infinite;
  }

  .marquee:hover span {
    animation-play-state: paused;
  }

  @keyframes marqueeAnimation {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(-100%);
    }
  }
</style>
