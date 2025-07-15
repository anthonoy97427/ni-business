import { z } from 'zod'

// Validation pour les formulaires de contact
export const ContactFormSchema = z.object({
  name: z.string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom contient des caractères invalides'),
  
  email: z.string()
    .email('Adresse email invalide')
    .max(100, 'L\'email ne peut pas dépasser 100 caractères'),
  
  phone: z.string()
    .regex(/^(\+262|0262|0)(6|7|9)\d{8}$/, 'Numéro de téléphone Réunion invalide')
    .optional(),
  
  message: z.string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
  
  service: z.enum(['reparation', 'accessoires', 'autre']).optional(),
  
  // Protection contre le spam
  honeypot: z.string().max(0, 'Champ honeypot détecté').optional(),
})

// Validation pour la newsletter
export const NewsletterSchema = z.object({
  email: z.string()
    .email('Adresse email invalide')
    .max(100, 'L\'email ne peut pas dépasser 100 caractères'),
})

// Validation pour les paramètres de recherche de produits
export const ProductSearchSchema = z.object({
  query: z.string()
    .min(2, 'La recherche doit contenir au moins 2 caractères')
    .max(100, 'La recherche ne peut pas dépasser 100 caractères')
    .regex(/^[a-zA-ZÀ-ÿ0-9\s'-]+$/, 'Caractères de recherche invalides'),
})

// Validation pour les filtres de produits
export const ProductFiltersSchema = z.object({
  category: z.string().optional(),
  priceRange: z.object({
    min: z.number().min(0).optional(),
    max: z.number().min(0).optional(),
  }).optional(),
  inStock: z.boolean().optional(),
  onSale: z.boolean().optional(),
  brand: z.string().optional(),
})

// Validation pour les items du panier
export const CartItemSchema = z.object({
  id: z.number().int().positive(),
  quantity: z.number().int().min(1).max(10),
  variation: z.object({
    id: z.number().int().positive(),
    attributes: z.record(z.string()),
  }).optional(),
})

// Validation pour les données de commande
export const OrderSchema = z.object({
  items: z.array(CartItemSchema).min(1, 'Le panier ne peut pas être vide'),
  
  billing: z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().regex(/^(\+262|0262|0)(6|7|9)\d{8}$/),
    address: z.string().min(5).max(200),
    city: z.string().min(2).max(50),
    postalCode: z.string().regex(/^9[0-9]{4}$/, 'Code postal Réunion invalide'),
    country: z.literal('FR'),
  }),
  
  shipping: z.object({
    method: z.enum(['standard', 'express', 'pickup']),
    address: z.object({
      firstName: z.string().min(2).max(50),
      lastName: z.string().min(2).max(50),
      address: z.string().min(5).max(200),
      city: z.string().min(2).max(50),
      postalCode: z.string().regex(/^9[0-9]{4}$/),
      country: z.literal('FR'),
    }).optional(),
  }),
  
  payment: z.object({
    method: z.enum(['card', 'paypal', 'bank_transfer']),
    token: z.string().optional(),
  }),
  
  notes: z.string().max(500).optional(),
})

// Validation pour les données utilisateur
export const UserSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().regex(/^(\+262|0262|0)(6|7|9)\d{8}$/).optional(),
  
  address: z.object({
    street: z.string().min(5).max(200),
    city: z.string().min(2).max(50),
    postalCode: z.string().regex(/^9[0-9]{4}$/),
    country: z.literal('FR'),
  }).optional(),
  
  preferences: z.object({
    newsletter: z.boolean().default(false),
    sms: z.boolean().default(false),
    language: z.enum(['fr']).default('fr'),
  }).optional(),
})

// Validation pour les avis clients
export const ReviewSchema = z.object({
  productId: z.number().int().positive(),
  rating: z.number().int().min(1).max(5),
  title: z.string().min(5).max(100),
  content: z.string().min(20).max(1000),
  
  // Informations utilisateur (optionnel si connecté)
  name: z.string().min(2).max(50).optional(),
  email: z.string().email().optional(),
  
  // Protection contre le spam
  honeypot: z.string().max(0).optional(),
})

// Types TypeScript dérivés des schémas
export type ContactFormData = z.infer<typeof ContactFormSchema>
export type NewsletterData = z.infer<typeof NewsletterSchema>
export type ProductSearchData = z.infer<typeof ProductSearchSchema>
export type ProductFiltersData = z.infer<typeof ProductFiltersSchema>
export type CartItemData = z.infer<typeof CartItemSchema>
export type OrderData = z.infer<typeof OrderSchema>
export type UserData = z.infer<typeof UserSchema>
export type ReviewData = z.infer<typeof ReviewSchema>

// Fonction utilitaire pour valider et nettoyer les données
export function validateAndSanitize<T>(schema: z.ZodSchema<T>, data: unknown): {
  success: boolean
  data?: T
  errors?: z.ZodError
} {
  try {
    const validatedData = schema.parse(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error }
    }
    throw error
  }
}

// Fonction pour formater les erreurs de validation
export function formatValidationErrors(errors: z.ZodError): Record<string, string> {
  const formatted: Record<string, string> = {}
  
  errors.errors.forEach((error) => {
    const path = error.path.join('.')
    formatted[path] = error.message
  })
  
  return formatted
} 