import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/common/HeroSection";
import WeeklyTopNFTSection from "../components/common/WeeklyTopNFTSection";
import TopCollectionSection from "../components/common/TopCollectionSection";
import MarketplaceSection from "../components/common/MarketplaceSection";
import InnerCollectorSection from "../components/common/InnerCollectorSection";
import JoinCommunitySection from "../components/common/JoinCommunitySection";
import FaqSection from "../components/common/FaqSection"

function HomePage() {
  const { cardsSectionRef } = useOutletContext();

  return (
    <>
      <HeroSection />

      <div ref={cardsSectionRef}>
        <WeeklyTopNFTSection />
      </div>

      <TopCollectionSection />

      <MarketplaceSection titleKey="marketplace.discoverTitle" isHome={true} />

      <InnerCollectorSection />

      <JoinCommunitySection />

      <FaqSection />
    </>
  );
}

export default HomePage;
