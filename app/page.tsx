import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Pillars from "./components/Pillars";
import Experiences from "./components/Experiences";
import Debate from "./components/Debate";
import Agenda from "./components/Agenda";
import Speakers from "./components/Speakers";
import Venue from "./components/Venue";
import RegisterCta from "./components/RegisterCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Vision />
        <Pillars />
        <Experiences />
        <Debate />
        <Agenda />
        <Speakers />
        <Venue />
        <RegisterCta />
      </main>
      <Footer />
    </>
  );
}
