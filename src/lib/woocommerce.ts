import { WooCommerceProduct, WooCommerceCategory, ApiResponse } from '@/types';

// Configuration WooCommerce
const WC_CONFIG = {
  url: process.env.WOOCOMMERCE_URL || '',
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY || '',
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET || '',
  version: 'wc/v3',
};

// Classe pour gérer les appels API WooCommerce de manière sécurisée
class WooCommerceClient {
  private baseUrl: string;
  private auth: string;

  constructor() {
    if (!WC_CONFIG.url || !WC_CONFIG.consumerKey || !WC_CONFIG.consumerSecret) {
      throw new Error('Configuration WooCommerce manquante');
    }

    this.baseUrl = `${WC_CONFIG.url}/wp-json/${WC_CONFIG.version}`;
    this.auth = Buffer.from(`${WC_CONFIG.consumerKey}:${WC_CONFIG.consumerSecret}`).toString('base64');
  }

  private async makeRequest<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          'Authorization': `Basic ${this.auth}`,
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        success: true,
        data,
        pagination: this.extractPagination(response),
      };
    } catch (error) {
      console.error('Erreur API WooCommerce:', error);
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Erreur inconnue',
          code: 'API_ERROR',
        },
      };
    }
  }

  private extractPagination(response: Response) {
    const total = response.headers.get('X-WP-Total');
    const totalPages = response.headers.get('X-WP-TotalPages');
    
    if (total && totalPages) {
      return {
        total: parseInt(total),
        totalPages: parseInt(totalPages),
        currentPage: 1, // À améliorer selon les paramètres
        perPage: 20, // À améliorer selon les paramètres
      };
    }
    
    return undefined;
  }

  // Récupérer les produits avec filtres
  async getProducts(params: {
    page?: number;
    per_page?: number;
    category?: string;
    search?: string;
    on_sale?: boolean;
    stock_status?: string;
    min_price?: number;
    max_price?: number;
    orderby?: string;
    order?: 'asc' | 'desc';
  } = {}): Promise<ApiResponse<WooCommerceProduct[]>> {
    const queryParams = new URLSearchParams();
    
    // Paramètres de pagination
    queryParams.append('per_page', (params.per_page || 20).toString());
    queryParams.append('page', (params.page || 1).toString());
    
    // Filtres
    if (params.category) queryParams.append('category', params.category);
    if (params.search) queryParams.append('search', params.search);
    if (params.on_sale) queryParams.append('on_sale', 'true');
    if (params.stock_status) queryParams.append('stock_status', params.stock_status);
    if (params.min_price) queryParams.append('min_price', params.min_price.toString());
    if (params.max_price) queryParams.append('max_price', params.max_price.toString());
    
    // Tri
    queryParams.append('orderby', params.orderby || 'date');
    queryParams.append('order', params.order || 'desc');

    return this.makeRequest<WooCommerceProduct[]>(`/products?${queryParams.toString()}`);
  }

  // Récupérer un produit par ID
  async getProduct(id: number): Promise<ApiResponse<WooCommerceProduct>> {
    return this.makeRequest<WooCommerceProduct>(`/products/${id}`);
  }

  // Récupérer un produit par slug
  async getProductBySlug(slug: string): Promise<ApiResponse<WooCommerceProduct[]>> {
    return this.makeRequest<WooCommerceProduct[]>(`/products?slug=${slug}`);
  }

  // Récupérer les catégories
  async getCategories(params: {
    page?: number;
    per_page?: number;
    parent?: number;
    hide_empty?: boolean;
  } = {}): Promise<ApiResponse<WooCommerceCategory[]>> {
    const queryParams = new URLSearchParams();
    
    queryParams.append('per_page', (params.per_page || 50).toString());
    queryParams.append('page', (params.page || 1).toString());
    
    if (params.parent !== undefined) queryParams.append('parent', params.parent.toString());
    if (params.hide_empty !== undefined) queryParams.append('hide_empty', params.hide_empty.toString());

    return this.makeRequest<WooCommerceCategory[]>(`/products/categories?${queryParams.toString()}`);
  }

  // Récupérer une catégorie par ID
  async getCategory(id: number): Promise<ApiResponse<WooCommerceCategory>> {
    return this.makeRequest<WooCommerceCategory>(`/products/categories/${id}`);
  }

  // Recherche de produits
  async searchProducts(query: string, limit: number = 10): Promise<ApiResponse<WooCommerceProduct[]>> {
    return this.makeRequest<WooCommerceProduct[]>(`/products?search=${encodeURIComponent(query)}&per_page=${limit}`);
  }

  // Récupérer les produits en promotion
  async getSaleProducts(limit: number = 10): Promise<ApiResponse<WooCommerceProduct[]>> {
    return this.makeRequest<WooCommerceProduct[]>(`/products?on_sale=true&per_page=${limit}`);
  }

  // Récupérer les produits populaires (les plus vendus)
  async getPopularProducts(limit: number = 10): Promise<ApiResponse<WooCommerceProduct[]>> {
    return this.makeRequest<WooCommerceProduct[]>(`/products?orderby=popularity&per_page=${limit}`);
  }
}

// Instance singleton
export const woocommerce = new WooCommerceClient();

// Fonctions utilitaires
export const formatPrice = (price: string | number): string => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(numPrice);
};

export const isProductInStock = (product: WooCommerceProduct): boolean => {
  return product.stock_status === 'instock';
};

export const getProductMainImage = (product: WooCommerceProduct): string => {
  return product.images.length > 0 ? product.images[0].src : '/placeholder-product.jpg';
};

export const getProductCategory = (product: WooCommerceProduct): string => {
  return product.categories.length > 0 ? product.categories[0].name : 'Non classé';
}; 