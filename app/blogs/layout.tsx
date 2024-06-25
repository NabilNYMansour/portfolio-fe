import { Container } from "@mantine/core";
import globalClasses from "@/app/globals.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Where I write about what I've learned and what I'm working on (and whatever else I encounter).",
  alternates: {
    canonical: `${process.env.MAIN_URL}/blogs`
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container size="lg" className={globalClasses.centerContainer}>
      {children}
    </Container>
  );
}