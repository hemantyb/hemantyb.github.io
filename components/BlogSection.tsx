"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { PostMetadata } from "@/lib/posts";
import BlogPostCard from "./BlogPostCard";

interface BlogSectionProps {
  posts: PostMetadata[];
  title?: string;
  showAll?: boolean;
  linkToDetail?: boolean;
}

export default function BlogSection({
  posts,
  title = "Latest Posts",
  showAll = true,
  linkToDetail = false,
}: BlogSectionProps) {
  const displayPosts = showAll ? posts : posts.slice(0, 3);

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        {!showAll && (
          <Link href="/blog">
            <Button variant="outline">View All Posts</Button>
          </Link>
        )}
      </div>
      {displayPosts.length === 0 ? (
        <p className="text-muted-foreground">No posts match your search.</p>
      ) : (
        <div className="space-y-6">
          {displayPosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              post={post}
              linkToDetail={linkToDetail}
            />
          ))}
        </div>
      )}
    </section>
  );
}
