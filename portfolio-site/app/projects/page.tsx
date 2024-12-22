import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { GitHubLogoIcon, CalendarIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Projects",
  description: "Look at some of my projects.",
};

export default function Projects() {
  const personalProjects = [
    {
      id: 0,
      title: "Marketscrape",
      date: "Sept. 2022 — Jul. 3 2023",
      github: "https://github.com/orgs/Marketscrape/repositories",
      description:
        "A web application that analyzes Facebook Marketplace listings to provide insights on the best deals, allowing for significant leverage in bargaining. A GRU-based RNN for price prediction and a SVM for brand name inference was trained on the <a href='https://www.kaggle.com/datasets/rohitamalnerkar/mercari-dataset' target='_blank' class='underline decoration-2'>Mercari</a> data set, and a web scraper was used to collect the Facebook Marketplace data.",
      tags: ["Python", "TensorFlow", "Django"],
    },
    {
      id: 2,
      title: "Workout Planner",
      date: "Oct. 20, 2023 — Dec. 3, 2023",
      github: "https://github.com/bhavanvir/workout-planner",
      description:
        "A web-based constraint satisfaction problem that generates a personalized workout schedule based on selected muscle groups, and utilizes a heuristic that optimizes based on maximal muscle recruitment. Each workout is accompanied by the exercise name, target muscles, and mechanics.",
      tags: ["Python", "OR-Tools"],
    },
    {
      id: 3,
      title: "Nightrader",
      date: "Jan. 16, 2024 — Apr. 12, 2024",
      github: "https://github.com/bhavanvir/day-trader",
      description:
        "A microservice based stock trading platform that allows users to buy and sell stocks in real-time by setting either market or limit orders, as well as manage their portfolio. A matching engine using a Pro-Rata algorithm is used to match buy and sell orders, and a RESTful API is used to communicate with the front-end, using minted session tokens for authentication.",
      tags: ["Go", "PostgreSQL", "React"],
    },
    {
      id: 4,
      title: "OpenMarket",
      date: "May 18, 2024 — June 2, 2024",
      github: "https://github.com/bhavanvir/openmarket",
      description:
        "An AWS-deployable wrapper for the GraphQL Facebook Marketplace API. Using AWS Lambda, and API Gateway as the serverless backend and BrightData as a residential proxy, the API provides a RESTful interface for scraping Facebook Marketplace listings, and a GraphQL interface for querying the data.",
      tags: ["Go", "AWS"],
    },
  ];

  const freelanceProjects = [
    {
      id: 1,
      title: "Gurdwara Singh Sabha",
      date: "October 12, 2024 — Present",
      github: "https://github.com/bhavanvir/singhsabha",
      liveUrl: "https://www.singhsabha.net/",
      description: "Blah blah blah",
      tags: ["Next.js", "Supabase", "Resend"],
    },
    {
      id: 2,
      title: "Skylark Maintenance",
      date: "August 12, 2024 — Present",
      liveUrl: "https://www.skylarkmaintenance.ca/",
      description: "Blah blah blah",
      tags: ["Next.js", "Resend"],
    },
  ];

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Personal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {personalProjects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-2" />
                {project.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p
                dangerouslySetInnerHTML={{ __html: project.description }}
                className="text-sm text-muted-foreground"
              />
            </CardContent>
            <CardFooter className="mt-auto flex flex-wrap justify-between items-center">
              <div className="flex flex-wrap gap-2">
                <Link
                  className="transition-colors duration-200 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.github}
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Freelance
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {freelanceProjects.map((project) => (
          <Link href={project.liveUrl} key={project.id} target="_blank">
            <Card
              key={project.id}
              className="flex flex-col show-sm hover:bg-accent hover:text-accent-foreground"
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {project.title}
                  <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                </CardTitle>
                <CardDescription className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  {project.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p
                  dangerouslySetInnerHTML={{ __html: project.description }}
                  className="text-sm text-muted-foreground"
                />
              </CardContent>
              <CardFooter className="mt-auto flex flex-wrap justify-between items-center">
                {project.github && (
                  <div className="flex flex-wrap gap-2">
                    <Link
                      className="transition-colors duration-200 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={project.github}
                    >
                      <GitHubLogoIcon className="h-5 w-5" />
                    </Link>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
