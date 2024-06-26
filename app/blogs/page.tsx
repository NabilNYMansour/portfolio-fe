import { ArticleCardSkeleton } from "../ui/components/skeletons/Skeletons";
import { Container, Group } from "@mantine/core";
import globalClasses from "@/app/globals.module.css";
import { fetchArticle, fetchArticlesIDs } from "@/lib/data";
import { Suspense } from "react";
import { ArticleCard } from "../ui/components/cards/ArticleCard";


const Blogs = async () => {
  const articlesIDs = await fetchArticlesIDs();
  return (
    <>
      <Container size="xs" className={globalClasses.centerContainer} m={0} p={0}>
        <h1>
          Blogs 🖊️
        </h1>
        <p>
          Ill be writing about what I discover here so stay tuned!
        </p>
      </Container>
      <Group justify='center'>
        {articlesIDs.map((id: string) => (
          <Suspense key={id} fallback={<ArticleCardSkeleton />}>
            <ArticleCard fetchArticle={fetchArticle} params={id} />
          </Suspense>
        ))}
      </Group>
    </>
  );
};

export default Blogs;