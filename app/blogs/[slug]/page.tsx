import { fetchArticleFull } from '@/lib/data';
import { Badge, Container, Divider, Group, TypographyStylesProvider } from '@mantine/core';
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import classes from "./page.module.css"
import Image from 'next/image';
import { Metadata } from 'next'
import BuyMeCoffee from '@/app/ui/components/BuyMeCoffee';
import { visit } from 'unist-util-visit';

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  // Another fetch request is inevitable here, as we need to get the article's title and subtitle
  // in the case of someone copying the URL and sharing it on social media.
  const info = await fetchArticleFull(params.slug, true);
  return {
    title: info.title,
    description: info.subtitle,
    alternates: {
      canonical: `${process.env.MAIN_URL}/blogs/${params.slug}`
    },
    keywords: info.tags.join(', '),
    openGraph: {
      title: info.title,
      description: info.subtitle,
      url: `${process.env.MAIN_URL}/blogs/${params.slug}`,
      type: "article",
      images: [
        {
          url: info.banner,
          alt: info.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: info.title,
      description: info.subtitle,
      images: info.banner,
    },
  }
}

function addStyleToParagraphWithImage() {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'p') {
        const hasImage = node.children.some((child: any) => child.tagName === 'img');
        if (hasImage) {
          node.properties = node.properties || {};
          node.properties.style = (node.properties.style || '') + 'display:flex; justify-content:center;';
        }
      }
    });
  };
}

async function markdownToHtml(markdown: string) {
  const contentHtml = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true }) // Enable dangerous HTML in remark-rehype
    .use(rehypeRaw) // Process raw HTML (including iframes)
    .use(addStyleToParagraphWithImage) // Add custom class plugin
    .use(rehypePrettyCode, {
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
      <div className={classes.views}>{info.views} views</div>
      <h1>{info.title}</h1>
      <h2 className={classes.subtitle}>{info.subtitle}</h2>
      <div className={classes.readAndDate}>
        <span>{info.readTime} min read</span>
        <span>{info.date}</span>
      </div>
      <Divider />
      <br />
      <TypographyStylesProvider>
        <div className={classes.markdown} dangerouslySetInnerHTML={{ __html: contentHTML }} />
      </TypographyStylesProvider>
      <br />
      <Divider />
      <br />
      <Group justify='center'>
        {info.tags.map((tag: string, i: number) => (
          <Badge key={i} size='lg'>
            {tag}
          </Badge>
        ))}
      </Group>
      <br />
      <Divider />
      <BuyMeCoffee />
    </Container >
  );
}