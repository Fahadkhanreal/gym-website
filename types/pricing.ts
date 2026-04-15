// Pricing plan entity interface
export enum BillingPeriod {
  MONTHLY = 'month',
  QUARTERLY = 'quarter',
  YEARLY = 'year'
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: BillingPeriod;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaLink: string; // WhatsApp link or form anchor
}
