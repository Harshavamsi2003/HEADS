import HomeHero from "../sections/home/HomeHero.jsx";
import ToolsMarquee from "../sections/home/ToolsMarquee.jsx";
import ProcessLine from "../sections/home/ProcessLine.jsx";
import IndustryTiles from "../sections/home/IndustryTiles.jsx";
import FeaturedProject from "../sections/home/FeaturedProject.jsx";
import WhyHeads from "../sections/home/WhyHeads.jsx";
import CTABanner from "../components/ui/CTABanner.jsx";

// `.home` lets the stylesheet slim this page down on phones (see home-sections.css)
// without touching the same sections on other pages.
export default function Home() {
  return (
    <div className="home">
      <HomeHero />
      <ToolsMarquee />
      <ProcessLine />
      <IndustryTiles />
      <FeaturedProject />
      <WhyHeads />
      <CTABanner />
    </div>
  );
}
