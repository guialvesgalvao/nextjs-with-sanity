import { groq } from "next-sanity";
import { sanityClient } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { customComponentsConfig } from "@/components";
import { PageParams } from "./types";

export async function generateStaticParams() {
  const query = groq`*[_type == "page" && defined(slug.current)]{ "slug": slug.current }`;
  const slugs = await sanityClient.fetch(query);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const query = groq`*[_type == "page" && slug.current == $slug][0]`;
  const page = await sanityClient.fetch(query, { slug });

  if (!page) {
    notFound();
  }

  return (
    <article className="prose lg:prose-xl mx-auto p-8">
      <h1>{page.title}</h1>
      <PortableText value={page.content} components={customComponentsConfig} />
    </article>
  );
}

export const revalidate = 60;