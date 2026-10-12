import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Portfolio />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
