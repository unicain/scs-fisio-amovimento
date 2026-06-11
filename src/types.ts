export interface ServiceConfig {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialConfig {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  thumbnailUrl: string;
  caption: string;
  postUrl: string;
}

export interface PlanPricing {
  timesPerWeek: string;
  mensal: string;
  trimestral: string;
  semestral: string;
}

export interface PlanConfig {
  id: string;
  name: string;
  prices: PlanPricing[];
  experimentalPrice: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SpaceImage {
  url: string;
  alt: string;
  featured?: boolean;
}

export interface SpaceConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  text: string;
  images: SpaceImage[];
}

export interface LandingPageConfig {
  theme: {
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappMessage: string;
    address: string;
    googleMapsLink: string;
    workingHours: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    imageUrl: string;
    ctaText: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: ServiceConfig[];
  };
  about: {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
    credentials: string[];
  };
  testimonials: {
    sectionTitle: string;
    items: TestimonialConfig[];
  };
  gallery: {
    sectionTitle: string;
    sectionSubtitle: string;
    instagramHandle: string;
    instagramUrl: string;
    items: GalleryItem[];
  };
  space?: SpaceConfig;
  pricing?: {
    sectionTitle: string;
    sectionSubtitle: string;
    observation: string[];
    items: PlanConfig[];
  };
  faq?: {
    sectionTitle: string;
    items: FAQItem[];
  };
}
