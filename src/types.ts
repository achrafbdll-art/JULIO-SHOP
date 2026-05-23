export interface Product {
  id: string;
  name: string;
  subLabel: string; // e.g. "Série Limitée Pop Art" or "Édition Goût Original"
  price: number;
  category: string; // "Sweatshirts", "T-shirts", "Accessoires"
  images: string[];
  description: string;
  fullDescription: string;
  material: string; // e.g. "100% Coton Supima", "Laine Mérinos"
  fit: string; // e.g. "Coupe Oversize Rétro", "Ajustement Moderne"
  care: string; // e.g. "Lavage machine à 30°C", "Nettoyage à sec"
  sizes: string; // e.g. "S, M, L, XL"
  inStock: boolean;
  isNew?: boolean;
  isRare?: boolean; // Represents hyper-rare drops
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}
