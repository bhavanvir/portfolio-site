import Link from "next/link";
import { BlogPosts } from "@/components/posts";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter mb-2">
        Hey, I&apos;m Bhavanvir 👋🏽
      </h1>
      <div className="flex items-center space-x-4 mb-8">
        <Link
          className="transition-colors duration-200 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:me@bhavanvir.ca"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
          </svg>
        </Link>

        <div className="h-5 border-l-2"></div>

        <Link
          className="transition-colors duration-200 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/bhavanvir"
        >
          <GitHubLogoIcon className="h-5 w-5" />
        </Link>
        <Link
          className="transition-colors duration-200 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://gitlab.com/bhavanvir"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current"
          >
            <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" />
          </svg>
        </Link>
        <Link
          className="transition-colors duration-200 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/bhavanvir/"
        >
          <LinkedInLogoIcon className="h-5 w-5" />
        </Link>
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I&apos;m a <span className="underline">Full Stack Engineer</span> with a
        proven track record of enhancing application performance, optimizing
        data processing, and developing scalable, efficient systems.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I have hands-on experience building robust solutions across the entire
        software development lifecycle, with a particular focus on integrating
        artificial intelligence to solve real-world problems. My passion lies in
        leveraging innovative technologies to create impactful software
        development projects that drive business success.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        With an academic background in Software Engineering and a specialization
        in Artificial Intelligence and Data Mining, I bring a blend of technical
        expertise and problem-solving ability to every project.
      </p>

      <div className="my-8 w-full border-t-2" />

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Latestest Blog Posts
      </h1>
      <p>{``}</p>
      <BlogPosts firstN={2} />
    </section>
  );
}
