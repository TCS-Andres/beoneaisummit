import Nav from "./components/Nav";
import ScrollFx from "./components/ScrollFx";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Pillars from "./components/Pillars";
import Experiences from "./components/Experiences";
import Debate from "./components/Debate";
import SessionsCarousel from "./components/SessionsCarousel";
import Agenda from "./components/Agenda";
import Speakers from "./components/Speakers";
import Venue from "./components/Venue";
import Expo from "./components/Expo";
import Sponsors from "./components/Sponsors";
import RegisterCta from "./components/RegisterCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ScrollFx />
      <Nav />
      <main>
        <Hero />
        <Vision />
        <Pillars />
        <Experiences />
        <Debate />
        <SessionsCarousel />
        <Agenda />
        <Speakers />
        <Venue />
        <Expo />
        <Sponsors />
        <RegisterCta />
      </main>
      <Footer />
    </>
  );
}
