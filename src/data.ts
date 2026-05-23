import { Product, Testimonial } from './types';

export const CATEGORIES = [
  "Tous",
  "Sweats & Vestes",
  "T-Shirts",
  "Série Rare Julio",
  "Accessoires"
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-hoodie-original",
    name: "Hoodie Julio 'Original Red'",
    subLabel: "Édition Iconique Molleton Lourde",
    price: 89.00,
    category: "Sweats & Vestes",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Le rouge iconique de la boîte original avec moustaches brodées en relief 3D satiné sur la poitrine.",
    fullDescription: "Confectionné dans un molleton de coton biologique de 450 g/m², ce hoodie offre une structure 'boxu-fit' haut de gamme et un confort absolu. L'emblématique visage stylisé de Julio Pringles est finement brodé à Paris avec plus de 20 000 points de fil de viscose haute qualité. Parfait pour les puristes du goût et du style.",
    material: "100% Coton Biologique Supima (450 g/m²)",
    fit: "Coupe Oversize Retro Boxy",
    care: "Lavage délicat à 30°C sur l'envers - séchage à plat",
    sizes: "XS, S, M, L, XL, XXL",
    inStock: true,
    isNew: true,
    isRare: true
  },
  {
    id: "prod-tee-cream-onion",
    name: "T-Shirt 'Sour Cream & Onion'",
    subLabel: "Vert Pastel Acide - Printemps 2026",
    price: 39.00,
    category: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Un basique vibrant teinté à la main, clin d'œil à notre saveur verte favorite.",
    fullDescription: "Exprimez l'acidité subtile de la crème et de l'oignon avec ce t-shirt vert sour-pastel. Coupe unie décontractée avec typographie sérigraphiée à l'encre gonflante au dos indiquant 'CRISPY CLUB SINCE 1968'. Toucher ultra-doux avec un tombé lourd d'une tenue parfaite.",
    material: "100% Coton Peigné pré-rétréci (240 g/m²)",
    fit: "Détendu Moderne avec col côtelé épais",
    care: "Lavage classique à 30°C - ne pas repasser le visuel",
    sizes: "S, M, L, XL",
    inStock: true,
    isNew: true
  },
  {
    id: "prod-jacket-hypercrisp",
    name: "Veste Technique Jaune 'Paprika Spicy'",
    subLabel: "Nylon Protecteur Teinte Épice",
    price: 135.00,
    category: "Sweats & Vestes",
    images: [
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Veste coupe-vent imperméable hautement texturée qui crépite subtilement au toucher.",
    fullDescription: "Une pièce d'avant-garde streetwear inspirée du croquant et de la texture craquante des tuiles épicées. Avec sa matière technique en membrane nylon 'ripstop crépitant', elle est entièrement déperlante et coupe-vent. Dotée de fermetures à glissières thermo-soudées et d'un tirette-logo Julio en acier brossé amovible.",
    material: "Nylon Technique Ripstop recyclé déperlant",
    fit: "Coupe Ajustable par cordons de serrage",
    care: "Lavage synthétique à froid (20°C) ou essuyage humide",
    sizes: "S, M, L, XL, XXL",
    inStock: true,
    isRare: true
  },
  {
    id: "prod-can-bag",
    name: "Le Cylinder Bag 'Original Can'",
    subLabel: "Maroquinerie Conceptuelle Rigide",
    price: 89.00,
    category: "Accessoires",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Sac à bandoulière cylindrique moulé pour imiter la célèbre boîte légendaire de tuiles.",
    fullDescription: "Une déclaration artistique audacieuse. Ce sac rigide est façonné en cuir vegan texturé avec des dorures et ferrures en acier brossé. Son ouverture zippée circulaire au sommet dévoile une doublure en satin imprimé de centaines de petites frites empilables. Livré avec une bandoulière amovible tissée.",
    material: "Cuir Vegan de pomme de haute densité & Satin doublé",
    fit: "Diamètre : 8.5cm | Hauteur : 24.5cm",
    care: "Nettoyer avec un chiffon microfibre légèrement humide",
    sizes: "Taille Unique Ajustable",
    inStock: true,
    isRare: true,
    isNew: true
  },
  {
    id: "prod-bob-mustache",
    name: "Bob 'Moustache de Julio' Velours",
    subLabel: "Chapeau de Rue Rétro",
    price: 29.00,
    category: "Accessoires",
    images: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Velours côtelé noir profond brodé d'une moustache dorée minimaliste.",
    fullDescription: "Sentez la nostalgie chic du chapeau bucket vintage revisité. Réalisé dans un velours de coton à larges côtes de couleur noir d'encre pour créer un contraste ultime avec le logo moustache or scintillant. L'accessoire indispensable pour parfaire un look de rue soigné ou se protéger des timides rayons du soleil.",
    material: "100% Coton Velours Côtelé Premium",
    fit: "Standard (Ø 58cm) avec bande de confort interne",
    care: "Lavage à la main recommandé pour préserver les côtes",
    sizes: "Taille Unique",
    inStock: true
  },
  {
    id: "prod-socks-trio",
    name: "Pack Chaussettes 'Trio Empilable'",
    subLabel: "Assortiment de 3 Saveurs",
    price: 24.00,
    category: "Accessoires",
    images: [
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Trois paires de chaussettes d'athlétisme rétro aux designs cannelés.",
    fullDescription: "Faites un pas vers le confort suprême avec ces trois paires de chaussettes de style universitaire. Les bandes jacquard reprennent les couleurs iconiques de la marque : Rouge Original, Vert Sour Cream et Orange Barbecue. Une broderie de notre célèbre Julio orne la cheville.",
    material: "80% Coton Peigné, 17% Polyamide, 3% Élasthanne Lycra",
    fit: "Chaussettes de sport mi-mollet à côtes épaisses",
    care: "Lavage doux à 30°C - évitez le sèche-linge",
    sizes: "36-40, 41-45",
    inStock: true,
    isNew: false
  },
  {
    id: "prod-cap-vintage-red",
    name: "Casquette Vintage 'Julio Pop'",
    subLabel: "Coton Délavé Ajustable",
    price: 34.00,
    category: "Accessoires",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Casquette délavée rouge canne avec boucle en laiton rétro.",
    fullDescription: "Offrez un aspect décontracté 'vécu' à vos ensembles journaliers. Cette casquette en gabardine de coton robuste a subi un délavage à la pierre pour atténuer son éclat et obtenir cet aspect patiné authentique. Broderie en relief ton-sur-ton et boucle de serrage en laiton estampillée.",
    material: "100% Coton Chino robuste d'aspect vieilli",
    fit: "Profil Bas non structuré, visière courbée",
    care: "Nettoyage localisé à l'eau savonneuse tiède",
    sizes: "Taille Unique Reglable",
    inStock: true
  },
  {
    id: "prod-sweatshirt-paprika",
    name: "Crewneck 'Smoky Paprika'",
    subLabel: "Molleton Confort Épicé",
    price: 82.00,
    category: "Série Rare Julio",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Sweat-shirt col rond de couleur orange rouille profonde avec texture nid d'abeille.",
    fullDescription: "La saveur fumée et épicée du paprika se matérialise dans ce col rond haut de gamme de notre label créateur. Sa couleur chatoyante flatte le teint tandis que la doublure bouclette ultra-douce régule votre température. Ce coloris singulier est une édition capsule produite à seulement 150 exemplaires numérotés.",
    material: "Coton Mérinos composite ultra-lourd (480 g/m²)",
    fit: "Authentique coupe athlétique des années 90",
    care: "Lavage laine délicat séparé conseillé",
    sizes: "M, L, XL",
    inStock: false,
    isNew: false,
    isRare: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Corentin Maillard",
    role: "Direction Création - High-End Streetwear",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    quote: "Le Hoodie 'Original Red' est une pure merveille. Le coton 450g a une tenue rigide incroyable, typique des meilleures pièces de skateboards américaines. L'hommage au design pop de Pringles avec cette broderie Julio d'orfèvre est bluffante !",
    rating: 5
  },
  {
    id: "t2",
    name: "Sarah El Amri",
    role: "Styliste et Créative de mode",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    quote: "J'ai craqué sur le Cylinder Bag, il est incroyable! Dans la rue, tout le monde me demande où je me le suis procuré. C'est l'essence même du kitsch-chic luxueux. La finition du simili-cuir est extrêmement raffinée.",
    rating: 5
  },
  {
    id: "t3",
    name: "Victor Chevalier",
    role: "Sneakerhead & Collectionneur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "Acheteur récurrent lors de chaque drop. La rapidité d'envoi et le fait de recevoir les vêtements pliés dans des répliques géantes de boîtes de chips en métal me rend accro. Le T-shirt Sour Cream est hyper respirant.",
    rating: 5
  }
];
