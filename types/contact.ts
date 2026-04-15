// Contact inquiry entity interface
export enum InquirySource {
  CONTACT_FORM = 'contact-form',
  WHATSAPP = 'whatsapp'
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  message?: string;
  timestamp?: Date; // Server-side only
  source?: InquirySource; // Server-side only
}
