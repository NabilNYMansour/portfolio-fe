import { fetchArticleFull } from '@/app/lib/data';
import { Container, TypographyStylesProvider } from '@mantine/core';
import { notFound } from 'next/navigation'
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import classes from "./page.module.css"
import Image from 'next/image';
// import globalClasses from "@/app/globals.module.css"

async function markdownToHtml(markdown: string) {
  const contentHtml = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true }) // Enable dangerous HTML in remark-rehype
    .use(rehypeRaw) // Process raw HTML (including iframes)
    .use(rehypePrettyCode, {
      // See Options section below.
      grid: true,
      theme: "one-dark-pro",
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return contentHtml.toString();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const info = await fetchArticleFull(params.slug);
  if (!info) {
    notFound();
  }
  const contentHTML = await markdownToHtml(info.content);
  return (
    <Container size="md" m={0} p={0}>
      <div className={classes.image}>
        <Image
          src={info.banner}
          alt="Article Banner"
          sizes="100vw"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <h1>{info.title}</h1>
      <h2>{info.subtitle}</h2>
      <TypographyStylesProvider>
        <div className={classes.markdown} dangerouslySetInnerHTML={{ __html: contentHTML }} />
      </TypographyStylesProvider>
    </Container >
  );
}