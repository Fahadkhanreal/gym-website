'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { GALLERY_IMAGES } from '@/constants';

export const Gallery = () => {
  return (
    <Section id="gallery" background="dark">
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
            Inside Our Gym
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art facility and equipment
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-lg overflow-hidden bg-gray-800 cursor-pointer group"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm text-center px-4">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
