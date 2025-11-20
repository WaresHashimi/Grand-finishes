export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  location?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceArea {
  suburb: string;
  postcode?: string;
}
