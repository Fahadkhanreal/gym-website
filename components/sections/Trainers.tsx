'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { TRAINERS } from '@/constants';
import { ExternalLink } from 'lucide-react';

export const Trainers = () => {
  return (
    <Section id="trainers" background="dark">
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
            Meet Our Expert Trainers
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our certified trainers are dedicated to helping you achieve your fitness goals with personalized guidance
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full">
                {/* Trainer Photo */}
                <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden bg-gray-800">
                  <Image
                    src={trainer.photo}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Trainer Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-primary font-semibold">
                      {trainer.designation}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{trainer.yearsOfExperience}+ Years Experience</span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-300 mb-1">
                      Specialty:
                    </p>
                    <p className="text-sm text-gray-400">{trainer.specialty}</p>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {trainer.bio}
                  </p>

                  {/* Instagram Link */}
                  {trainer.instagram && (
                    <a
                      href={`https://instagram.com/${trainer.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm font-semibold">
                        @{trainer.instagram}
                      </span>
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
