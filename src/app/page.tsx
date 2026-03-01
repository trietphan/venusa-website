import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import News from "@/components/News";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Activities />
      <About />
      <Testimonial />
      <News />
      <CTA />
      <Footer />
    </>
  );
}
