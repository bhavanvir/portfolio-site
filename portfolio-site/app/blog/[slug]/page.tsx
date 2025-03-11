import { baseUrl } from "@/app/sitemap";
import { CustomMDX } from "@/components/mdx";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../utils";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: any }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: any }) {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  const currentIndex = posts.findIndex((post) => post.slug === params.slug);
  if (currentIndex === -1) {
    notFound();
  }

  const post = posts[currentIndex];
  const prevPost = posts[currentIndex + 1];
  const nextPost = posts[currentIndex - 1];

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>

      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "group w-full sm:w-auto justify-start",
            )}
          >
            <ChevronLeftIcon className="mr-1 h-4 w-4 flex-shrink-0 transition-transform group-hover:-translate-x-0.5" />
            <span className="truncate sm:max-w-[150px] w-full">
              {prevPost.metadata.title}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "group w-full sm:w-auto justify-end",
            )}
          >
            <span className="truncate sm:max-w-[150px] w-full">
              {nextPost.metadata.title}
            </span>
            <ChevronRightIcon className="ml-1 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>
    </section>
  );
}
