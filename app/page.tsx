import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Trainers } from '@/components/sections/Trainers';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { Gallery } from '@/components/sections/Gallery';
import { CTA } from '@/components/sections/CTA';
import { Contact } from '@/components/sections/Contact';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <CTA
          title="Ready to Transform Your Body?"
          description="Join our community of fitness enthusiasts and start your journey today!"
        />
        <Trainers />
        <Testimonials />
        <Pricing />
        <CTA
          title="Start Your Fitness Journey Today"
          description="Choose your plan and get started with a free trial session!"
        />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
