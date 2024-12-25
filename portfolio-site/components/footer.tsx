export default function Footer() {
  return (
    <footer>
      <p className="my-8 text-neutral-600 dark:text-neutral-300 flex items-center">
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
          className="h-4 w-4 mr-1"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
        </svg>
        {new Date().getFullYear()} Bhavanvir Rai. All rights reserved.
      </p>
    </footer>
  );
}
