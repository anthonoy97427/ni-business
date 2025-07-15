# ✨ Animations N.I Business

## 🎯 Animations Implémentées

### **Composants Animés**

#### 1. **AnimatedCounter** 📊
- Compteurs qui s'animent quand ils deviennent visibles
- Easing fluide avec fonction `easeOutQuart`
- Déclenchement automatique au scroll avec Intersection Observer
- Utilisé pour : statistiques, chiffres clés, années

#### 2. **useScrollAnimation Hook** 👁️
- Hook personnalisé pour déclencher les animations au scroll
- Options : threshold, rootMargin, triggerOnce
- Optimisé pour les performances

### **Types d'Animations**

#### **Animations d'entrée :**
- `animate-fade-in` : Apparition en fondu (0.8s)
- `animate-slide-up` : Glissement du bas (0.6s)
- `animate-slide-right` : Glissement de la gauche (0.7s)
- `animate-slide-left` : Glissement de la droite (0.7s)
- `animate-scale-up` : Agrandissement (0.5s)
- `animate-bounce-in` : Rebond d'entrée (0.8s)
- `animate-rotate-in` : Rotation d'entrée (0.6s)

#### **Animations continues :**
- `animate-pulse-glow` : Pulsation lumineuse (2s en boucle)

#### **Effets hover :**
- `hover-lift` : Élévation au survol (-8px + ombre)
- `hover-scale` : Agrandissement au survol (1.05x)
- `hover-glow` : Halo lumineux au survol

#### **Délais échelonnés :**
- `delay-100` à `delay-600` : Délais de 0.1s à 0.6s
- Permet des animations en cascade

### **Sections Animées**

#### **🎬 Hero Section**
- **Titre** : `animate-fade-in` puis `animate-slide-up` 
- **Boutons** : `animate-bounce-in` avec délais échelonnés
- **Cartes services** : `animate-bounce-in` + `hover-scale`
- **Icônes** : `animate-pulse-glow` sur l'icône principale

#### **🛠️ Services Section**
- **Titre** : `animate-slide-up`
- **Cartes** : `animate-slide-up` avec délais progressifs
- **Icônes** : `hover-scale` au survol

#### **📖 Notre Histoire**
- **Texte** : `animate-slide-right` + `animate-fade-in`
- **Statistiques** : **Compteurs animés** avec `AnimatedCounter`
- **Cartes valeurs** : `animate-scale-up` + `hover-lift`

#### **📊 Témoignages & Chiffres**
- **Statistiques** : **Compteurs animés** (98%, 24h, 6 mois, 100%)
- **Container** : `animate-scale-up` + `hover-glow`

### **🎨 Effets Visuels**

#### **Gradients animés**
- Hero : `from-tech-blue-600 to-tech-blue-700`
- Histoire : `from-tech-blue-50 to-emerald-50`

#### **Ombres dynamiques**
- `hover-lift` : Ombre portée animée
- `hover-glow` : Halo coloré au survol

#### **Transitions fluides**
- Durées : 0.2s (rapide) à 0.8s (lent)
- Easings : `ease-out`, `ease-in-out`

### **⚡ Performances**

- **Intersection Observer** : Animations déclenchées uniquement au scroll
- **requestAnimationFrame** : Animations fluides à 60fps
- **CSS transforms** : Accélération matérielle GPU
- **Déclenchement unique** : Évite les re-animations

### **🎛️ Configuration**

```typescript
// Exemple d'utilisation
const animation = useScrollAnimation({ 
  threshold: 0.1,     // 10% visible
  triggerOnce: true   // Une seule fois
})

<div className={`${animation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
  <AnimatedCounter 
    end={2000} 
    suffix="+"
    duration={2000}
    className="text-2xl font-bold"
  />
</div>
```

### **🌟 Résultat**
- **Site ultra-dynamique** avec des animations fluides
- **Engagement utilisateur** renforcé 
- **Expérience moderne** et professionnelle
- **Performance optimisée** avec déclenchement intelligent

---
*N.I Business - La tech au service du 974 ! 🏝️* 