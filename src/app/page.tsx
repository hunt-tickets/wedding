import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import PreWedding from "@/components/PreWedding";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";
import Accommodation from "@/components/Accommodation";
import Weather from "@/components/Weather";
import Restaurants from "@/components/Restaurants";
import DressCode from "@/components/DressCode";
import GiftRegistry from "@/components/GiftRegistry";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import RSVP from "@/components/RSVP";
import Playlist from "@/components/Playlist";
import Footer from "@/components/Footer";
import AppWrapper from "@/components/AppWrapper";


export default function Home() {
  return (
    <AppWrapper>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <OurStory />
        <PreWedding />
        <Schedule />
        <Location />
        <Accommodation />
        <Weather />
        <Restaurants />
        <DressCode />
        <GiftRegistry />
        <Gallery />
        <FAQ />
        <RSVP />
        <Playlist />
        <Footer />
      </main>
    </AppWrapper>
  );
}
