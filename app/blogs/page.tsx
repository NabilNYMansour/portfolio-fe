import { ArticleCardSkeleton } from "../ui/components/skeletons/Skeletons";
import { ActionIcon, Container, Group } from "@mantine/core";
import globalClasses from "@/app/globals.module.css";
import { fetchArticle, fetchArticlesIDs } from "../lib/data";
import { Suspense } from "react";
import { ArticleCard } from "../ui/components/ArticleCard";
import { IconFaceId } from "@tabler/icons-react";
import { SteamIcon } from "../icons/CustomIcons";


const Blogs = async () => {
  const articlesIDs = await fetchArticlesIDs();
  return (
    <Container size="md" className={globalClasses.centerContainer} m={0} p={0}>
      <h1>
        Blogs 🖊️
      </h1>
      <p>
        Ill be writing about what I discover here so stay tuned!
      </p>
      <Group justify='center'>
        {articlesIDs.map((id: string) => (
          <Suspense key={id} fallback={<ArticleCardSkeleton />}>
            <ArticleCard fetchArticle={fetchArticle} params={id} />
          </Suspense>
        ))}
      </Group>
    </Container>
  );
};

export default Blogs;