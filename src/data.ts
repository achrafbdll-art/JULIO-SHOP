import { Product, Testimonial } from './types';

export const CATEGORIES = [
  "Tous",
  "Vêtements",
  "Électroniques",
  "Électroménager",
  "Maquillage & Beauté",
  "Chaussures & Accessoires"
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-chemise-motifs",
    name: "Chemise Fluide 'Originel Rétro'",
    subLabel: "Matière Respirante & Motifs Saisissants",
    price: 49.00,
    category: "Vêtements",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Une magnifique chemise légère en viscose ornée de motifs géométriques vibrants, exactement comme le look iconique en haut à gauche.",
    fullDescription: "Apportez une explosion de couleurs artistiques à votre garde-robe avec notre chemise fluide à motifs originels. Confectionnée dans un tissu en viscose soyeuse et ultra-légère, elle offre un confort de niveau supérieur et un tombé impeccable pour les belles journées ensoleillées.",
    material: "100% Viscose Douce & Éco-Certifiée",
    fit: "Coupe Ajustée Décontractée Rétro",
    care: "Lavage délicat à 30°C - repassage doux",
    sizes: "XS, S, M, L, XL, XXL",
    inStock: true,
    isNew: true,
    isRare: true,
    bgColor: "#F3E5D8" // Beautiful soft warm peach/nude representing the top left category backdrop
  },
  {
    id: "prod-blender-vintage",
    name: "Blender Rétro 'Originel Taste'",
    subLabel: "Ligne Vintage Vanille & Acier Inoxydable",
    price: 119.00,
    category: "Électroménager",
    images: [
      "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Ajoutez une touche de design d'époque à votre cuisine avec ce blender rétro performant en inox vanillé.",
    fullDescription: "Inspiré par l meuble de design d'intérieur des années 60, ce blender de haute performance mêle un moteur ultra-robuste de 800W, des lames de broyage en titane et un pichet en verre thermorésistant. Parfait pour vos smoothies, soupes et crèmes d'un onctueux inégalable.",
    material: "Acier Inox Brossé, Verre Trempé Renforcé & Titane",
    fit: "Hauteur : 38.5cm || Contenance : 1.5L",
    care: "Pichet lavable au lave-vaisselle, socle autonettoyant humide",
    sizes: "Unique - Moteur 800 Watts",
    inStock: true,
    isNew: true,
    bgColor: "#EADFC9" // Soft warm camel beige matching the top right kitchen section background
  },
  {
    id: "prod-originel-pad",
    name: "Tablette Tactile 'Originel Pad 11'",
    subLabel: "Édition Minimaliste avec Stylet Inclus",
    price: 429.00,
    category: "Électroniques",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Un écran d'une clarté absolue avec son châssis en alliage brossé pour dessiner, travailler et naviguer d'un trait.",
    fullDescription: "Découvrez la tablette tactile ultime en édition graphite sombre, fournie avec son crayon réactif. Dotée d'un panneau IPS avec gestion automatique des couleurs de la pièce et d'une autonomie de 12 heures, elle s'adapte aussi bien aux designers graphiques qu'aux amoureux de technologie.",
    material: "Aluminium Anodisé Graphite, Verre Gorilla Glass",
    fit: "Écran LED 11.2\" || Poids plume de 460g",
    care: "Nettoyage à l'aide d'un chiffon microfibre sec, housse recommandée",
    sizes: "Stockage 128 Go, 256 Go",
    inStock: true,
    isRare: true,
    bgColor: "#DCE4EC" // Calm slate blue/grey matching the central electronic grid backdrop
  },
  {
    id: "prod-casque-melodie",
    name: "Casque ANC Sans-Fil 'Mélodie'",
    subLabel: "Réduction de Bruit Active Intelligente",
    price: 189.00,
    category: "Électroniques",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Un écrin acoustique en tissu doux et mousse à mémoire de forme pour une immersion sensorielle totale.",
    fullDescription: "Bâtissez votre bulle sonore n'importe où. Avec ses transducteurs de 40mm de précision et de multiples micros anti-bruit, profitez de vos fréquences préférées avec une netteté remarquable. Sa finition en cuir et beige clair incarne le chic fonctionnel d'aujourd'hui.",
    material: "Aluminium de grade aéronautique, Cuir d'agneau et Mousse",
    fit: "Ajustable avec arceau rembourré souple",
    care: "Utiliser un chiffon légèrement humide pour nettoyer les oreillettes",
    sizes: "Taille Unique Ajustable",
    inStock: true,
    isNew: false,
    bgColor: "#E5DEC9" // Warm beige sand representing the central headphones section
  },
  {
    id: "prod-pack-rouges",
    name: "Trio de Rouges à Lèvres Éclat",
    subLabel: "Set Collection Satinée Intense",
    price: 35.00,
    category: "Maquillage & Beauté",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Trois teintes pigmentées veloutées allant du corail chaud au rouge brique élégant pour sublimer votre moue.",
    fullDescription: "Ces rouges à lèvres hybrides associent la couvrance absolue d'un pigment pur au soin hydratant d'un baume crémeux de karité. Formule longue tenue et zéro transfert pour un confort durable et un sourire savoureux d'élégance originelle.",
    material: "Pigments minéraux naturels, Cire de Carnauba, Huile de Jojoba",
    fit: "Coffret de 3 variations (Original, Nude, Corail)",
    care: "Conserver à l'abri des rayons du soleil et des températures extrêmes",
    sizes: "Set Original - 3 x 4.5g",
    inStock: true,
    isNew: true,
    bgColor: "#EAD2C9" // Soft sand pink/peach matching the bottom left cosmetics compartment
  },
  {
    id: "prod-sneakers-pastel",
    name: "Baskets de Ville 'Originel Run'",
    subLabel: "Nuance Pastel d'Ébène et Corail",
    price: 89.00,
    category: "Chaussures & Accessoires",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Vos pieds méritent le confort crémeux avec ces baskets rétro colorées aux découpes géométriques pastel.",
    fullDescription: "La basket streetwear ultime pour parfaire votre style. Reprenant les inspirations d'entraînement des années 80 avec ses blocs de couleurs camel, rose corail et vert d'eau rafraîchissants, elle dispose d'une semelle amortissante EVA à mémoire absorbante.",
    material: "Suède d'Italie, Cuir Grainé et Semelle Intérieure EVA",
    fit: "Coupe Classique Confortable, cambrure parfaite",
    care: "Nettoyage avec brosse crêpe douce pour le suède",
    sizes: "36, 37, 38, 39, 40, 41, 42, 43, 44",
    inStock: true,
    isRare: true,
    isNew: true,
    bgColor: "#E6ECC9" // Tender green/sage backdrop mimicking the bottom sneaker card
  },
  {
    id: "prod-sac-originel",
    name: "Sacoche en Cuir 'Originel Bag'",
    subLabel: "Maroquinerie d'Orfèvre Bicolore",
    price: 145.00,
    category: "Chaussures & Accessoires",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Une pièce structurée signature en cuir bicolore avec détails et attaches dorées scintillantes.",
    fullDescription: "Ce sac à main en cuir de créateur présente un jeu sublime de blocs de couleurs contrastées : une face mandarine énergique et un rabat vert d'eau relaxant. Une œuvre d'art portable pour structurer toutes vos tenues quotidiennes.",
    material: "100% Cuir de Vachette pleine fleur, Boucles en Laiton doré",
    fit: "Largeur : 22cm || Hauteur : 16.5cm || Profondeur : 8.5cm",
    care: "Appliquer un lait protecteur pour cuir une fois par trimestre",
    sizes: "Taille Unique avec bandoulière réglable",
    inStock: true,
    isRare: true,
    bgColor: "#EADFC9" // Camel/cream tone of the right wing handbag bag backdrop
  },
  {
    id: "prod-sechoir-airflow",
    name: "Sèche-Cheveux Pro 'Airflow-X'",
    subLabel: "Coiffage Ionique Protecteur",
    price: 79.00,
    category: "Maquillage & Beauté",
    images: [
      "https://images.unsplash.com/photo-1620178119748-47337332a53c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Séchage ultra-rapide avec contrôle thermique continu pour un brushing brillant sans frisottis.",
    fullDescription: "La technologie au service du cheveu. Muni d'un moteur numérique de pointe de 110k tours par minute, il génère des millions d'ions négatifs capables d'hydrater la fibre capillaire tout en préservant l'éclat des cheveux. Livré avec ses embouts diffuseur et concentrateur aimantés.",
    material: "Alliage de polymère haute température et céramique protectrice",
    fit: "3 réglages de débit d'air doux, 4 niveaux de température",
    care: "Nettoyage périodique du filtre à air amovible à la base",
    sizes: "Cordon pro de 2.5m, embouts magnétiques inclus",
    inStock: true,
    bgColor: "#F5DCD5" // Peach-pink background mimicking the left aesthetic beauty styling tools panel
  },
  {
    id: "prod-enceinte-nomade",
    name: "Enceinte sans-fil 'Originel Sound'",
    subLabel: "Signature Acoustique Ronde & Bluetooth 5.2",
    price: 69.00,
    category: "Électroniques",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Une petite enceinte acoustique habillée d'un tissu texturé crème et camel pour emporter vos mélodies partout.",
    fullDescription: "Un son à 360° extrêmement équilibré dans un format minimaliste. Résistante aux éclaboussures et dotée de 15h d'autonomie, elle s'intègre avec goût sur votre bureau ou au bord d'une terrasse pour rythmer chaque instant de résonance pure.",
    material: "Aluminium anodisé, Tissu acoustique d'ameublement & Caoutchouc",
    fit: "Diamètre : 7.2cm || Hauteur : 10.5cm",
    care: "Dépoussiérer délicatement à l'aide d'un pinceau ou chiffon sec",
    sizes: "Puissance sonore 12W RMS",
    inStock: true,
    bgColor: "#EADFC9" // Beige taupe sand matching the speaker box in the center
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Éléonore Demars",
    role: "Acheteuse & Chasseuse d'Objets d'Art",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    quote: "J'aime tout ce qui est original. Recevoir l'Originel Pad et le sac bicolore dans d'aussi beaux emballages a été une expérience d'un raffinement rare. Les couleurs pastel ajoutent une chaleur inégalée chez moi !",
    rating: 5
  },
  {
    id: "t2",
    name: "Alexandre Moreau",
    role: "Directeur Créatif d'Intérieurs Paris",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "Le blender vanillé rétro sur ma table de bar fait un effet fou. Originel Shop est devenu mon point d'arrêt de prédilection dès que je cherche un objet avec ce supplément d'âme et de style vintage !",
    rating: 5
  },
  {
    id: "t3",
    name: "Sabrina Benali",
    role: "Styliste Culinaire & Conceptrice",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    quote: "Des couleurs, des silhouettes soignées, et un service au cordeau. Les baskets 'Originel Run' s'associent aussi bien pour courir les ateliers de création urbaine qu'avec mes tailleurs décontractés.",
    rating: 5
  }
];
