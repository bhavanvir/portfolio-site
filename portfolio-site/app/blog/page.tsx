import { BlogPosts } from "@/components/posts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { ExternalLinkIcon } from "@radix-ui/react-icons";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-semibold text-2xl tracking-tighter">
          All Blog Posts
        </h1>
        <Link href="/rss" target="_blank">
          <Button variant="outline">
            <ExternalLinkIcon />
            RSS
          </Button>
        </Link>
      </div>
      <BlogPosts />
    </section>
  );
}
