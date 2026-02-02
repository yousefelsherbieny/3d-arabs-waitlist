import { AudienceSection } from "@/components/audience-section";
import { CurriculumSection } from "@/components/curriculum-section";
import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-500/30">
      <HeroSection />
      <FeatureSection />
      <CurriculumSection />
      <AudienceSection />
      <SiteFooter />
    </main>
  );
}
