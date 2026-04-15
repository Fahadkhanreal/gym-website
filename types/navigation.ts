// Navigation and social link entities
export interface NavigationLink {
  id: string;
  label: string;
  href: string; // Section anchor (e.g., "#services")
  order: number;
}

export enum SocialPlatform {
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
  YOUTUBE = 'youtube',
  TWITTER = 'twitter'
}

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  url: string;
  icon: string; // Lucide icon name
}
