import { ProjectCardSkeleton } from "../ui/components/skeletons/Skeletons";
import { Group } from "@mantine/core";
import globalClasses from "@/app/globals.module.css";
import { fetchProjectsIDs } from "../lib/data";
import { Suspense } from "react";
import { ProjectCard } from "../ui/components/cards/ProjectCard";


const Projects = async () => {
  const projectsIDs = await fetchProjectsIDs(false);
  return (
    <>
        <h1>Projects 👨‍💻</h1>
        <p>
          Here are some stuff I&apos;ve done in the past. I&apos;ll be updating this page with more projects as I go.
        </p>
      <Group justify='center'>
        {projectsIDs.map((id: string) => (
          <Suspense key={id} fallback={<ProjectCardSkeleton />}>
            <ProjectCard id={id} />
          </Suspense>
        ))}
      </Group>
    </>
  );
};

export default Projects;