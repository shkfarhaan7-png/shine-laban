import { AboutShineLaban } from "@/components/about-shine-laban";
import { ExperienceSection } from "@/components/experience-section";
import { FeaturedProducts } from "@/components/featured-products";
import { Footer } from "@/components/footer";
import { FollowSection } from "@/components/follow-section";
import { HeroAnimation } from "@/components/hero-animation";
import { HeroContent } from "@/components/hero-content";
import { LocationSection } from "@/components/location-section";
import { Navbar } from "@/components/navbar";
import { OurMenu } from "@/components/our-menu";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-x-clip bg-gradient-to-b from-[#0b1f4d] via-[#071733] to-[#071733]">
        <main className="relative overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden">
            <div className="absolute left-[-12rem] top-[16rem] h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[140px]" />
            <div className="absolute right-[-14rem] top-[72rem] h-[32rem] w-[32rem] rounded-full bg-blue-300/10 blur-[160px]" />
            <div className="absolute left-[30%] top-[170rem] h-[24rem] w-[24rem] rounded-full bg-gold/10 blur-[120px]" />
          </div>
          <HeroAnimation />
          <HeroContent />
          <AboutShineLaban />
          <FeaturedProducts />
          <OurMenu />
          <ExperienceSection />
          <LocationSection />
          <FollowSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
