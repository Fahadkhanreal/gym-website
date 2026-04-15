// Gallery image entity interface
export enum GalleryCategory {
  INTERIOR = 'interior',
  EQUIPMENT = 'equipment',
  MEMBERS = 'members',
  TRAINERS = 'trainers'
}

export interface GalleryImage {
  id: string;
  url: string; // Path to image
  alt: string; // Alt text for accessibility
  category: GalleryCategory;
  order: number; // Display order
}
