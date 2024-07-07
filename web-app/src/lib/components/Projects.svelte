<script>
  import { ArrowUpRight } from "svelte-lucide";
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge/index.js";

  let projects = [
    {
      id: 0,
      title: "Marketscrape",
      date: "Sept. 2022 — Jul. 3 2023",
      github: "https://github.com/orgs/Marketscrape/repositories",
      description:
        "A web application that analyzes Facebook Marketplace listings to provide insights on the best deals, allowing for significant leverage in bargaining. A GRU-based RNN for price prediction and a SVM for brand name inference was trained on the <a href='https://www.kaggle.com/datasets/rohitamalnerkar/mercari-dataset' target='_blank' class='underline decoration-2'>Mercari</a> data set, and a web scraper was used to collect the Facebook Marketplace data.",
      tag: "Completed",
    },
    {
      id: 2,
      title: "Workout Planner",
      date: "Oct. 20, 2023 — Dec. 3, 2023",
      github: "https://github.com/bhavanvir/workout-planner",
      description:
        "A web-based constraint satisfaction problem that generates a personalized workout schedule based on selected muscle groups, and utilizes a heuristic that optimizes based on maximal muscle recruitment. Each workout is accompanied by the exercise name, target muscles, and mechanics.",
      tag: "Completed",
    },
    {
      id: 3,
      title: "Nightrader",
      date: "Jan. 16, 2024 — Apr. 12, 2024",
      github: "https://github.com/bhavanvir/day-trader",
      description:
        "A microservice based stock trading platform that allows users to buy and sell stocks in real-time by setting either market or limit orders, as well as manage their portfolio. A matching engine using a Pro-Rata algorithm is used to match buy and sell orders, and a RESTful API is used to communicate with the front-end, using minted session tokens for authentication.",
      tag: "Completed",
    },
  ];
</script>

<div class="grid gap-4 md:grid-cols-2">
  {#each projects as project}
    <Card.Root>
      <Card.Header>
        <Card.Title class="flex justify-between items-center">
          <div class="flex items-center">
            <a
              href={project.github}
              target="_blank"
              class="hover:underline decoration-2 text-xl md:text-2xl"
              >{project.title}</a
            >
            <ArrowUpRight class="ml-2" />
          </div>

          {#if project.tag === "Completed"}
            <Badge
              variant="outline"
              class="bg-green-100 text-green-800 border-green-800"
              >{project.tag}</Badge
            >
          {/if}
        </Card.Title>
        <Card.Description class="text-md md:text-lg"
          >{project.date}</Card.Description
        >
      </Card.Header>
      <Card.Content class="text-lg md:text-xl">
        {@html project.description}
      </Card.Content>
    </Card.Root>
  {/each}
</div>
