import About from "@/components/About";
import { Container } from "@mui/material";
import Pricing from "@/components/Pricing/Pricing";
import Contact from "@/components/Contacts/Contact";

export default function Home() {
  return (
    <Container component="main" sx={{ mt: "64px" }}>
      <About />
      <Pricing />
      <Contact />
    </Container>
  );
}
