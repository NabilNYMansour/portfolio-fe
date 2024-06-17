import {
  Card,
  Group,
  Stack,
} from '@mantine/core';
import classes from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

export async function ArticleCard({ fetchArticle, params }:
  { fetchArticle: (x: any) => Promise<any>, params?: any }) {
  const info = await fetchArticle(params);

  return (
    <Group m={0} p={0}>
      <Link className={classes.link} href={`/blogs/${info.slug}`}>
        <Card shadow="xs" withBorder m={0} p={0} className={classes.main}>
          <div className={classes.image}>
            <Image
              src={info.banner}
              alt="Article Banner"
              sizes="300px"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <Stack gap={7.5} p={15}>
            <h2 className={classes.title} >{info.title}</h2>
            <h3 className={classes.subtitle} >{info.subtitle}</h3>
            <Group gap={5} justify='space-between'>
              <span className={classes.readTime} >{info.readTime} min read</span>
              <span className={classes.date} >{info.date}</span>
            </Group>
          </Stack>
        </Card>
      </Link>
    </Group>
  );
}