import { Container } from "@mantine/core";
import globalClasses from "@/app/globals.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My projects: ranging from web development to GPU programming.",
  alternates: {
    canonical: `${process.env.MAIN_URL}/projects`
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container size="lg" className={globalClasses.centerContainer}>
      {children}
    </Container>
  );
}