'use client';

import React from 'react';
import { NAVIGATION_LINKS, SOCIAL_LINKS, SITE_INFO } from '@/constants';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const iconMap = {
  Instagram: ExternalLink,
  Facebook: ExternalLink,
  Youtube: ExternalLink,
  Twitter: ExternalLink,
};

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black/50 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{SITE_INFO.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {SITE_INFO.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{SITE_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{SITE_INFO.email}</span>
              </a>
              <a
                href={SITE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{SITE_INFO.address}</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap] || ExternalLink;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-full flex items-center justify-center text-gray-400 hover:text-primary transition-all"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {SITE_INFO.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Built with ❤️ for fitness enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
