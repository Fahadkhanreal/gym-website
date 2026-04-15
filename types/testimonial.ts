// Testimonial entity interface
export interface Testimonial {
  id: string;
  clientName: string;
  age?: number;
  profession?: string;
  rating: number; // 1-5 stars
  review: string;
  photo: string; // Path to client photo
  beforeAfter?: {
    before: string;
    after: string;
  };
}
