import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Trainers } from '@/components/sections/Trainers';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Trainers />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
