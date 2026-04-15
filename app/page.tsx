import { Hero } from '@/components/sections/Hero';
import { Contact } from '@/components/sections/Contact';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
