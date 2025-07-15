# N.I Business - Boutique en ligne

Une boutique en ligne moderne et sécurisée pour N.I Business, spécialisée dans les accessoires de téléphone et la réparation mobile à la Réunion.

## 🚀 Fonctionnalités

- **Boutique en ligne** connectée à WooCommerce
- **SEO local optimisé** pour la Réunion
- **Design responsive** selon la charte graphique
- **Sécurité renforcée** (CSP, CSRF, validation des données)
- **Architecture séparée** frontend/backend
- **Performance optimisée** avec Next.js 14+

## 🛠️ Technologies utilisées

- **Frontend** : Next.js 14, React, TypeScript
- **Styling** : Tailwind CSS avec charte graphique personnalisée
- **Backend** : API Routes Next.js
- **E-commerce** : WooCommerce REST API
- **Validation** : Zod pour la sécurité des données
- **Icônes** : Heroicons, Lucide React
- **Sécurité** : CSP, CSRF protection, validation stricte

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn
- Un site WooCommerce configuré avec l'API REST activée

## 🔧 Installation

1. **Cloner le projet**
```bash
git clone <repository-url>
cd ni-business-shop
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
```bash
cp .env.example .env.local
```

Éditer `.env.local` avec vos configurations :

```env
# Configuration de base
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_SITE_NAME="N.I Business"

# WooCommerce API Configuration
WOOCOMMERCE_URL=https://votre-site-woocommerce.com
WOOCOMMERCE_CONSUMER_KEY=ck_your_consumer_key_here
WOOCOMMERCE_CONSUMER_SECRET=cs_your_consumer_secret_here

# SEO Local Réunion
NEXT_PUBLIC_BUSINESS_NAME="N.I Business"
NEXT_PUBLIC_BUSINESS_ADDRESS="Votre adresse à la Réunion"
NEXT_PUBLIC_BUSINESS_PHONE="+262 XXX XXX XXX"
NEXT_PUBLIC_BUSINESS_EMAIL="contact@ni-business.re"
```

4. **Démarrer le serveur de développement**
```bash
npm run dev
```

L'application sera disponible sur `http://localhost:3000`

## 🎨 Charte graphique

### Couleurs principales
- **Bleu technologique** : `#1e40af` (tech-blue-600)
- **Gris anthracite** : `#374151` (anthracite-500)
- **Blanc** : `#ffffff`

### Couleurs d'accent
- **Vert émeraude** : `#10b981` (emerald-action-500) - Actions positives
- **Orange énergique** : `#f59e0b` (energy-orange-500) - Promotions
- **Rouge discret** : `#ef4444` (alert-red-500) - Alertes

### Typographie
- **Titres** : Poppins Bold
- **Sous-titres** : Poppins SemiBold
- **Texte courant** : Inter Regular
- **Prix** : Inter Bold

## 🔒 Sécurité

### Mesures implémentées

1. **Content Security Policy (CSP)**
   - Headers de sécurité stricts
   - Protection contre XSS
   - Contrôle des ressources externes

2. **Validation des données**
   - Schémas Zod pour toutes les entrées
   - Validation côté client et serveur
   - Protection contre l'injection

3. **Protection CSRF**
   - Tokens CSRF sur tous les formulaires
   - Validation des origines

4. **Variables d'environnement**
   - Séparation des secrets
   - Configuration sécurisée

## 🌐 SEO Local Réunion

### Optimisations incluses

- **Schema.org** : LocalBusiness markup
- **Meta tags** optimisés pour la Réunion
- **OpenGraph** et Twitter Cards
- **Mots-clés locaux** : "réparation téléphone réunion", "974", etc.
- **Coordonnées géographiques** de la Réunion
- **Horaires d'ouverture** structurés

### Configuration Google My Business

1. Créer un profil Google My Business
2. Ajouter l'adresse exacte à la Réunion
3. Configurer les horaires d'ouverture
4. Ajouter des photos du magasin
5. Encourager les avis clients

## 📱 Pages principales

### Page d'accueil (`/`)
- Présentation de N.I Business
- Services principaux
- Liens vers la boutique
- CTA pour devis gratuit

### Boutique (`/boutique`)
- Liste des produits WooCommerce
- Filtres par catégorie
- Recherche
- Pagination

### Produit (`/boutique/[slug]`)
- Détails du produit
- Images
- Ajout au panier
- Produits similaires

### Panier (`/panier`)
- Gestion du panier
- Calcul des frais de port
- Checkout sécurisé

## 🛒 Intégration WooCommerce

### Configuration requise

1. **Activer l'API REST** dans WooCommerce
2. **Créer des clés API** (Lecture seule suffisante)
3. **Configurer les webhooks** (optionnel)
4. **SSL requis** pour la sécurité

### Endpoints utilisés

- `GET /wp-json/wc/v3/products` - Liste des produits
- `GET /wp-json/wc/v3/products/{id}` - Détail produit
- `GET /wp-json/wc/v3/products/categories` - Catégories
- `POST /wp-json/wc/v3/orders` - Création de commande

## 🚀 Déploiement

### Vercel (recommandé)

1. **Connecter le repository** à Vercel
2. **Configurer les variables d'environnement**
3. **Déployer automatiquement**

### Configuration production

```bash
# Build de production
npm run build

# Démarrer en mode production
npm start
```

### Variables d'environnement production

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
WOOCOMMERCE_URL=https://votre-woocommerce.com
WOOCOMMERCE_CONSUMER_KEY=ck_production_key
WOOCOMMERCE_CONSUMER_SECRET=cs_production_secret
```

## 📊 Performance

### Optimisations incluses

- **Images optimisées** avec Next.js Image
- **Fonts optimisées** avec Google Fonts
- **Code splitting** automatique
- **Lazy loading** des composants
- **Compression** des assets

### Métriques cibles

- **Lighthouse Score** : 90+
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests e2e
npm run test:e2e

# Linting
npm run lint

# Vérification TypeScript
npm run type-check
```

## 📝 Structure du projet

```
src/
├── app/                 # App Router Next.js
│   ├── api/            # API Routes
│   ├── boutique/       # Pages boutique
│   └── globals.css     # Styles globaux
├── components/         # Composants React
│   ├── layout/         # Header, Footer
│   ├── ui/            # Composants UI
│   └── forms/         # Formulaires
├── lib/               # Utilitaires
│   ├── woocommerce.ts # Client WooCommerce
│   └── validation.ts  # Schémas Zod
└── types/             # Types TypeScript
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Commit les changements
4. Push vers la branche
5. Créer une Pull Request

## 📞 Support

Pour toute question ou problème :

- **Email** : contact@ni-business.re
- **Téléphone** : +262 XXX XXX XXX
- **Adresse** : Votre adresse à la Réunion

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**N.I Business** - Spécialiste Mobile & Réparation à la Réunion 🏝️ 