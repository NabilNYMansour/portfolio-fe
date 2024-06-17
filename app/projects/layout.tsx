import { Container } from "@mantine/core";
import globalClasses from "@/app/globals.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container size="lg" className={globalClasses.centerContainer}>
      {children}
    </Container>
  );
}