import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import AppWrapper from "@/components/AppWrapper";

// Lazy load non-critical components
const PreWedding = dynamic(() => import("@/components/PreWedding"));
const Location = dynamic(() => import("@/components/Location"));
const Accommodation = dynamic(() => import("@/components/Accommodation"));
const Weather = dynamic(() => import("@/components/Weather"));
const Restaurants = dynamic(() => import("@/components/Restaurants"));
const Contacts = dynamic(() => import("@/components/Contacts"));
const DressCode = dynamic(() => import("@/components/DressCode"));
const GiftRegistry = dynamic(() => import("@/components/GiftRegistry"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const RSVP = dynamic(() => import("@/components/RSVP"));
const Footer = dynamic(() => import("@/components/Footer"));

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
        <Footer />
      </main>
    </AppWrapper>
  );
}
