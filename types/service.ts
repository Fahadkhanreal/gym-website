// Service entity interface
export enum ServiceCategory {
  PERSONAL_TRAINING = 'personal-training',
  WEIGHT_LOSS = 'weight-loss',
  STRENGTH = 'strength',
  GROUP_CLASSES = 'group-classes'
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  category: ServiceCategory;
}
