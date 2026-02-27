import dynamicImport from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import AppWrapper from "@/components/AppWrapper";

// Lazy load non-critical components
const PreWedding = dynamicImport(() => import("@/components/PreWedding"));
const Location = dynamicImport(() => import("@/components/Location"));
const Accommodation = dynamicImport(() => import("@/components/Accommodation"));
const Weather = dynamicImport(() => import("@/components/Weather"));
const Restaurants = dynamicImport(() => import("@/components/Restaurants"));
const Contacts = dynamicImport(() => import("@/components/Contacts"));
const DressCode = dynamicImport(() => import("@/components/DressCode"));
const GiftRegistry = dynamicImport(() => import("@/components/GiftRegistry"));
const Gallery = dynamicImport(() => import("@/components/Gallery"));
const FAQ = dynamicImport(() => import("@/components/FAQ"));
const RSVP = dynamicImport(() => import("@/components/RSVP"));
const Footer = dynamicImport(() => import("@/components/Footer"));

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
