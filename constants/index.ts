import {
  Service,
  ServiceCategory,
  Trainer,
  PricingPlan,
  BillingPeriod,
  Testimonial,
  GalleryImage,
  GalleryCategory,
  NavigationLink,
  SocialLink,
  SocialPlatform,
} from '@/types';

// Navigation Links
export const NAVIGATION_LINKS: NavigationLink[] = [
  { id: 'nav-home', label: 'Home', href: '#hero', order: 1 },
  { id: 'nav-services', label: 'Services', href: '#services', order: 2 },
  { id: 'nav-trainers', label: 'Trainers', href: '#trainers', order: 3 },
  { id: 'nav-pricing', label: 'Pricing', href: '#pricing', order: 4 },
  { id: 'nav-contact', label: 'Contact', href: '#contact', order: 5 },
];

// Services
export const SERVICES: Service[] = [
  {
    id: 'personal-training',
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your fitness goals with expert trainers.',
    icon: 'Dumbbell',
    category: ServiceCategory.PERSONAL_TRAINING,
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss Program',
    description: 'Comprehensive weight loss transformation with nutrition and workout plans.',
    icon: 'Target',
    category: ServiceCategory.WEIGHT_LOSS,
  },
  {
    id: 'strength-training',
    title: 'Strength & Conditioning',
    description: 'Build muscle and increase strength with our specialized training programs.',
    icon: 'Zap',
    category: ServiceCategory.STRENGTH,
  },
  {
    id: 'group-classes',
    title: 'Group Classes',
    description: 'Join energetic group fitness classes for motivation and community support.',
    icon: 'Users',
    category: ServiceCategory.GROUP_CLASSES,
  },
];

// Trainers
export const TRAINERS: Trainer[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    designation: 'Head Trainer',
    yearsOfExperience: 10,
    specialty: 'Strength & Conditioning',
    bio: 'Certified personal trainer with 10+ years helping clients achieve their fitness goals through customized strength programs.',
    photo: '/images/trainers/trainer-1.jpg',
    instagram: 'johndoe_fitness',
  },
  {
    id: 'sarah-ahmed',
    name: 'Sarah Ahmed',
    designation: 'Weight Loss Specialist',
    yearsOfExperience: 8,
    specialty: 'Weight Loss & Nutrition',
    bio: 'Expert in weight loss transformations with a holistic approach combining fitness and nutrition coaching.',
    photo: '/images/trainers/trainer-2.jpg',
    instagram: 'sarah_transforms',
  },
  {
    id: 'mike-wilson',
    name: 'Mike Wilson',
    designation: 'Fitness Coach',
    yearsOfExperience: 6,
    specialty: 'Group Training',
    bio: 'Energetic group fitness instructor specializing in HIIT and functional training classes.',
    photo: '/images/trainers/trainer-3.jpg',
    instagram: 'mike_fitness',
  },
];

// Pricing Plans
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 5000,
    period: BillingPeriod.MONTHLY,
    features: [
      'Gym access during off-peak hours',
      'Basic equipment usage',
      'Locker facility',
      'Free fitness assessment',
    ],
    ctaText: 'Get Started',
    ctaLink: '#contact',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 8000,
    period: BillingPeriod.MONTHLY,
    features: [
      'Unlimited gym access',
      'Group fitness classes',
      '2 personal training sessions/month',
      'Nutrition consultation',
      'Locker facility',
      'Free gym merchandise',
    ],
    popular: true,
    ctaText: 'Most Popular',
    ctaLink: '#contact',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 12000,
    period: BillingPeriod.MONTHLY,
    features: [
      'Unlimited gym access',
      'All group fitness classes',
      '8 personal training sessions/month',
      'Customized nutrition plan',
      'Priority locker',
      'Free supplements',
      'Spa & sauna access',
    ],
    ctaText: 'Go Premium',
    ctaLink: '#contact',
  },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    clientName: 'Sarah Ahmed',
    age: 28,
    profession: 'Marketing Manager',
    rating: 5,
    review: 'Amazing transformation in just 3 months! The trainers are incredibly supportive and the facility is top-notch. Highly recommend!',
    photo: '/images/testimonials/client-1.jpg',
  },
  {
    id: 'testimonial-2',
    clientName: 'Ahmed Khan',
    age: 35,
    profession: 'Software Engineer',
    rating: 5,
    review: 'Best gym in the city! Professional trainers, clean equipment, and great atmosphere. Lost 15kg in 4 months!',
    photo: '/images/testimonials/client-2.jpg',
  },
  {
    id: 'testimonial-3',
    clientName: 'Fatima Ali',
    age: 32,
    profession: 'Teacher',
    rating: 5,
    review: 'The personal training sessions are worth every penny. My trainer helped me achieve goals I never thought possible!',
    photo: '/images/testimonials/client-3.jpg',
  },
  {
    id: 'testimonial-4',
    clientName: 'Hassan Raza',
    age: 29,
    profession: 'Business Owner',
    rating: 5,
    review: 'Excellent facilities and friendly staff. The group classes are energetic and motivating. Highly satisfied!',
    photo: '/images/testimonials/client-4.jpg',
  },
];

// Gallery Images
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gallery-1',
    url: '/images/gallery/gym-1.jpg',
    alt: 'Modern gym interior with state-of-the-art equipment',
    category: GalleryCategory.INTERIOR,
    order: 1,
  },
  {
    id: 'gallery-2',
    url: '/images/gallery/gym-2.jpg',
    alt: 'Weight training area with dumbbells and barbells',
    category: GalleryCategory.EQUIPMENT,
    order: 2,
  },
  {
    id: 'gallery-3',
    url: '/images/gallery/gym-3.jpg',
    alt: 'Cardio section with treadmills and bikes',
    category: GalleryCategory.EQUIPMENT,
    order: 3,
  },
  {
    id: 'gallery-4',
    url: '/images/gallery/gym-4.jpg',
    alt: 'Members working out in group class',
    category: GalleryCategory.MEMBERS,
    order: 4,
  },
  {
    id: 'gallery-5',
    url: '/images/gallery/gym-5.jpg',
    alt: 'Personal training session in progress',
    category: GalleryCategory.TRAINERS,
    order: 5,
  },
  {
    id: 'gallery-6',
    url: '/images/gallery/gym-6.jpg',
    alt: 'Spacious workout floor with mirrors',
    category: GalleryCategory.INTERIOR,
    order: 6,
  },
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'social-instagram',
    platform: SocialPlatform.INSTAGRAM,
    url: 'https://instagram.com/fitforgegym',
    icon: 'Instagram',
  },
  {
    id: 'social-facebook',
    platform: SocialPlatform.FACEBOOK,
    url: 'https://facebook.com/fitforgegym',
    icon: 'Facebook',
  },
  {
    id: 'social-youtube',
    platform: SocialPlatform.YOUTUBE,
    url: 'https://youtube.com/@fitforgegym',
    icon: 'Youtube',
  },
];

// Site Information
export const SITE_INFO = {
  name: 'FitForge Gym',
  tagline: 'Transform Your Body, Transform Your Life',
  description: 'Premium fitness center with expert trainers, state-of-the-art equipment, and personalized training programs.',
  phone: '+92 300 1234567',
  email: 'info@fitforgegym.com',
  address: 'Main Boulevard, Gulberg, Lahore, Pakistan',
  mapsUrl: 'https://maps.google.com/?q=Gulberg+Lahore',
};
