import { Container } from "@mantine/core";
import classes from "./BuyMeCoffee.module.css";
import CoolButton from "./CoolButton";

const BuyMeCoffee = () => {
  return (
    <Container size="md" ta="center">
      <h3>If you enjoyed this article and would like to support me, consider to</h3>
      <CoolButton
        href="https://buymeacoffee.com/nabilmansour"
        text="☕️ Buy me coffee ツ"
        target='_blank'
        style={{
          borderRadius: "100px",
          backgroundColor: "var(--mantine-color-main-filled)",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: 900,
        }}
      />
    </Container>
  );
};

export default BuyMeCoffee;