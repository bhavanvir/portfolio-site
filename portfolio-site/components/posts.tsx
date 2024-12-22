import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BlogPosts({ firstN }: { firstN?: number }) {
  const allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .slice(0, firstN ?? -1)
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <Card className="show-sm hover:bg-accent hover:text-accent-foreground">
              <CardHeader className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                <CardTitle>{post.metadata.title}</CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)} ·{" "}
                  {post.metadata.timeToRead}
                </CardDescription>
              </CardHeader>
              <CardContent>{post.metadata.summary}</CardContent>
            </Card>
          </Link>
        ))}
    </div>
  );
}
