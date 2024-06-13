import cx from 'clsx';
import Image from "next/image";
import classes from "./home.module.css";
import { fetchData } from "./lib/data";
import SlidingStrings from "./ui/components/SlidingStrings";
import { Container, Divider, Group } from "@mantine/core";
import { IconBrandYoutubeFilled, IconUser } from "@tabler/icons-react";
import { contacts, professions, technologies } from './lib/constants';
import TechList from './ui/components/TechList';
import { ArticleCardSkeleton, ProjectCardSkeleton } from './ui/components/skeletons/Skeletons';

export default async function HomePage() {
  const profilePicUrl = await fetchData();
  const youtubeLink = contacts.find(contact => contact.title === "YouTube")!.link;
  return (
    <Container size="lg" className={classes.inner}>
      <Container size="xs" className={classes.inner} m={0} p={0}>
        <h1>
          Hi <span className={classes.wave}>👋</span>,
          <br />
          I'm Nabil Mansour
        </h1>
        {profilePicUrl ?
          <Image
            src={profilePicUrl}
            alt="Nabil Mansour"
            width={250}
            height={250}
            className={classes.profile}
          /> : <div style={{ width: 250, height: 250, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <IconUser stroke={1} size={200} />
          </div>}
        <h2>
          <SlidingStrings strings={professions} timeToSlide={3000} />
        </h2>
        <p>
          I'm CS new grad from Toronto.
          I like to work with anything related to computers, but have been recently
          focusing <span className={classes.important}
          >Web Technologies</span> and <span className={classes.important}
          >Graphics</span>.
        </p>
        <p>
          I also create videos on <a className={cx(classes.important, classes.youtubeAnchor)}
            href={youtubeLink} target="_blank" rel="noopener noreferrer"
          ><IconBrandYoutubeFilled size={12} /> Youtube</a> ranging from
          Devlogs to Tutorials (to whatever I'm interested in at the moment 🤔).
        </p>
        <p>
          From time to time, I like to write about my learning experiences and thoughts on my blog
          (which you can find on this website). Here is my latest post:
        </p>
        <ArticleCardSkeleton />
        <p>
          Learning new technologies and languages is always something I'm interested in
          (especially if it's outside of my current 'bubble' so to speak).
          Here's some of the technologies
          I've worked with in the past:
        </p>
        <TechList techList={technologies} />
        <p>
          And here's a list of projects I've created in the past with these technologies:
        </p>
      </Container>
      <Group justify='center'>
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </Group>
    </Container>
  );
}
