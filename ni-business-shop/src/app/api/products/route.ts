import { NextRequest, NextResponse } from 'next/server'
import { woocommerce } from '@/lib/woocommerce'
import { z } from 'zod'

// Schema de validation pour les paramètres de recherche
const ProductsQuerySchema = z.object({
  page: z.string().optional().transform(val => val ? parseInt(val) : 1),
  per_page: z.string().optional().transform(val => val ? parseInt(val) : 20),
  category: z.string().optional(),
  search: z.string().optional(),
  on_sale: z.string().optional().transform(val => val === 'true'),
  stock_status: z.enum(['instock', 'outofstock', 'onbackorder']).optional(),
  min_price: z.string().optional().transform(val => val ? parseFloat(val) : undefined),
  max_price: z.string().optional().transform(val => val ? parseFloat(val) : undefined),
  orderby: z.enum(['date', 'title', 'price', 'popularity']).optional(),
  order: z.enum(['asc', 'desc']).optional(),
})

export async function GET(request: NextRequest) {
  try {
    // Récupérer les paramètres de l'URL
    const { searchParams } = new URL(request.url)
    const params = Object.fromEntries(searchParams.entries())
    
    // Valider les paramètres
    const validatedParams = ProductsQuerySchema.parse(params)
    
    // Récupérer les produits depuis WooCommerce
    const response = await woocommerce.getProducts(validatedParams)
    
    if (!response.success) {
      return NextResponse.json(
        { error: response.error?.message || 'Erreur lors de la récupération des produits' },
        { status: 500 }
      )
    }
    
    // Retourner les produits avec pagination
    return NextResponse.json({
      products: response.data,
      pagination: response.pagination,
    })
    
  } catch (error) {
    console.error('Erreur API /api/products:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Paramètres invalides', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}

// OPTIONS pour CORS
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
} 