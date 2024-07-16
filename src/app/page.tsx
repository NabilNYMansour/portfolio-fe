import cx from 'clsx';
import Image from "next/image";
import classes from "./home.module.css";
import globalClasses from "./globals.module.css";
import { fetchLatestArticle, fetchProfilePicURL, fetchProjectsIDs } from "@/lib/data";
import SlidingStrings from "./ui/components/SlidingStrings";
import { Badge, Container, Group } from "@mantine/core";
import { contacts, professions, technologies } from './ui/components/Constants';
import TechList from './ui/components/TechList';
import { ArticleCardSkeleton, ProjectCardSkeleton } from './ui/components/skeletons/Skeletons';
import { Suspense } from 'react';
import { ArticleCard } from './ui/components/cards/ArticleCard';
import { ProjectCard } from './ui/components/cards/ProjectCard';
import { FaYoutube } from 'react-icons/fa';
import mandleTree from '@/../public/treeHuge.png';

export default async function HomePage() {
  const profilePicUrl = await fetchProfilePicURL();
  const highlightedProjectsIDs = await fetchProjectsIDs(true);
  const youtubeLink = contacts.find(contact => contact.title === "YouTube")!.link;
  return (
    <Container size="lg" className={globalClasses.centerContainer}>
      <div className={classes.backgroundImage}/>
      <div className={classes.backgroundOverlay} />
      <Container size="xs" className={globalClasses.centerContainer} m={0} p={0}>
        <h1>
          Hi <span className={classes.wave}>👋</span>,
          <br />
          I&apos;m Nabil Mansour
        </h1>
        <Image
          priority
          src={profilePicUrl}
          alt="Nabil Mansour"
          width={250}
          height={250}
          className={classes.profile}
        />
        <h2>
          <SlidingStrings strings={professions} timeToSlide={3000} />
        </h2>
        <p>
          I&apos;m CS new grad from Toronto.
          I like to work with anything related to computers, but have been recently
          focusing <span className={classes.important}
          >Web Technologies</span> and <span className={classes.important}
          >Graphics</span>.
        </p>
        <div>
          I also create videos on <a
            href={youtubeLink} target="_blank" rel="noopener noreferrer"
          ><Badge size="xl" color="red" tt="none" leftSection={<FaYoutube />}>YouTube</Badge></a> ranging from
          Devlogs to Tutorials (to whatever I&apos;m interested in at the moment 🤔).
        </div>
        <p>
          From time to time, I like to write articles about things I&apos;ve learned or experimented with
          (which you can find on this website). Here is my latest post:
        </p>
        <Suspense fallback={<ArticleCardSkeleton />}>
          <ArticleCard fetchArticle={fetchLatestArticle} />
        </Suspense>
        <p>
          Learning new technologies and languages is always something I&apos;m interested in
          (especially if it&apos;s outside of my current &apos;bubble&apos; so to speak).
          Here&apos;s some of the technologies
          I&apos;ve worked with in the past:
        </p>
        <TechList techList={technologies} />
      </Container>
      <p>
        And here are some projects I&apos;ve created in the past with these technologies:
      </p>
      <Group justify='center'>
        {highlightedProjectsIDs.map((id: string) =>
          <Suspense key={id} fallback={<ProjectCardSkeleton />}>
            <ProjectCard id={id} />
          </Suspense>
        )}
      </Group>
    </Container>
  );
}
