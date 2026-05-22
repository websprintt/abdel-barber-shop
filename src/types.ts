export interface Review {
  id: string;
  rating: number;
  author: string;
  date: string;
  text: string;
  highlight: string;
  platform: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  isPopular: boolean;
  features: string[];
}

export interface GalleryItem {
  id: string;
  tag: string;
  title: string;
  image: string;
  seoName: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
  isClosed?: boolean;
}
