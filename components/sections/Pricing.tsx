'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PRICING_PLANS } from '@/constants';
import { Check, Star } from 'lucide-react';

export const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = (planName: string) => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+923001234567';
    const message = encodeURIComponent(`Hello, I'm interested in the ${planName} membership plan. Please provide more details.`);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section id="pricing" background="default">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Choose Your Membership
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Flexible pricing plans designed to fit your fitness goals and budget
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              <Card
                className={`h-full flex flex-col ${
                  plan.popular ? 'border-primary/50 shadow-xl shadow-primary/20' : ''
                }`}
              >
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">
                      PKR {plan.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  onClick={() => {
                    if (plan.ctaLink === '#contact') {
                      scrollToContact();
                    } else {
                      openWhatsApp(plan.name);
                    }
                  }}
                  className="w-full"
                >
                  {plan.ctaText}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            All plans include free fitness assessment and locker facility.{' '}
            <button
              onClick={scrollToContact}
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Contact us
            </button>{' '}
            for custom corporate packages.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};
