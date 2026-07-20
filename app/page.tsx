import EventHighlights from "@/components/EventHighlights"; 
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
  <>
    <Header />

    <Hero />

    <EventHighlights />

    <Footer />
  </>
);
}