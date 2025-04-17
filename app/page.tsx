import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import VideoEmbed from "@/components/video-embed"
import TweetCarousel from "@/components/tweet-carousel"
import LogoCarousel from "@/components/logo-carousel"
import CohortsSection from "@/components/cohorts-section"
import TestimonialsSection from "@/components/testimonials-section"
import UdemySection from "@/components/udemy-section"
import KeyBenefitsSection from "@/components/key-benefits-section"
import WhyChaiCodeSection from "@/components/why-chaicode-section"
import TopicsCloudSection from "@/components/topics-cloud-section"
import Footer from "@/components/footer"
import FreeApiSection from "@/components/free-api-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <VideoEmbed />
      <TweetCarousel />
      <LogoCarousel />
      <CohortsSection />
      <TestimonialsSection />
      <UdemySection />
      <KeyBenefitsSection />
      <WhyChaiCodeSection />
      <TopicsCloudSection />
      <FreeApiSection />
      <Footer />
    </main>
  )
}
