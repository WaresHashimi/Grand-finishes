import { NavItem } from './types';

export const BUSINESS_INFO = {
  name: "Grand Finishes Painting & Plastering Pty Ltd",
  shortName: "Grand Finishes",
  phone: "0469 934 595",
  phoneLink: "tel:0469934595",
  email: "info@grandfinishes.com.au", 
  address: "52 Brookland Greens Blvd, Cranbourne VIC 3977",
  location: "Cranbourne, Victoria",
  googleRating: 5.0,
  reviewCount: 29,
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Painting', path: '/painting' },
  { label: 'Plastering', path: '/plastering' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

const imgur = (id: string, ext: 'jpg' | 'png' = 'jpg') => `https://i.imgur.com/${id}.${ext}`;

export const IMAGES = {
  logo: imgur('wKmI3Zv', 'png'),
  hero: imgur('HOhnF9G'),
  interior: imgur('sbHQIHE'),
  exterior: imgur('VwHKZ3D'),
  detail: imgur('gU1IKb7'),
};