"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PostMetadata } from "@/lib/posts";

interface BlogPostCardProps {
  post: PostMetadata;
  linkToDetail?: boolean;
}

export default function BlogPostCard({
  post,
  linkToDetail = false,
}: BlogPostCardProps) {
  const cardContent = (
    <Card className="cursor-pointer h-full transition duration-200 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        {post.date} · {post.readTime}
      </CardFooter>
    </Card>
  );

  return (
    <div>
      {linkToDetail ? (
        <Link href={`/blog/${post.slug}`}>{cardContent}</Link>
      ) : (
        cardContent
      )}
    </div>
  );
}
