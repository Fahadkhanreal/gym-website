'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface CTAProps {
  title?: string;
  description?: string;
  showWhatsApp?: boolean;
  showContactForm?: boolean;
}

export const CTA: React.FC<CTAProps> = ({
  title = "Ready to Start Your Transformation?",
  description = "Join hundreds of members who have already transformed their lives. Start your fitness journey today!",
  showWhatsApp = true,
  showContactForm = true,
}) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+923001234567';
    const message = encodeURIComponent('Hello, I want to start my fitness journey with FitForge Gym!');
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section background="gradient">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-8">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {showWhatsApp && (
              <Button
                variant="whatsapp"
                onClick={openWhatsApp}
                className="text-lg px-8 py-4"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            )}
            {showContactForm && (
              <Button
                variant="secondary"
                onClick={scrollToContact}
                className="text-lg px-8 py-4"
              >
                Get Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
