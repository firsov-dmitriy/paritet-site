import About from "@/components/About";
import { Container } from "@mui/material";
import Pricing from "@/components/Pricing/Pricing";
import Contact from "@/components/Contacts/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <Container component="main" sx={{ mt: "64px" }}>
      <Head>
        <meta name="yandex-verification" content="b584974a991eb498" />
      </Head>
      <About />
      <Pricing />
      <Contact />
    </Container>
  );
}
