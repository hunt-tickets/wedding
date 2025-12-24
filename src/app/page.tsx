import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";
import Accommodation from "@/components/Accommodation";
import DressCode from "@/components/DressCode";
import GiftRegistry from "@/components/GiftRegistry";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import RSVP from "@/components/RSVP";
import Playlist from "@/components/Playlist";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <OurStory />
      <Schedule />
      <Location />
      <Accommodation />
      <DressCode />
      <GiftRegistry />
      <Gallery />
      <FAQ />
      <RSVP />
      <Playlist />
      <Footer />
    </main>
  );
}
