import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LilyBio from "@/components/LilyBio";
import Engagements from "@/components/Engagements";
import Unrestricted from "@/components/Unrestricted";
import Principles from "@/components/Principles";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LilyBio />
      <Engagements />
      <Unrestricted />
      <Principles />
      <Process />
      <Footer />
    </>
  );
}
