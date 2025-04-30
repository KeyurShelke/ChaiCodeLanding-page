import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import VideoEmbed from "@/components/video-embed";
import TweetCarousel from "@/components/tweet-carousel";
import CompaniesSection from "@/components/companies-section";
import CohortsSection from "@/components/cohorts-section";
import TestimonialsSection from "@/components/testimonials-section";
import UdemySection from "@/components/udemy-section";
import KeyBenefitsSection from "@/components/key-benefits-section";
import WhyChaiCodeSection from "@/components/why-chaicode-section";
import TopicsCloudSection from "@/components/topics-cloud-section";

import EnhancedDiscordSection from "@/components/enhanced-discord-section";
import FreeApiSection from "@/components/free-api-section";
import YoutubeChannelsSection from "@/components/youtube-channels-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <VideoEmbed />
      <TweetCarousel />
      <CompaniesSection />
      <CohortsSection />
      <TestimonialsSection />
      <UdemySection />
      <KeyBenefitsSection />
      <WhyChaiCodeSection />
      <TopicsCloudSection />
      <EnhancedDiscordSection />
      <FreeApiSection />
      <YoutubeChannelsSection />
      <Footer />
    </main>
  );
}
