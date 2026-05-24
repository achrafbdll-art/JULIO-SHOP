import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, Heart, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: "slide-motifs",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1200",
    title: "Le chic géométrique. Découvrez l'inexorable.",
    subtitle: "DROP CAPSULE : ORIGINEL RÉTRO",
    badge: "SÉLECTION NOUVEAUTÉ DESIGN",
    highlight: "géométrique",
    description: "Une chemise de créateur légère à motifs géométriques vibrants, magnifiée par une palette de tons pêche et corail chauds.",
    tag: "Chemise Fluide 'Originel Rétro'",
    price: "49,00€",
    accentColor: "text-brand-red",
    badgeBg: "bg-brand-red/5 border-brand-red/10 text-brand-red",
    badgeIconColor: "text-brand-gold",
    btnText: "Voir la Chemise",
    link: "#produits"
  },
  {
    id: "slide-blender",
    image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?auto=format&fit=crop&q=80&w=1200",
    title: "Le goût rétro dans vos préparations saines.",
    subtitle: "ÉLECTROMÉNAGER VINTAGE VANILLE",
    badge: "L'ÉBÈNE DU DESIGN VINTAGE",
    highlight: "rétro",
    description: "Rehaussez votre cuisine avec notre blender vintage emblématique en acier brossé de couleur crème vanillée et au moteur ultra-robuste.",
    tag: "Blender Rétro 'Originel Taste'",
    price: "119,00€",
    accentColor: "text-brand-gold",
    badgeBg: "bg-brand-gold/10 border-brand-gold/20 text-brand-dark",
    badgeIconColor: "text-brand-red",
    btnText: "Voir le Blender",
    link: "#produits"
  },
  {
    id: "slide-pad",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1200",
    title: "L'équilibre parfait de la technologie tactile.",
    subtitle: "MINIMALISME GRAPHITE & CLARTÉ LED",
    badge: "TECHNOLOGIE INTUITIVE HAUT GAMME",
    highlight: "tactile",
    description: "Apportez une précision inégalée à vos croquis ou à vos lectures avec l'un des pads les plus fins du moment à finition graphite sombre.",
    tag: "Originel Pad 11 + Stylet",
    price: "429,00€",
    accentColor: "text-blue-600",
    badgeBg: "bg-blue-50 border-blue-200 text-blue-700",
    badgeIconColor: "text-blue-500",
    btnText: "Voir la Tablette",
    link: "#produits"
  },
  {
    id: "slide-cylinder",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1200",
    title: "Le bicolore d'une maroquinerie d'art.",
    subtitle: "CUIR DE VACHETTE ET BOUCLES OR",
    badge: "ÉDITION LIMITÉE EXTRASENSORIELLE",
    highlight: "maroquinerie",
    description: "Une silhouette structurée unique bicolore corail orange et vert d'eau, façonnée à la main et agrémentée de détails dorés étincelants.",
    tag: "Sacoche Cuir 'Originel Bag'",
    price: "145,00€",
    accentColor: "text-brand-red",
    badgeBg: "bg-brand-clay/10 border-brand-clay/20 text-brand-dark",
    badgeIconColor: "text-brand-gold",
    btnText: "S'offrir le Sac",
    link: "#produits"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Setup loop timer for auto-play
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 6000);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleGoTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentSlide = SLIDES[currentIndex];

  // Sliding variations for motion
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const textVariants = {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <section 
      id="accueil" 
      className="relative overflow-hidden bg-brand-cream pt-6 pb-16 lg:py-20 select-none animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Zellij Motif Pattern (Moroccan Mosaic Watermark) */}
      <div className="absolute inset-0 opacity-[0.05] text-brand-dark pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-zellij-patt" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Central star (8 points) */}
              <path d="M 60,30 L 71,51 L 95,51 L 77,65 L 85,87 L 60,74 L 35,87 L 43,65 L 25,51 L 49,51 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Intersecting squares rotating at 45 deg */}
              <rect x="35" y="35" width="50" height="50" transform="rotate(45 60 60)" fill="none" stroke="currentColor" strokeWidth="1" />
              <rect x="35" y="35" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
              {/* Outer octagram borders */}
              <polygon points="60,10 78,28 102,28 102,46 120,64 102,82 102,100 78,100 60,118 42,100 18,100 18,82 0,64 18,46 18,28 42,28" fill="none" stroke="currentColor" strokeWidth="1.2" />
              {/* Diagonal connecting lanes */}
              <line x1="0" y1="0" x2="120" y2="120" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3,3" />
              <line x1="120" y1="0" x2="0" y2="120" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3,3" />
              {/* Micro center dot */}
              <circle cx="60" cy="60" r="4.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-zellij-patt)" />
        </svg>
      </div>

      {/* Abstract dynamic background highlight spheres */}
      <div className="absolute top-0 right-0 -mr-20 h-[30rem] w-[30rem] rounded-full bg-brand-gold/10 blur-3xl opacity-70 pointer-events-none transition-all duration-1000 z-0" />
      <div className="absolute bottom-0 left-0 -ml-20 h-[30rem] w-[30rem] rounded-full bg-brand-red/5 blur-3xl opacity-70 pointer-events-none transition-all duration-1000 z-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[550px]">
          
          {/* Column 1: Animated Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                {/* Visual badge highlight */}
                <motion.div 
                  variants={textVariants}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold leading-none w-fit font-display ${currentSlide.badgeBg}`}
                >
                  <Sparkles className={`h-3.5 w-3.5 fill-current ${currentSlide.badgeIconColor}`} />
                  <span>{currentSlide.badge}</span>
                </motion.div>
                
                {/* Styled dynamic header */}
                <motion.h1 
                  variants={textVariants}
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-dark leading-[1.05]"
                >
                  {currentSlide.title.split(currentSlide.highlight)[0]}
                  <span className={`italic font-normal ${currentSlide.accentColor}`}>
                    {currentSlide.highlight}
                  </span>
                  {currentSlide.title.split(currentSlide.highlight)[1]}
                </motion.h1>
                
                {/* Description block */}
                <motion.p 
                  variants={textVariants}
                  className="font-sans text-sm sm:text-base text-brand-dark/70 max-w-xl leading-relaxed"
                >
                  {currentSlide.description}
                </motion.p>

                {/* Subtitle with active name and dynamic item badge */}
                <motion.div 
                  variants={textVariants}
                  className="p-3 bg-white/65 hover:bg-white border border-brand-dark/5 rounded-xl flex items-center justify-between gap-3 text-xs font-sans max-w-md transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                    <span className="text-brand-dark/50">L'échantillon active :</span>
                    <strong className="text-brand-dark font-display font-bold leading-none">{currentSlide.tag}</strong>
                  </div>
                  <span className="font-display font-black text-brand-red text-sm shrink-0">{currentSlide.price}</span>
                </motion.div>

                {/* Main e-commerce quick CTA triggers : Guess inspired sharp rectangles with bold uppercase tracking */}
                <motion.div 
                  variants={textVariants}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <a
                    href={currentSlide.link}
                    className="inline-flex items-center justify-center gap-2 rounded-none bg-brand-dark border-2 border-brand-dark px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-md transition-all hover:bg-white hover:text-brand-dark active:translate-y-0.5 font-display shrink-0"
                  >
                    {currentSlide.btnText}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#histoire"
                    className="inline-flex items-center justify-center gap-2 rounded-none border-2 border-brand-dark bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-dark hover:bg-brand-dark hover:text-white transition-all active:translate-y-0.5 font-display"
                  >
                    Notre Engagement Éco
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 2: Visual Dynamic Presentation Slideshow with controls */}
          <div className="lg:col-span-6 relative flex flex-col justify-center">
            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              
              {/* Back elegant structural card frames */}
              <div className="absolute inset-0 rounded-none bg-brand-gold/15 -rotate-2 scale-102 transition-all duration-300 pointer-events-none" />
              <div className="absolute inset-0 rounded-none bg-brand-red/5 rotate-1 scale-101 transition-all duration-300 pointer-events-none" />
              
              {/* Main Slideshow Frame */}
              <div className="relative overflow-hidden rounded-none shadow-2xl border border-brand-dark/10 aspect-[4/5] bg-white group">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.img
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.4 }
                    }}
                    src={currentSlide.image}
                    alt={currentSlide.tag}
                    className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Dark overlay for text on image base */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent pointer-events-none z-10" />

                {/* Glassmorphic interactive tags floating on top */}
                <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-white/90 rounded-none p-4 border border-brand-dark/10 flex items-center justify-between shadow-xl z-20">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-none bg-brand-cream shrink-0 border border-brand-dark/10">
                      <img
                        src={currentSlide.image}
                        alt="Mini item"
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h5 className="text-[9px] font-display font-black uppercase tracking-[0.15em] text-brand-red leading-none mb-1">
                        PIÈCE MAÎTRESSE ACTUELLE
                      </h5>
                      <p className="text-sm font-display font-bold uppercase tracking-wider text-brand-dark leading-none">
                        {currentSlide.tag}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] text-brand-dark/50 font-bold block uppercase font-display leading-none mb-1">
                      Drop Price
                    </span>
                    <span className="text-sm font-display font-black text-brand-red leading-none">
                      {currentSlide.price}
                    </span>
                  </div>
                </div>

                {/* Navigation Arrows inside Image Box */}
                <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={handlePrev}
                    id="slider-control-prev"
                    className="p-3 rounded-full bg-white/90 hover:bg-white text-brand-dark hover:text-brand-red shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    id="slider-control-next"
                    className="p-3 rounded-full bg-white/90 hover:bg-white text-brand-dark hover:text-brand-red shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Custom high-fashion indicators and timeline sliders */}
            <div className="flex justify-center items-center gap-3 mt-6">
              {SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleGoTo(idx)}
                    className="relative flex flex-col items-start cursor-pointer group"
                    aria-label={`Aller au slide ${idx + 1}`}
                  >
                    {/* Visual bar tracker */}
                    <div className="h-1 w-10 sm:w-14 rounded-none bg-brand-dark/15 overflow-hidden transition-all group-hover:bg-brand-dark/25">
                      {isActive && (
                        <motion.div
                          layoutId="activeSlideIndicator"
                          className="h-full bg-brand-red"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 6, ease: "linear" }}
                        />
                      )}
                    </div>
                    {/* Tiny text numbering */}
                    <span className={`text-[9px] font-display font-black mt-1.5 self-center ${isActive ? "text-brand-red" : "text-brand-dark/40"}`}>
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Micro Confidence Trust Pillars below the main slider */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-brand-dark/10 pt-12 mt-12">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-none bg-brand-dark/5 text-brand-dark shrink-0 border border-brand-dark/10 shadow-xs">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-dark font-display uppercase tracking-widest">Coton Organique GOTS</h4>
              <p className="text-xs text-brand-dark/60 font-sans mt-1 leading-relaxed">Haute tenue certifiée, respectueuse des sols et de l'humain.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-none bg-brand-dark/5 text-brand-dark shrink-0 border border-brand-dark/10 shadow-xs">
              <Heart className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-dark font-display uppercase tracking-widest">Envoi Climatisé Rapidité d'Élite</h4>
              <p className="text-xs text-brand-dark/60 font-sans mt-1 leading-relaxed">Colisage soigné sous 24/48h dans des tubes en métal collectors.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-none bg-brand-dark/5 text-brand-dark shrink-0 border border-brand-dark/10 shadow-xs">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-dark font-display uppercase tracking-widest">Série Premium Limitée</h4>
              <p className="text-xs text-brand-dark/60 font-sans mt-1 leading-relaxed">Pièces numérotées à 150 exemplaires par modèle. Pas de réassort.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
