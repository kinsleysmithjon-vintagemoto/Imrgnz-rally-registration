import EventHighlights from "@/components/EventHighlights"; 
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Welcome from "@/components/Welcome";
import Accommodation from "@/components/Accommodation";
import RegisterCallout from "@/components/RegisterCallout";
export default function Home() {
  return (
 <>
  <Header />

  <Hero />

  <Welcome />

  <EventHighlights />

  <Accommodation />

  <RegisterCallout />

  <Footer />
</>
);
}