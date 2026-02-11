import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import PreWedding from "@/components/PreWedding";
import Location from "@/components/Location";
import Accommodation from "@/components/Accommodation";
import Weather from "@/components/Weather";
import Restaurants from "@/components/Restaurants";
import Contacts from "@/components/Contacts";
import DressCode from "@/components/DressCode";
import GiftRegistry from "@/components/GiftRegistry";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import RSVP from "@/components/RSVP";
import Playlist from "@/components/Playlist";
import Footer from "@/components/Footer";
import AppWrapper from "@/components/AppWrapper";

// Force dynamic rendering and disable all caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <AppWrapper>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <OurStory />
        <PreWedding />
        <Location />
        <Accommodation />
        <Weather />
        <Restaurants />
        <Contacts />
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
