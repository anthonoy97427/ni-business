// Types pour WooCommerce
export interface WooCommerceProduct {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  stock_status: 'instock' | 'outofstock' | 'onbackorder';
  stock_quantity: number | null;
  categories: WooCommerceCategory[];
  images: WooCommerceImage[];
  attributes: WooCommerceAttribute[];
  variations?: number[];
  meta_data?: WooCommerceMetaData[];
}

export interface WooCommerceCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  image?: WooCommerceImage;
  parent: number;
  count: number;
}

export interface WooCommerceImage {
  id: number;
  src: string;
  name: string;
  alt: string;
}

export interface WooCommerceAttribute {
  id: number;
  name: string;
  position: number;
  visible: boolean;
  variation: boolean;
  options: string[];
}

export interface WooCommerceMetaData {
  id: number;
  key: string;
  value: string;
}

// Types pour le panier
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  slug: string;
  stock_quantity: number | null;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// Types pour les filtres
export interface ProductFilters {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  inStock?: boolean;
  onSale?: boolean;
  search?: string;
}

// Types pour le SEO local
export interface LocalBusiness {
  name: string;
  address: string;
  phone: string;
  email: string;
  openingHours: string[];
  services: string[];
  location: {
    latitude: number;
    longitude: number;
  };
}

// Types pour les formulaires
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

export interface NewsletterForm {
  email: string;
}

// Types d'erreur
export interface ApiError {
  message: string;
  code?: string;
  details?: any;
}

// Types pour les réponses API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  pagination?: {
    total: number;
    totalPages: number;
    currentPage: number;
    perPage: number;
  };
} 