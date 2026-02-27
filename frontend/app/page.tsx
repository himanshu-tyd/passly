import Header from "./components/Header";
import Hero from "./components/Hero";
import SystemStatus from "./components/SystemStatus";
import TrustedBy from "./components/TrustedBy";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 lg:pb-24 relative min-h-screen overflow-x-hidden">
        {/* Full-width grid background */}
        <div
          className="absolute inset-0 w-full h-full max-h-[900px] grid-bg opacity-30 pointer-events-none z-0"
          aria-hidden
        />
        {/* Centered content column - responsive width + padding */}
        <div className="relative z-10 w-full max-w-[min(100%,72rem)] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <Hero />
          <SystemStatus />
          <TrustedBy />
        </div>
        <CTA />
        <Footer />
      </main>
    </>
  );
}
