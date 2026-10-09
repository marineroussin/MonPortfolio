"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Mail, Smartphone, ExternalLink, Image as ImageIcon, X, Play, 
  Code, PenTool, Download, GraduationCap, Search,
  Gamepad2, Sparkles, Cpu, Terminal, Globe, Wrench, 
  Info, Calendar, Briefcase, Paperclip, FileText,
  Lightbulb, Users, ShieldCheck, Target, Rocket, User, ChevronRight,
  Palette, MapPin, ChevronDown, CheckCircle2,
  LayoutGrid, Box, ArrowLeft, Code2
} from 'lucide-react';

const mesProjets = [
  {
    id: 1,
    titre: "Brain Breaker",
    categorie: "Jeux vidéo 2D",
    description: "Développement d'un jeu de casse-briques interactif avec gestion des collisions.",
    details: "Un projet de jeu vidéo axé sur la connaissance, savoir répondre à un maximum de question et tentez de finir premier !",
    tags: ["Unity", "C#", "Game Design"],
    image: "break.png",
    lienDemo: "/break-demo.gif",
    contexte: "Équipe",
    role: "Développement & Game Design"
  },
  {
    id: 2,
    titre: "Création de Pixel (VR)",
    categorie: "Jeux vidéo 3D",
    description: "Jeu VR. Dans un univers Rétro-néon, détruisez des ennemis avec une balle soumise à la gravité.",
    details: "Projet développé en équipe, sur 1mois. Le plus grand défi a été de rendre l'action nerveuse tout en garantissant le confort du joueur en réalité virtuelle.",
    tags: ["Unity", "VR", "C#"],
    image: "/Pixel.png.png",
    lienDemo: "/Projet Pixel.mp4",
    lienGDD: "/GameDesignPixel.pdf", // Le lien vers ton fichier PDF
    contexte: "Équipe",
    role: "Game Design, GDD, Rendu visuel & Intégration (Build)"
  },
  {
    id: 3,
    titre: "Make The Shoot",
    categorie: "Jeux vidéo 3D",
    description: "Recréation d'une borne d'arcade de basket frénétique en réalité augmentée.",
    details: "Développé en autonomie pour explorer mes capacitées. Le joueur doit viser physiquement ces cibles (les peluches ou les ballons) pour avoir un maximum de points",
    tags: ["Unity", "AR", "Mobile"],
    image: "/JeuDeTire.png",
    lienDemo: "/tirer-demo.mp4",
    contexte: "Solo",
    role: "Conception & Développement complet"
  },
  {
    id: 4,
    titre: "Blackjack 2D",
    categorie: "Jeux vidéo 2D",
    description: "Développement en autonomie d'un jeu de Blackjack en 2D sur Unreal Engine.",
    details: "Conçu et programmé en solo de A à Z. Ce projet m'a permis d'explorer les logiques de l'intelligence artificielle du croupier, la gestion des états de jeu, ainsi que l'interface utilisateur 2D sous Unreal Engine.",
    tags: ["Unreal Engine", "2D", "Blueprints", "IA"],
    image: "/blackjack.png",
    lienDemo: null,
    contexte: "Solo",
    role: "Conception & Développement complet"
  },
  {
    id: 5,
    titre: "Mastermind",
    categorie: "Jeux vidéo 2D",
    description: "Conception en solo d'une adaptation interactive du célèbre jeu de logique et de déduction.",
    details: "Développé en autonomie, ce projet met l'accent sur la logique algorithmique et l'ergonomie. Le joueur doit retrouver une combinaison secrète de couleurs en un minimum d'essais grâce à un système d'indices visuels.",
    tags: ["Logique", "C#", "UI Design"],
    image: "/Mastermind.png",
    lienDemo: null,
    contexte: "Solo",
    role: "Conception & Développement complet"
  },
  {
    id: 6,
    titre: "Site E-commerce",
    categorie: "Sites Web",
    description: "Conception complète d'une plateforme de vente de luxe au design rouge profond.",
    details: "Illustration de mes compétences en développement web et UI/UX Design. Création d'une interface utilisateur immersive, gestion du panier, et mise en place d'éléments de réassurance client.",
    tags: ["Web Dev", "UI/UX", "Figma"],
    image: "/site.png",
    lienDemo: "/site-demo.gif",
    contexte: "Solo",
    role: "Design UI/UX & Développement Web"
  },
  {
    id: 7,
    titre: "Musée Éducatif VR",
    categorie: "Jeux vidéo 3D",
    description: "Explorez librement un musée interactif mêlant culture artistique et gamification.",
    details: "Un jeu éducatif pensé pour découvrir des courants artistiques par la manipulation. Le joueur explore le musée en deux phases : une visite libre pour apprendre, et une phase de puzzle interactif pour valider ses connaissances.",
    tags: ["Unity 3D", "VR", "Level Design"],
    image: "/musee.png",
    lienDemo: null,
    contexte: "Équipe",
    role: "Développement (Programmation)"
  },
  {
    id: 8,
    titre: "Aventure Pirate 3D",
    categorie: "Jeux vidéo 3D",
    description: "Développement d'un jeu d'action-aventure 3D sur Unity dans un univers de flibustiers.",
    details: "Exploration d'îles tropicales, navigation en mer et combats dynamiques. Ce projet met en valeur la création d'environnements 3D, la gestion de la caméra et l'intégration de mécaniques de gameplay immersives.",
    tags: ["Unity 3D", "C#", "3D"],
    image: "/Pirate.png",
    lienDemo: "/pirate2-demo.mp4", 
    contexte: "Solo",
    role: "Conception & Développement complet"
  },
  {
    id: 9,
    titre: "Mon Portfolio",
    categorie: "Sites Web",
    description: "Conception et développement sur-mesure de mon site web personnel.",
    details: "Plutôt que d'utiliser un template pré-existant ou un CMS, j'ai décidé de créer cette plateforme de A à Z. Cela m'a permis de construire une identité visuelle qui me ressemble vraiment, d'intégrer des animations fluides et de repousser mes limites techniques.",
    tags: ["React", "Tailwind CSS", "UI/UX", "Web Dev"],
    image: "/moi2.png.png", 
    lienDemo: null, 
    contexte: "Solo",
    role: "Design UI/UX & Développement complet"
  }
];

const mesExperiences = [
  {
    id: 1,
    poste: "Caissière",
    entreprise: "Carrefour Ollioules Job étudiant",
    periode: "septembre 2025 - Présent",
    type: "job",
    description: "En parallèle de mes études d'ingénieur en numérique, je travaille 15 heures par semaine en tant que caissière. Ce poste renforce mes compétences en relation client, en gestion des priorités et en travail d'équipe.",
    detailsLong: "En tant que caissière étudiante, je gère le flux de clients lors des pics d'affluence (soir de semaine et week-end inclus), j'assure l'encaissement précis et rapide des articles, et je réponds aux sollicitations des clients. Cette expérience m'a appris à garder mon calme sous la pression et à développer une grande capacité d'adaptation au quotidien.",
    image: "/Carrefour.png",
    tags: ["Gestion du temps", "Pression", "Contacts clients"],
    impact: "15h / semaine en parallèle des cours",
    lecon: "Sang-froid, rigueur sous pression et maîtrise de la relation client."
  },
  {
    id: 3,
    poste: "Global Game Jam",
    entreprise: "Global Game Jam VIE/VIA - Toulon",
    periode: "janvier 2024 - 48h",
    type: "tech",
    description: "Événement international de 48 heures pour concevoir et développer un jeu vidéo autour d’un thème commun. Challenge de créativité, de code sous pression et de cohésion de groupe.",
    detailsLong: "Une expérience intense de 48 heures non-stop. Notre équipe a dû brainstormer, concevoir, développer et débugger un jeu fonctionnel de A à Z. Ce marathon a mis à l'épreuve ma capacité à coder rapidement, à faire des compromis sur le design pour respecter la deadline, et à maintenir un bon esprit d'équipe malgré la fatigue.",
    image: "/gamejam.png",
    tags: ["Unity", "Game Design", "Gestion du stress", "Créativité"],
    impact: "48h chrono / 1 jeu fonctionnel livré",
    lecon: "Agilité maximale, prototypage rapide et cohésion d'équipe sous deadline."
  },
  {
    id: 4,
    poste: "Vendeuse en restauration",
    entreprise: "Simone CDI-Job étudiant - Bandol",
    periode: "janvier 2024 - septembre 2025",
    type: "job",
    description: "Travail de week-end en boulangerie. Accueil, service client, encaissement en autonomie, et mise en rayon en veillant à l'attractivité des produits.",
    detailsLong: "En contact direct avec la clientèle, j'ai assuré la vente, la gestion de la caisse et la mise en place des vitrines. J'ai développé un grand sens de l'autonomie et de la rigueur, notamment lors de l'ouverture et de la fermeture de la boutique.",
    image: "/simone.png",
    tags: ["Relation client", "Autonomie", "Sens de l'organisation"],
    impact: "Autonomie complète & gestion de boutique",
    lecon: "Sens des responsabilités et sens aigu de l'esthétique commerciale."
  },
  {
    id: 5,
    poste: "Préparatrice de commande",
    entreprise: "Auchan Drive - La Seyne-sur-Mer",
    periode: "septembre 2023 - décembre 2023",
    type: "job",
    description: "Première expérience professionnelle acquise lors de ma première année universitaire. Développement de l'autonomie et de la rigueur opérationnelle.",
    detailsLong: "Au sein du Drive, j'étais chargée de rassembler rapidement et avec précision les articles commandés par clients, tout en respectant les normes d'hygiène et la chaîne du froid. Un poste très physique qui m'a inculqué la rigueur et l'efficacité opérationnelle.",
    image: "/auchan.png",
    tags: ["Autonomie", "Rapidité", "Organisation"],
    impact: "Cadence et efficacité logistique",
    lecon: "Rigueur opérationnelle et respect strict des process de qualité."
  }
];

const technologies = ["UNITY", "UNREAL ENGINE", "C#", "C++", "BLENDER", "GAME DESIGN", "UI/UX", "PYTHON", "BLUEPRINTS", "JAVASCRIPT", "HTML/CSS", "PHP"];

const hardSkills = [
  { categorie: "Moteurs de Jeu", outils: ["Unity 3D", "Unreal Engine 5"] },
  { categorie: "Développement", outils: ["C#", "C++", "Python", "JavaScript", "PHP", "HTML", "CSS"] },
  { categorie: "Design & UI/UX", outils: ["Figma", "Blender", "Design d'interfaces"] },
  { categorie: "Méthodes & Outils", outils: ["Game Design", "Level Design", "Git/GitHub", "VR/AR", "Trello", "Ezgif"] }
];

const mesAtouts = [
  {
    id: "creativite",
    titre: "Créativité & Résolution",
    icon: <Lightbulb size={28} />,
    description: "Je ne me contente pas de coder, je cherche la solution la plus élégante. Que ce soit pour contourner une contrainte technique en VR ou imaginer une mécanique de jeu fun. Et j'aime aussi beaucoup développer de nouveaux sites Web permettant de découvrir de plus en plus.",
    preuve: "Contournement des contraintes de mouvement sur Pixel VR"
  },
  {
    id: "equipe",
    titre: "Esprit d'Équipe",
    icon: <Users size={28} />,
    description: "L'habitude de communiquer, de faire des compromis et de documenter mon travail pour mes collègues afin d'avancer efficacement sur des projets communs.",
    preuve: "Global Game Jam (48h sous pression), Boulangerie Simone"
  },
  {
    id: "rigueur",
    titre: "Rigueur UI/UX",
    icon: <ShieldCheck size={28} />,
    description: "Souci du détail maladif sur les alignements, les animations, les retours visuels (Game Feel) et la clarté globale de l'interface utilisateur. J'aime quand c'est beau, propre et soigneux.",
    preuve: "Site E-commerce & Mastermind"
  },
  {
    id: "autonomie",
    titre: "Autonomie & Adaptabilité",
    icon: <Rocket size={28} />,
    description: "Capable de me former rapidement à un nouveau moteur (Unreal, Unity) ou framework, et de mener un projet de la page blanche jusqu'au déploiement.",
    preuve: "Projets Blackjack & Make The Shoot (S), Site : Mon portfolio"
  }
];

export default function Home() {
  const [categorieActive, setCategorieActive] = useState<string | null>(null);
  const [projetOuvert, setProjetOuvert] = useState<any>(null);
  const [demoOuverte, setDemoOuverte] = useState(false);
  const [experienceOuverte, setExperienceOuverte] = useState<any>(null);
  const [atoutActif, setAtoutActif] = useState(mesAtouts[0]);
  const [objectifOuvert, setObjectifOuvert] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useEffect(() => {
    const checkScrollTop = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setProjetOuvert(null);
        setExperienceOuverte(null);
        setDemoOuverte(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const projetsFiltres = categorieActive === "Tous" 
    ? mesProjets 
    : mesProjets.filter(projet => projet.categorie === categorieActive);

  const rubriques = [
    { id: "Tous", titre: "Tous mes projets", icon: <LayoutGrid size={40} />, count: mesProjets.length, desc: "Explorez l'intégralité de mon portfolio créatif." },
    { id: "Jeux vidéo 3D", titre: "Jeux vidéo 3D", icon: <Box size={40} />, count: mesProjets.filter(p => p.categorie === "Jeux vidéo 3D").length, desc: "Expériences immersives et réalités virtuelles." },
    { id: "Jeux vidéo 2D", titre: "Jeux vidéo 2D", icon: <Gamepad2 size={40} />, count: mesProjets.filter(p => p.categorie === "Jeux vidéo 2D").length, desc: "Mécaniques de jeu, physique et level design." },
    { id: "Sites Web", titre: "Sites Web", icon: <Globe size={40} />, count: mesProjets.filter(p => p.categorie === "Sites Web").length, desc: "Développement web front-end et design UI/UX." }
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF9] relative overflow-hidden font-sans text-stone-800 transition-colors duration-500 md:cursor-none selection:bg-[#C18765]/30">
      
      {/* BARRE DE PROGRESSION */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#C18765] z-[100] origin-left shadow-[0_0_15px_rgba(193,135,101,0.8)]" style={{ scaleX }} />

      {/* GRILLE 3D FOND */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C18765 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      {/* CURSEUR PERSONNALISÉ */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#C18765] pointer-events-none z-[110] hidden md:flex items-center justify-center shadow-[0_0_15px_rgba(193,135,101,0.5)]"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16, scale: isHovering ? 2.5 : 1, backgroundColor: isHovering ? "rgba(193,135,101,0.1)" : "transparent", borderColor: isHovering ? "rgba(193,135,101,0.4)" : "rgba(193,135,101,1)" }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.1 }}
      >
        <motion.div className="w-1.5 h-1.5 bg-[#C18765] rounded-full" animate={{ scale: isHovering ? 0 : 1 }} />
      </motion.div>

      {/* NAVIGATION */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center py-6 px-8 md:px-16 lg:px-24 w-full bg-[#FDFBF9]/80 backdrop-blur-xl border-b border-[#E8DCCB]/60 shadow-sm transition-colors duration-500 mt-1.5"
      >
        <span className="font-extrabold text-3xl md:text-4xl tracking-tighter text-stone-800">marineroussin<span className="text-[#C18765] animate-pulse">_</span></span>
        <div className="flex items-center gap-6 lg:gap-10">
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm lg:text-base font-bold text-stone-500 uppercase tracking-widest items-center">
            <a href="#projets" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="hover:text-[#C18765] transition-colors px-2 py-1">Projets</a>
            <a href="#experiences" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="hover:text-[#C18765] transition-colors px-2 py-1">Expériences</a>
            <a href="#parcours" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="hover:text-[#C18765] transition-colors px-2 py-1">Parcours</a>
            <a href="#apropos" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="hover:text-[#C18765] transition-colors px-2 py-1">À propos</a>
            <a href="#contact" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="hover:text-[#C18765] transition-colors px-2 py-1">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* SECTION 1 : HERO (DESIGN DOSSIER LARGEMENT OPTIMISÉ POUR GRANDS ÉCRANS) */}
      <div className="relative flex justify-center px-4 md:px-8 lg:px-12 pt-32 pb-20 w-full min-h-screen items-center overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[90rem] flex flex-col relative z-20 mt-10"
        >
          {/* DOSSIER TABS */}
          <div className="flex items-end relative z-10 w-full h-16 md:h-20">
             <div className="w-48 md:w-64 h-full bg-[#E8DCCB] rounded-t-[2rem] flex items-center px-6 gap-3 z-20 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] relative">
                <Sparkles size={20} className="text-[#3A2A22]" />
                <span className="font-bold text-[#3A2A22] uppercase tracking-widest text-xs md:text-sm">Portfolio</span>
                <div className="absolute -bottom-2 left-0 right-0 h-4 bg-[#E8DCCB] z-30"></div>
             </div>
             
             <div className="absolute left-32 md:left-48 bottom-0 w-40 md:w-48 h-12 md:h-14 bg-[#8E5A3B] rounded-t-2xl z-10"></div>
             <div className="absolute right-4 md:right-8 bottom-4 font-black text-stone-400 text-lg md:text-2xl tracking-widest">2026-2027</div>
          </div>

          {/* CORPS DU DOSSIER */}
          <div className="relative z-20 w-full bg-[#3A2A22] rounded-b-[2rem] md:rounded-b-[3rem] rounded-tr-[2rem] md:rounded-tr-[3rem] rounded-tl-md shadow-2xl p-8 md:p-16 lg:p-20 overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center">
             
             <Paperclip size={100} strokeWidth={1} className="absolute top-10 right-10 md:right-24 text-white/20 -rotate-12 pointer-events-none" />
             <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-[#C18765] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

             <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
                
                {/* COLONNE GAUCHE */}
                <div className="hidden lg:flex lg:col-span-3 flex-col gap-8 opacity-70 pl-4">
                   <div className="flex items-center gap-4 text-[#E8DCCB]">
                     <div className="w-10 h-10 rounded-full border border-[#E8DCCB]/30 flex items-center justify-center"><MapPin size={18}/></div>
                     <span className="font-semibold text-sm uppercase tracking-widest">France / Distanciel</span>
                   </div>
                   <div className="flex items-center gap-4 text-[#E8DCCB]">
                     <div className="w-10 h-10 rounded-full border border-[#E8DCCB]/30 flex items-center justify-center"><Calendar size={18}/></div>
                     <span className="font-semibold text-sm uppercase tracking-widest">Disponibilité stage : Février 2027 (6 mois)</span>
                   </div>
                </div>

                {/* COLONNE CENTRALE */}
                <div className="col-span-1 lg:col-span-6 flex flex-col items-center text-center relative z-20 pt-4">
                   <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-[#FDFBF9] mb-2 leading-none uppercase">
                      Marine Roussin
                   </h1>
                   
                   <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C18765] via-[#E6B869] to-[#C18765] bg-[length:200%_auto] animate-gradient tracking-tight mt-2 mb-6">
                      Développeuse & Game Designer
                   </h2>
                   
                   <p className="mt-4 text-xl md:text-2xl text-[#E8DCCB] font-medium max-w-lg leading-relaxed">
                      Je fusionne la <strong className="text-white">logique du code</strong> et la <strong className="text-white">sensibilité du design</strong>.
                   </p>

                   <div className="mt-12 flex flex-col sm:flex-row gap-5">
                      <a href="#projets" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="bg-[#E8DCCB] text-[#3A2A22] px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(232,220,203,0.3)] cursor-none text-sm md:text-base">
                        Voir mes Projets
                      </a>
                      <a href="/CVmarine.pdf" download="CVmarine.pdf" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="bg-transparent border-2 border-[#E8DCCB] text-[#E8DCCB] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#E8DCCB]/10 transition-colors flex items-center justify-center gap-2 cursor-none text-sm md:text-base">
                        <Download size={20} /> Télécharger mon CV
                      </a>
                   </div>
                   
                   <div className="mt-8 flex justify-center gap-4 flex-wrap">
                      <a href="https://www.linkedin.com/in/marine-roussin07/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="text-[#E8DCCB] hover:text-white transition-colors cursor-none opacity-80 hover:opacity-100 flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider">
                        <Globe size={18} /> Voir mon profil LinkedIn
                      </a>
                      <span className="text-[#E8DCCB]/40">•</span>
                      <a href="https://github.com/marineroussin" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="text-[#E8DCCB] hover:text-white transition-colors cursor-none opacity-80 hover:opacity-100 flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider">
                        <Code2 size={18} /> GitHub
                      </a>
                   </div>
                </div>

                {/* COLONNE DROITE (DESSIN POLAROID) */}
                <div className="hidden lg:flex lg:col-span-3 justify-end items-center relative z-20 pr-4">
                   <motion.div
                     animate={{ y: [-8, 8, -8], rotate: [3, 4, 3] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                     className="w-56 h-72 xl:w-72 xl:h-80 bg-[#FDFBF9] p-3 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-300 relative group"
                   >
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-md rotate-[-3deg] shadow-sm z-30"></div>
                      
                      <div className="w-full h-full relative overflow-hidden rounded-lg border border-stone-200">
                        <img 
                          src="/moi2.png.png" /* À REMPLACER PAR TON FICHIER DESSIN */
                          alt="Illustration de Marine" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                      
                      <div className="absolute -bottom-8 right-2 text-white/40 font-bold tracking-widest text-sm uppercase">Digital & Art</div>
                   </motion.div>
                </div>

             </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Scroll</span>
          <div className="w-6 h-10 border-2 border-stone-300 rounded-full flex justify-center p-1">
            <motion.div animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 h-1.5 bg-[#C18765] rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* SECTION 2 : PROJETS */}
      <div id="projets" className="relative z-10 py-24 px-8 md:px-16 lg:px-24 w-full bg-white/90 backdrop-blur-xl border-y border-[#E8DCCB] shadow-xl transition-colors duration-500">
        <h2 className="text-5xl md:text-7xl font-black text-stone-800 mb-6 text-center tracking-tighter uppercase relative z-30">Voici Mes Créations</h2>
        <p className="text-xl text-stone-500 font-medium text-center mb-16 relative z-30">Explorez mon univers à travers mes différentes compétences</p>
        
        <AnimatePresence mode="wait">
          {!categorieActive ? (
            <motion.div 
              key="categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative z-30 max-w-7xl mx-auto flex flex-col gap-16"
            >
              {/* VUE 1 : LES 4 GRANDES CARTES DE CATÉGORIES */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {rubriques.map((rubrique) => (
                  <button
                    key={rubrique.id}
                    onClick={() => setCategorieActive(rubrique.id)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="group flex flex-col items-center text-center bg-[#FDFBF9] border-2 border-[#E8DCCB] hover:border-[#C18765] rounded-[2.5rem] p-10 shadow-lg hover:shadow-[0_20px_40px_rgba(193,135,101,0.15)] transition-all duration-300 cursor-none relative overflow-hidden focus:outline-none"
                  >
                     <div className="absolute inset-0 bg-gradient-to-b from-[#C18765]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     
                     <div className="w-24 h-24 bg-[#F5F0EA] group-hover:bg-[#C18765] text-[#C18765] group-hover:text-white rounded-[2rem] rotate-3 group-hover:rotate-0 flex items-center justify-center mb-8 transition-all duration-300 shadow-sm relative z-10">
                       {rubrique.icon}
                     </div>
                     
                     <h3 className="text-2xl font-black text-stone-800 mb-4 group-hover:text-[#C18765] transition-colors relative z-10 uppercase tracking-tighter">{rubrique.titre}</h3>
                     <p className="text-stone-500 mb-8 font-medium leading-relaxed relative z-10">{rubrique.desc}</p>
                     
                     <div className="mt-auto px-5 py-2.5 bg-white text-stone-700 text-sm font-bold uppercase tracking-widest rounded-xl border border-[#E8DCCB] group-hover:border-[#C18765] transition-colors relative z-10">
                       {rubrique.count} Projets
                     </div>
                  </button>
                ))}
              </div>

              {/* ENCART PROJET À LA UNE */}
              <div 
                onClick={() => setProjetOuvert(mesProjets[1])} // Ouvre Pixel VR par défaut
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="w-full bg-[#3A2A22] rounded-[3rem] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 shadow-[0_30px_60px_rgba(0,0,0,0.2)] relative overflow-hidden group cursor-none border border-[#4A3C31]"
              >
                <div className="absolute -right-32 -top-32 w-96 h-96 bg-[#C18765] blur-[120px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>

                <div className="w-full lg:w-1/2 aspect-video rounded-[2rem] overflow-hidden relative border border-white/10 shadow-2xl">
                  <img src={mesProjets[1].image} alt={mesProjets[1].titre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="absolute top-5 left-5 bg-[#C18765] text-white px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg backdrop-blur-md">
                    <Sparkles size={16} /> Projet à la une
                  </div>
                  <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-10">
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight tracking-tighter">
                    {mesProjets[1].titre}
                  </h3>
                  <p className="text-[#E8DCCB] text-lg md:text-xl leading-relaxed mb-8 opacity-90 line-clamp-3">
                    {mesProjets[1].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {mesProjets[1].tags.map((tag: string) => (
                      <span key={tag} className="px-4 py-2 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-white/20 backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-3 bg-[#E8DCCB] text-[#3A2A22] px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(232,220,203,0.2)]">
                    <Play size={20} fill="currentColor" /> Voir ce projet avec plus de détails
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* VUE 2 : LA GRILLE DES PROJETS SÉLECTIONNÉS */
            <motion.div 
              key="projets"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative z-30 max-w-[90rem] mx-auto min-h-[60vh]"
            >
              <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-[#E8DCCB] pb-8">
                <button 
                  onClick={() => setCategorieActive(null)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="flex items-center gap-3 bg-white border-2 border-[#E8DCCB] hover:border-[#C18765] hover:text-[#C18765] px-6 py-3 rounded-full font-bold uppercase tracking-widest transition-all cursor-none shadow-sm group"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Retour aux univers
                </button>
                <h3 className="text-3xl font-black text-stone-800 mt-6 md:mt-0 uppercase tracking-tighter text-[#C18765]">
                  {categorieActive === "Tous" ? "Tous mes projets" : categorieActive}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {projetsFiltres.map((projet) => {
                  const isSolo = projet.contexte === "Solo";

                  return (
                    <motion.button 
                      key={projet.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}
                      onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onClick={() => setProjetOuvert(projet)}
                      className="group bg-white rounded-3xl border-2 border-[#E8DCCB] hover:border-[#C18765] overflow-hidden flex flex-col shadow-lg hover:shadow-[0_20px_40px_rgba(193,135,101,0.3)] transition-all cursor-none text-left focus:outline-none"
                    >
                      <div className="h-64 w-full bg-stone-900 relative overflow-hidden flex items-center justify-center">
                        <img src={projet.image} alt={projet.titre} className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 opacity-100 group-hover:opacity-0" onError={(e) => e.currentTarget.style.display = 'none'} />
                        {projet.lienDemo && (
                          <img src={projet.lienDemo} alt={`Démo ${projet.titre}`} className="absolute inset-0 w-full h-full object-cover z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100" onError={(e) => e.currentTarget.style.display = 'none'} />
                        )}
                        <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-[#C18765] rounded-full flex items-center justify-center text-white transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100 shadow-[0_0_20px_rgba(193,135,101,0.6)]">
                            {projet.id === 9 ? <Info size={32} fill="currentColor" className="opacity-80" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                          </div>
                        </div>
                        <div className="absolute top-4 left-4 z-30 flex gap-2">
                          <span className={`px-3 py-1 text-xs font-black uppercase tracking-wider rounded-md backdrop-blur-md border ${isSolo ? 'bg-white/90 text-stone-800 border-white/50' : 'bg-stone-900/80 text-white border-stone-700'}`}>
                            {isSolo ? '🕹 Projet Solo' : '🤝 En Équipe'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-1 relative bg-white z-30 w-full border-t border-[#E8DCCB]">
                        <div className="flex flex-wrap gap-2 mb-5">
                          {projet.tags.slice(0, 3).map((tag: string) => (
                            <span key={tag} className="px-3 py-1 bg-[#F5F0EA] text-[#C18765] text-xs font-black uppercase tracking-wider rounded-md border border-[#E8DCCB]">{tag}</span>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-[#C18765] transition-colors leading-tight">{projet.titre}</h3>
                        <p className="text-stone-600 text-sm mb-8 flex-1 leading-relaxed line-clamp-3">{projet.description}</p>
                        
                        <div className="w-full bg-[#FDFBF9] group-hover:bg-[#C18765] group-hover:text-white border-2 border-[#E8DCCB] group-hover:border-[#C18765] text-stone-700 py-3 rounded-xl flex items-center justify-center gap-3 transition-colors font-bold text-sm uppercase tracking-wider">
                          {projet.id === 9 ? <><Info size={18} /> Explications de ce choix</> : projet.categorie.includes("Jeux") ? <><Gamepad2 size={18} /> Jouer / Voir</> : projet.categorie === "Sites Web" ? <><ExternalLink size={18} /> Visiter le site</> : <><Info size={18} /> Détails</>}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SECTION EXPERIENCES */}
      <div id="experiences" className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-32 bg-[#F5F0EA] border-b border-[#E8DCCB] overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto relative z-30">
          <h2 className="text-5xl md:text-7xl font-black text-stone-800 mb-28 uppercase tracking-tighter text-center relative inline-block left-1/2 -translate-x-1/2 bg-white px-10 py-4 rounded-2xl border-2 border-[#E8DCCB] shadow-sm">
            Expériences Pro
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-2 bg-[#C18765] rounded-full"></span>
          </h2>
          
          <div className="absolute left-8 md:left-1/2 top-[180px] bottom-0 w-1.5 bg-gradient-to-b from-[#E8DCCB] via-[#C18765]/40 to-[#E8DCCB] md:-translate-x-1/2 rounded-full z-0"></div>

          <div className="space-y-16 md:space-y-28 relative z-10">
            {mesExperiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isTech = exp.type === "tech";

              return (
                <motion.div 
                  key={exp.id} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-100px" }} 
                  transition={{ duration: 0.6, delay: 0.1 }} 
                  onMouseEnter={() => setIsHovering(true)} 
                  onMouseLeave={() => setIsHovering(false)} 
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full group ${isLeft ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:flex md:w-[47%] items-center justify-center p-6">
                    <div className="text-center group-hover:scale-105 transition-transform duration-300">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#C18765]/10 text-[#C18765] mb-3">
                        <Sparkles size={28} />
                      </div>
                      <span className="block text-2xl lg:text-3xl font-bold text-stone-600 tracking-tight mb-1">{exp.impact}</span>
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Impact & Enjeu</span>
                    </div>
                  </div>

                  <div className={`absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-white border-[6px] flex items-center justify-center -translate-x-[18px] md:-translate-x-1/2 mt-8 md:mt-0 group-hover:scale-125 transition-all duration-300 z-20 shadow-lg ${isTech ? 'border-[#E6B869] text-[#C18765]' : 'border-[#C18765] text-transparent'}`}>
                    {isTech && <Gamepad2 size={16} fill="currentColor" />}
                  </div>

                  <div className={`w-full md:w-[47%] pl-20 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                    <div className={`bg-white/95 backdrop-blur-sm p-10 md:p-12 rounded-[2.5rem] border-2 transition-all duration-300 shadow-sm group-hover:-translate-y-2 relative overflow-hidden flex flex-col h-full ${isTech ? 'border-[#E6B869]/60 group-hover:border-[#E6B869] group-hover:shadow-[0_15px_30px_rgba(230,184,105,0.2)]' : 'border-[#E8DCCB] group-hover:border-[#C18765] group-hover:shadow-2xl'}`}>
                      
                      <div className="relative z-10 flex-1">
                        <span className={`text-sm md:text-base font-black uppercase tracking-widest mb-4 flex items-center gap-2 ${isTech ? 'text-[#E6B869]' : 'text-[#C18765]'} ${isLeft ? 'md:justify-end' : ''}`}>
                          {isTech && <Code size={18} />} {exp.periode}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">{exp.poste}</h3>
                        <h4 className="text-stone-500 font-semibold mb-6 text-xl">{exp.entreprise}</h4>
                        <p className="text-stone-600 text-lg md:text-xl leading-relaxed mb-8">{exp.description}</p>
                        
                        <div className={`flex flex-wrap gap-2.5 mb-8 ${isLeft ? 'md:justify-end' : 'justify-start'}`}>
                          {exp.tags.map((tag) => (
                            <span key={tag} className={`px-3.5 py-1.5 text-sm font-black uppercase tracking-wider rounded-md border ${isTech ? 'bg-[#FDF8F0] text-[#D4A373] border-[#E6B869]/50' : 'bg-[#F5F0EA] text-[#C18765] border-[#E8DCCB]'}`}>{tag}</span>
                          ))}
                        </div>
                        
                        <div className={`flex ${isLeft ? 'md:justify-end' : 'justify-start'}`}>
                          <button onClick={() => setExperienceOuverte(exp)} className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 border-2 cursor-none text-sm ${isTech ? 'bg-white text-[#D4A373] border-[#E6B869]/50 hover:bg-[#E6B869] hover:text-white' : 'bg-white text-[#C18765] border-[#E8DCCB] hover:bg-[#C18765] hover:text-white'}`}>
                            <Info size={18} /> Détails du job
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* SECTION PARCOURS ACADÉMIQUE */}
      <div id="parcours" className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-32 bg-white border-b border-[#E8DCCB] overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto relative z-30">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="w-full rounded-[2.5rem] bg-stone-900 p-1 shadow-[0_20px_50px_rgba(193,135,101,0.2)] mb-32 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C18765] via-[#E6B869] to-[#C18765] animate-gradient bg-[length:200%_auto] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative h-full w-full bg-stone-900 rounded-[2.3rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
              <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#C18765] rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse pointer-events-none"></div>
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#E6B869] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10 lg:w-2/3">
                 <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-8 backdrop-blur-md shadow-sm">
                   <div className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                   </div>
                   <span className="text-white text-xs font-bold tracking-widest uppercase">Disponible pour des échanges, entretiens, autres :)</span>
                 </div>
                 
                 <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.15] tracking-tight">
                   Prête à rejoindre votre équipe pour un <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C18765] to-[#E6B869]">STAGE de 6 mois</span>
                 </h3>
                 <p className="text-stone-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                   Du <strong className="text-white">Game Design</strong> au <strong className="text-white">Développement Web & UI/UX</strong>, je cherche une opportunité (France ou distanciel).
                 </p>
              </div>
              
              <div className="relative z-10 lg:w-1/3 flex justify-center lg:justify-end mt-4 lg:mt-0">
                 <a href="#contact" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="relative inline-flex group cursor-none">
                   <div className="absolute transition-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-[#C18765] via-[#E6B869] to-[#C18765] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-gradient bg-[length:200%_auto]"></div>
                   
                   <button className="relative inline-flex items-center justify-center gap-4 px-10 py-6 text-lg md:text-xl font-black text-stone-900 uppercase tracking-widest transition-all duration-300 bg-white rounded-full focus:outline-none focus:ring-4 focus:ring-[#C18765]/50 group-hover:scale-105">
                     <Sparkles size={24} className="text-[#C18765] animate-pulse" />
                     Me recruter
                   </button>
                 </a>
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-stone-800 mb-24 uppercase tracking-tighter text-center relative inline-block left-1/2 -translate-x-1/2">
            Mon Parcours<span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-2 bg-[#C18765] rounded-full"></span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-[#E8DCCB] ml-4 md:ml-12 py-4 space-y-12 md:space-y-16">
              {[
                { 
                  periode: "2024 - Actuellement", 
                  titre: "Bachelor Ingénieur Numérique (3ème année)", 
                  sousTitre: "Spécialisation Développement & Game Design", 
                  details: "Cursus intensif combinant l'exigence de l'ingénierie logicielle et la créativité du Game Design. Apprentissage par la pratique au travers de projets concrets, de la conception d'architectures techniques jusqu'au polissage de l'expérience utilisateur (Game Feel).",
                  lieu: "ISEN Méditerranée, Campus de Marseille (13)",
                  icon: <Code size={20} />,
                  pointsCles: ["Prototypage Rapide", "Architecture C# / Unity", "Méthodes Agiles (Scrum)", "Réalité Virtuelle (VR)"]
                },
                { 
                  periode: "2023 - 2024", 
                  titre: "Faculté d'Ingénieur", 
                  sousTitre: "Début de cycle universitaire", 
                  details: "Fondamentaux solides en sciences de l'ingénieur. Apprentissage des bases de l'algorithmique, de la logique de programmation et de la gestion de bases de données relationnelles.",
                  lieu: "Faculté des Sciences, La Garde (83)",
                  icon: <Terminal size={20} />,
                  pointsCles: ["Algorithmique", "Bases de données", "Logique Mathématique"]
                },
                { 
                  periode: "2020 - 2023", 
                  titre: "Baccalauréat STI2D", 
                  sousTitre: "Spécialités : Maths, Physique & Architecture", 
                  details: "Études axées sur l'innovation technologique et le respect de l'environnement. Réalisation d'un projet technologique complet en équipe pour l'épreuve finale.",
                  lieu: "Lycée Paul Langevin, La Seyne-sur-Mer (83)",
                  icon: <GraduationCap size={20} />,
                  pointsCles: ["Développement Durable", "Physique appliquée", "Projet de fin d'études"]
                }
              ].map((formation, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, margin: "-100px" }} 
                  transition={{ duration: 0.5, delay: index * 0.2 }} 
                  onMouseEnter={() => setIsHovering(true)} 
                  onMouseLeave={() => setIsHovering(false)} 
                  className="relative pl-10 md:pl-16 group"
                >
                  <div className="absolute -left-[22px] top-8 w-10 h-10 bg-white border-4 border-[#E8DCCB] group-hover:border-[#C18765] rounded-full flex items-center justify-center transition-all duration-300 shadow-sm z-10 group-hover:scale-110">
                    <div className="text-[#E8DCCB] group-hover:text-[#C18765] transition-colors">{formation.icon}</div>
                  </div>
                  <div className="absolute left-[-2px] top-16 bottom-[-4rem] md:bottom-[-5rem] w-[4px] bg-[#C18765] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0"></div>
                  
                  <div className="bg-[#FDFBF9] p-8 md:p-10 rounded-[2rem] border-2 border-[#E8DCCB] group-hover:border-[#C18765] transition-all duration-300 shadow-sm group-hover:shadow-xl relative overflow-hidden cursor-none">
                    <div className="absolute -bottom-8 -right-8 text-[#C18765] opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-500 pointer-events-none transform scale-150">
                      {formation.icon}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                        <span className="inline-flex items-center justify-center bg-[#F5F0EA] text-[#C18765] font-black text-xs md:text-sm px-5 py-2.5 rounded-xl uppercase tracking-widest border border-[#E8DCCB] shadow-sm">
                          {formation.periode}
                        </span>
                        <div className="flex items-center gap-2 text-stone-500 font-bold text-xs md:text-sm bg-white px-4 py-2 rounded-lg border border-[#E8DCCB] shadow-sm">
                          <MapPin size={16} className="text-[#C18765]" />
                          {formation.lieu}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 group-hover:text-[#C18765] transition-colors">{formation.titre}</h3>
                      <h4 className="text-xl font-bold text-stone-500 mb-6">{formation.sousTitre}</h4>
                      <p className="text-stone-600 text-lg md:text-xl leading-relaxed mb-6">{formation.details}</p>
                      
                      {formation.pointsCles && (
                        <div className="flex flex-wrap gap-2.5 pt-6 border-t border-[#E8DCCB]/60">
                          {formation.pointsCles.map(point => (
                            <span key={point} className="flex items-center gap-1.5 text-xs md:text-sm font-bold text-stone-700 bg-white border border-[#E8DCCB] px-3.5 py-1.5 rounded-lg shadow-sm group-hover:border-[#C18765]/30 group-hover:text-[#C18765] transition-colors">
                              <CheckCircle2 size={14} className="text-[#C18765]" /> {point}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BANDEAU DÉFILANT */}
      <div className="w-[110%] -ml-[5%] rotate-[-1.5deg] bg-[#C18765] py-5 shadow-lg border-y-2 border-[#A97352] overflow-hidden my-24 relative z-20">
        <motion.div className="flex w-fit whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }}>
          <div className="flex gap-12 px-6 items-center">
            {technologies.map((t, i) => (
              <span key={`g1-${i}`} className="text-lg md:text-xl font-bold text-white tracking-widest uppercase flex items-center gap-4">
                {t} <span className="text-white/40 text-sm">✦</span>
              </span>
            ))}
          </div>
          <div className="flex gap-12 px-6 items-center">
            {technologies.map((t, i) => (
              <span key={`g2-${i}`} className="text-lg md:text-xl font-bold text-white tracking-widest uppercase flex items-center gap-4">
                {t} <span className="text-white/40 text-sm">✦</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* SECTION 3 : À PROPOS DE MOI */}
      <div id="apropos" className="relative z-10 w-full px-8 md:px-16 lg:px-24 pt-20 pb-24 bg-[#F5F0EA] transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-30">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-5/12 mx-auto relative">
              <motion.div whileHover={{ scale: 1.02 }} className="relative z-10 overflow-hidden rounded-[2.5rem] border-2 border-[#E8DCCB] bg-[#F5EEE6] shadow-xl aspect-[4/5] group flex items-center justify-center">
                <img src="/moi.png" alt="Marine Roussin" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = 'none'; }}/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#C18765]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              <div className="absolute top-0 left-0 w-full h-full border-2 border-[#C18765] rounded-[2.5rem] transform translate-x-5 translate-y-5 -z-10 opacity-40"></div>
              
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -right-2 md:-right-6 bg-white px-5 py-4 rounded-2xl border-2 border-[#E8DCCB] shadow-xl flex items-center gap-3 z-20">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="font-bold text-stone-700 tracking-wide">Dispo pour un stage</span>
              </motion.div>
            </div>

            <div className="w-full lg:w-7/12">
              <h2 className="text-6xl font-black text-stone-800 mb-3 uppercase tracking-tighter relative inline-block">
                À propos de moi<span className="absolute -bottom-2 left-0 w-1/3 h-2 bg-[#C18765] rounded-full"></span>
              </h2>
              <h3 className="text-2xl font-bold text-[#C18765] mb-8">Le trait d'union entre la technique et la créativité.</h3>
              
              <div className="space-y-6 text-stone-600 text-xl leading-relaxed text-justify mb-10">
                <p>Étudiante en <strong>3ème année d'ingénierie numérique</strong>, je ne me définis pas uniquement comme une développeuse. Je suis avant tout une créatrice d'expériences.</p>
                <p>Ma spécialisation dans le <strong>Jeu Vidéo</strong> et le <strong>Web</strong> n'est pas un hasard : ce sont des domaines où la logique pure du code rencontre la sensibilité du design. Qu'il s'agisse de programmer une IA sous Unreal Engine, d'optimiser le Game Feel d'un jeu Unity, ou de penser l'UI/UX d'un site e-commerce, j'aime avoir une vision globale du projet.</p>
              </div>

              {/* OBJECTIF PRINCIPAL INTERACTIF */}
              <motion.div 
                onClick={() => setObjectifOuvert(!objectifOuvert)}
                whileHover={{ y: -4 }}
                onMouseEnter={() => setIsHovering(true)} 
                onMouseLeave={() => setIsHovering(false)} 
                className="p-8 md:p-10 bg-white rounded-3xl border-3 border-[#C18765] shadow-lg relative overflow-hidden group cursor-none mb-6 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C18765]/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#C18765]/10 p-3 rounded-2xl text-[#C18765]">
                        <Target size={32} />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight">Mon Objectif Principal</h4>
                    </div>
                    <div className={`w-10 h-10 rounded-full bg-[#F5F0EA] flex items-center justify-center text-[#C18765] transition-transform duration-300 ${objectifOuvert ? 'rotate-180 bg-[#C18765] text-white' : ''}`}>
                      <ChevronDown size={24} />
                    </div>
                  </div>

                  <p className="text-stone-700 text-xl md:text-2xl font-medium leading-relaxed">
                    Intégrer une équipe créative et stimulante pour un <strong className="text-[#C18765] font-black underline decoration-[#C18765]/30">stage de 6 mois</strong>. Prête à m'investir, à apprendre et à apporter ma polyvalence (Basée dans la France ou en distanciel) !
                  </p>

                  <AnimatePresence>
                    {objectifOuvert && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t-2 border-[#F5F0EA] space-y-4 text-stone-600 text-lg">
                          <p className="font-semibold text-stone-800">🎯 Ce que je recherche concrètement :</p>
                          <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-2">✨ Un stage de 6 mois à partir du 1 février 2027.</li>
                            <li className="flex items-center gap-2">🎮 Un environnement axé sur le développement, sur le développement WEB etc.</li>
                            <li className="flex items-center gap-2">🤝 Une équipe passionnée où je pourrai participer activement aux phases de conception, de code et d'optimisation.</li>
                          </ul>
                          <div className="pt-2">
                            <a 
                              href="#contact" 
                              onClick={(e) => e.stopPropagation()} 
                              className="inline-flex items-center gap-2 bg-[#C18765] text-white px-6 py-3 rounded-xl font-bold text-xs md:text-sm uppercase tracking-wider hover:bg-[#A97352] transition-colors"
                            >
                              Discutons-en par message →
                            </a>
                            <div className="pt-2 flex flex-wrap gap-4">
                              <a 
                                href="https://www.linkedin.com/in/marine-roussin07/?isSelfProfile=true" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                onClick={(e) => e.stopPropagation()} 
                                className="inline-flex items-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded-xl font-bold text-xs md:text-sm uppercase tracking-wider hover:bg-[#005f92] transition-colors"
                              >
                                Voir mon LinkedIn ↗
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <div className="p-6 bg-white rounded-2xl border-2 border-[#E8DCCB] shadow-sm flex items-center justify-between">
                <h4 className="text-lg md:text-xl font-bold text-stone-800 flex items-center gap-3">
                  <Globe className="text-[#C18765]" size={24}/> Langues parlées
                </h4>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <span className="text-stone-700 font-bold">🇫🇷 Français <span className="text-stone-400 font-normal text-xs md:text-sm">(Maternelle)</span></span>
                  <span className="text-stone-700 font-bold">🇬🇧 Anglais <span className="text-[#C18765] text-[10px] md:text-xs uppercase tracking-wider bg-[#F5F0EA] px-2 md:px-3 py-1 rounded-md">B1</span></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* SECTION PASSION : DESSIN */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-20 bg-white border-y border-[#E8DCCB] transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-30">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="bg-[#F5F0EA] w-16 h-16 rounded-2xl flex items-center justify-center text-[#C18765] mb-8 border border-[#E8DCCB]"><Palette size={40} /></div>
              <h3 className="text-4xl font-black text-stone-800 mb-6 uppercase tracking-tighter">Mon Univers Graphique personnel</h3>
              <p className="text-stone-600 text-xl leading-relaxed mb-8 text-justify">Au-delà du code et des moteurs de jeu, je suis passionnée par le dessin. Cette compétence me permet d'esquisser mes propres concepts, de réfléchir à la direction artistique en amont, et de donner une véritable âme à mes projets avant même la première ligne de code.</p>
            </div>
            
            <div className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -10, rotate: 2 }} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="bg-[#FDFBF9] p-3 rounded-2xl border-2 border-[#E8DCCB] hover:border-[#C18765] shadow-sm hover:shadow-xl transition-all duration-300 aspect-[3/4] flex flex-col group cursor-none">
                <div className="w-full h-full bg-[#F5EEE6] rounded-xl relative overflow-hidden flex items-center justify-center border border-[#E8DCCB]">
                  <img src="/joker.png.png" alt="Dessin 1" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-transform duration-700 group-hover:scale-110" onError={(e) => e.currentTarget.style.opacity = '0'} />
                  <div className="absolute inset-0 bg-[#C18765]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-10"><span className="text-white font-bold bg-[#C18765] px-4 py-2 rounded-full shadow-lg">Croquis</span></div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -10, rotate: -2 }} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="bg-[#FDFBF9] p-3 rounded-2xl border-2 border-[#E8DCCB] hover:border-[#C18765] shadow-sm hover:shadow-xl transition-all duration-300 aspect-[3/4] flex flex-col group cursor-none">
                <div className="w-full h-full bg-[#F5EEE6] rounded-xl relative overflow-hidden flex items-center justify-center border border-[#E8DCCB]">
                  <img src="/hulk.png.png" alt="Dessin 2" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-transform duration-700 group-hover:scale-110" onError={(e) => e.currentTarget.style.opacity = '0'} />
                  <div className="absolute inset-0 bg-[#C18765]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-10"><span className="text-white font-bold bg-[#C18765] px-4 py-2 rounded-full shadow-lg">Personnage</span></div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -10, rotate: 2 }} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="bg-[#FDFBF9] p-3 rounded-2xl border-2 border-[#E8DCCB] hover:border-[#C18765] shadow-sm hover:shadow-xl transition-all duration-300 aspect-[3/4] flex flex-col group cursor-none">
                <div className="w-full h-full bg-[#F5EEE6] rounded-xl relative overflow-hidden flex items-center justify-center border border-[#E8DCCB]">
                  <img src="/mario.png.png" alt="Dessin 3" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-transform duration-700 group-hover:scale-110" onError={(e) => e.currentTarget.style.opacity = '0'} />
                  <div className="absolute inset-0 bg-[#C18765]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-10"><span className="text-white font-bold bg-[#C18765] px-4 py-2 rounded-full shadow-lg">Concept Art</span></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* COMPÉTENCES TECHNIQUES */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-32 bg-[#FDFBF9] transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-30">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-stone-800 uppercase tracking-tighter">Compétences Techniques</h2>
            <p className="text-2xl text-stone-500 font-medium mt-4">Les outils et technologies que j'utilise au quotidien</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {hardSkills.map((skillGroup: any, index: number) => {
              const icons = [<Gamepad2 size={32} />, <Code size={32} />, <PenTool size={32} />, <Wrench size={32} />];
              return (
                <motion.div key={`skillgroup-${index}`} whileHover={{ y: -8 }} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="group bg-white p-10 md:p-12 rounded-[2.5rem] border-2 border-[#E8DCCB] hover:border-[#C18765] shadow-sm hover:shadow-[0_20px_40px_rgba(193,135,101,0.12)] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C18765]/20 to-transparent rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10 relative z-10">
                    <div className="w-16 h-16 bg-[#F5F0EA] border-2 border-[#E8DCCB] group-hover:border-[#C18765] group-hover:bg-[#C18765] group-hover:text-white rounded-2xl flex items-center justify-center text-[#C18765] transition-all duration-300 shadow-sm flex-shrink-0">{icons[index]}</div>
                    <h3 className="text-3xl font-bold text-stone-800 group-hover:text-[#C18765] transition-colors">{skillGroup.categorie}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 relative z-10">
                    {skillGroup.outils.map((outil: string, i: number) => (
                      <div key={`outil-${i}`} className="relative group/item">
                        <span className="px-5 py-3 bg-[#FDFBF9] text-stone-700 text-sm md:text-lg font-bold border-2 border-[#E8DCCB] rounded-xl flex items-center hover:-translate-y-1 hover:border-[#C18765] hover:text-[#C18765] hover:bg-white hover:shadow-md transition-all duration-300 cursor-none">
                          {outil}
                        </span>
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 pointer-events-none z-50 flex flex-col items-center">
                          <div className="bg-stone-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                            Maîtrisé
                          </div>
                          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-stone-800"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* SECTION QUALITÉS */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-32 bg-white/65 backdrop-blur-md border-t border-[#E8DCCB] transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-30">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-stone-800 uppercase tracking-tighter">Mon Profil</h2>
            <p className="text-2xl text-stone-500 font-medium mt-4">Ce qui fait ma différence</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/3 flex flex-col gap-4 relative">
              {mesAtouts.map((atout) => {
                const isActive = atoutActif.id === atout.id;
                return (
                  <button key={atout.id} onClick={() => setAtoutActif(atout)} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className={`relative w-full text-left p-6 rounded-2xl flex items-center justify-between transition-all duration-300 cursor-none overflow-hidden group ${isActive ? 'text-white' : 'text-stone-600 hover:bg-[#F5F0EA]'}`}>
                    {isActive && <motion.div layoutId="fondAtoutActif" className="absolute inset-0 bg-[#C18765] rounded-2xl z-0 shadow-lg" initial={false} transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`p-3 rounded-xl transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-[#FDFBF9] text-[#C18765] border border-[#E8DCCB] group-hover:border-[#C18765]'}`}>{atout.icon}</div>
                      <span className="text-xl font-bold">{atout.titre}</span>
                    </div>
                    <ChevronRight className={`relative z-10 transition-transform ${isActive ? 'text-white translate-x-1' : 'text-stone-400'}`} />
                  </button>
                );
              })}
            </div>
            <div className="w-full lg:w-2/3">
              <div className="bg-[#FDFBF9] border-2 border-[#E8DCCB] rounded-[2.5rem] p-10 md:p-16 shadow-sm min-h-[450px] flex flex-col justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={atoutActif.id} initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }} transition={{ duration: 0.3 }} className="relative z-10">
                    <div className="w-20 h-20 bg-[#F5F0EA] border-2 border-[#E8DCCB] text-[#C18765] rounded-2xl flex items-center justify-center mb-8 shadow-sm"><div className="scale-150">{atoutActif.icon}</div></div>
                    <h3 className="text-4xl md:text-5xl font-black text-stone-800 mb-6 leading-tight">{atoutActif.titre}</h3>
                    <p className="text-stone-600 text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">{atoutActif.description}</p>
                    <div className="inline-flex flex-col sm:flex-row sm:items-center gap-4 bg-white px-6 py-4 rounded-xl border-2 border-[#E8DCCB] shadow-sm">
                      <div className="flex items-center gap-2 text-stone-800 font-bold text-lg uppercase tracking-wider"><Target size={20} className="text-[#C18765]" /> Preuve :</div>
                      <span className="text-stone-600 text-sm md:text-lg font-medium">{atoutActif.preuve}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="absolute -bottom-10 -right-10 text-[#C18765] opacity-[0.03] pointer-events-none transform scale-[5] md:scale-[8]">{atoutActif.icon}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER & CONTACT */}
      <div id="contact" className="relative z-10 w-full px-8 py-32 flex flex-col items-center bg-white border-t border-[#E8DCCB] transition-colors duration-500">
        <h2 className="text-6xl md:text-7xl font-black text-stone-800 mb-16 text-center uppercase tracking-tighter">Contactez-moi</h2>
        <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
            <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="flex items-center gap-6 bg-[#FDFBF9] px-8 py-8 rounded-[2rem] border-2 border-[#E8DCCB] hover:border-[#C18765] transition-colors shadow-sm group">
              <Smartphone className="text-[#C18765] group-hover:scale-110 transition-transform" size={40} />
              <span className="font-bold text-xl md:text-2xl text-stone-700">06 51 73 21 62</span>
            </div>
            <a href="mailto:marine.roussin83330@gmail.com" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="flex items-center gap-6 bg-[#FDFBF9] px-8 py-8 rounded-[2rem] border-2 border-[#E8DCCB] hover:border-[#C18765] transition-colors shadow-sm group cursor-none">
              <Mail className="text-[#C18765] group-hover:scale-110 transition-transform" size={40} />
              <span className="font-bold text-lg md:text-xl text-stone-700 break-all">marine.roussin83330@gmail.com</span>
            </a>
          </div>
          <form action="https://formspree.io/f/xrpeqwyy" method="POST" className="w-full lg:w-1/2 flex flex-col gap-5 bg-[#FDFBF9] p-8 md:p-10 rounded-[2rem] border-2 border-[#E8DCCB] shadow-sm">
            <div className="flex flex-col gap-2">
              <label htmlFor="nom" className="font-bold text-stone-700 ml-2">Votre nom</label>
              <input type="text" id="nom" name="nom" required className="p-4 rounded-xl border-2 border-[#E8DCCB] bg-white focus:border-[#C18765] focus:outline-none focus:ring-4 focus:ring-[#C18765]/20 transition-all font-medium text-stone-700 cursor-text" placeholder="Ex: John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold text-stone-700 ml-2">Votre email</label>
              <input type="email" id="email" name="email" required className="p-4 rounded-xl border-2 border-[#E8DCCB] bg-white focus:border-[#C18765] focus:outline-none focus:ring-4 focus:ring-[#C18765]/20 transition-all font-medium text-stone-700 cursor-text" placeholder="Ex: john@entreprise.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-bold text-stone-700 ml-2">Votre message</label>
              <textarea id="message" name="message" required rows={4} className="p-4 rounded-xl border-2 border-[#E8DCCB] bg-white focus:border-[#C18765] focus:outline-none focus:ring-4 focus:ring-[#C18765]/20 transition-all font-medium text-stone-700 resize-none cursor-text" placeholder="Comment puis-je vous aider ?"></textarea>
            </div>
            <button type="submit" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="mt-2 bg-[#C18765] text-white py-4 rounded-xl font-bold text-xl shadow-[0_0_15px_rgba(193,135,101,0.3)] hover:shadow-[0_0_25px_rgba(193,135,101,0.5)] hover:-translate-y-1 transition-all cursor-none">
              Envoyer le message
            </button>
          </form>
        </div>
        <p className="mt-20 text-stone-400 text-sm md:text-lg font-medium">© 2026 Marine Roussin. Conçu pour le Web et le Jeu Vidéo.</p>
      </div>

      {/* MODAL DES PROJETS */}
      <AnimatePresence>
        {projetOuvert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-stone-900/80 backdrop-blur-lg" onClick={() => { setProjetOuvert(null); setDemoOuverte(false); }}>
            <motion.div initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 30 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-[2rem] w-full max-w-7xl min-h-[75vh] max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col md:flex-row border border-[#E8DCCB]/50">
              <button onClick={() => { setProjetOuvert(null); setDemoOuverte(false); }} className="absolute top-8 right-8 z-30 bg-white/90 p-5 rounded-full text-stone-800 hover:bg-[#C18765] hover:text-white transition-colors backdrop-blur-md shadow-lg"><X size={32} /></button>
              
              <div className="w-full md:w-1/2 h-96 md:h-auto bg-gradient-to-br from-[#FDFBF9] to-[#F5EEE6] relative flex items-center justify-center overflow-hidden p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#E8DCCB]/60">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-[#C18765]/20 to-[#E6B869]/10 rounded-full blur-[60px] pointer-events-none"></div>
                <img src={projetOuvert.image} alt={projetOuvert.titre} className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(193,135,101,0.2)] rounded-xl" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              
              <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center overflow-y-auto bg-white">
                <span className="text-[#C18765] font-black text-lg mb-4 uppercase tracking-widest flex items-center gap-3"><span className="w-10 h-1.5 bg-[#C18765] rounded-full"></span> {projetOuvert.categorie}</span>
                <h3 className="text-5xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight leading-none">{projetOuvert.titre}</h3>
                
                <div className="bg-[#FDFBF9] border-2 border-[#E8DCCB] rounded-2xl p-6 mb-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${projetOuvert.contexte === 'Solo' ? 'bg-stone-200 text-stone-700' : 'bg-[#E6B869]/20 text-[#D4A373]'}`}>{projetOuvert.contexte === 'Solo' ? <User size={24} /> : <Users size={24} />}</div>
                    <div><span className="block text-sm font-bold text-stone-400 uppercase tracking-wider">Contexte</span><span className="font-black text-stone-800 text-lg">Projet en {projetOuvert.contexte}</span></div>
                  </div>
                  <div className="h-px w-full bg-[#E8DCCB]"></div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#C18765]/10 text-[#C18765]"><Target size={24} /></div>
                    <div><span className="block text-sm font-bold text-stone-400 uppercase tracking-wider">Mon rôle</span><span className="font-black text-[#C18765] text-lg">{projetOuvert.role}</span></div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">{projetOuvert.tags.map((tag: string) => (<span key={tag} className="px-4 py-2 bg-white text-stone-700 text-sm font-bold uppercase tracking-wider rounded-lg border-2 border-[#E8DCCB] shadow-sm">{tag}</span>))}</div>
                <p className="text-stone-600 text-xl leading-relaxed mb-10">{projetOuvert.details}</p>
                
                <div className="mt-auto">
                  {projetOuvert.id === 9 ? (
                    <div className="bg-[#C18765]/10 border-2 border-[#C18765]/30 text-stone-700 py-6 px-6 rounded-2xl flex items-start gap-5 shadow-sm">
                      <Lightbulb size={32} className="text-[#C18765] flex-shrink-0 mt-1" />
                      <p className="font-medium text-lg leading-relaxed">
                        <strong className="text-[#C18765] block mb-2 font-black uppercase tracking-wider">Pourquoi ce choix technique ?</strong>
                        J'ai choisi de développer ce portfolio moi-même de A à Z (sans template ni CMS) afin d'<strong>augmenter mes savoirs en développement web</strong>. C'était un excellent défi pour mettre en pratique mes compétences en programmation front-end et en UX design ! <br/><span className="inline-block mt-2 font-bold text-stone-800">✨ Vous êtes actuellement en train de naviguer dessus.</span>
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-5">
                      {projetOuvert.lienDemo ? (
                        <button 
                          onClick={() => setDemoOuverte(true)} 
                          onMouseEnter={() => setIsHovering(true)} 
                          onMouseLeave={() => setIsHovering(false)} 
                          className="flex-1 bg-[#C18765] text-white py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#A97352] transition-colors font-black text-xl shadow-[0_0_20px_rgba(193,135,101,0.3)] uppercase tracking-wider cursor-none"
                        >
                          <Play size={24} fill="currentColor" /> Voir la démo
                        </button>
                      ) : (
                        <button className="flex-1 bg-stone-200 text-stone-400 py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-xl uppercase tracking-wider cursor-not-allowed">
                          <Play size={24} fill="currentColor" /> Voir la démo
                        </button>
                      )}
                      
                      {/* LE NOUVEAU BOUTON DU GDD EST ICI ! */}
                      {projetOuvert.lienGDD && (
                        <a 
                          href={projetOuvert.lienGDD} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onMouseEnter={() => setIsHovering(true)} 
                          onMouseLeave={() => setIsHovering(false)} 
                          className="flex-1 bg-white border-2 border-[#C18765] text-[#C18765] py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#C18765] hover:text-white transition-colors font-black text-xl shadow-[0_0_20px_rgba(193,135,101,0.1)] uppercase tracking-wider cursor-none group"
                        >
                          <FileText size={24} className="group-hover:scale-110 transition-transform" /> Lire le GDD
                        </a>
                      )}
                    </div>
                  )}
                </div>

              </div>
              <AnimatePresence>
                {demoOuverte && projetOuvert.lienDemo && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute inset-0 z-50 flex items-center justify-center bg-[#FDFBF9]/95 backdrop-blur-xl p-4 md:p-12">
                    <button onClick={() => setDemoOuverte(false)} className="absolute top-8 right-8 z-[60] bg-white border-2 border-[#E8DCCB] p-5 rounded-full text-stone-800 hover:bg-[#C18765] hover:text-white transition-all shadow-xl"><X size={32} /></button>
                    {projetOuvert.lienDemo.endsWith('.mp4') ? (
                      <video src={projetOuvert.lienDemo} controls autoPlay className="w-full h-full max-w-7xl object-contain drop-shadow-[0_20px_50px_rgba(193,135,101,0.25)] rounded-2xl" />
                    ) : (
                      <img src={projetOuvert.lienDemo} alt="Démo animée" className="w-full h-full max-w-7xl object-contain drop-shadow-[0_20px_50px_rgba(193,135,101,0.25)] rounded-2xl" />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL DES EXPÉRIENCES */}
      <AnimatePresence>
        {experienceOuverte && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-stone-900/80 backdrop-blur-lg" onClick={() => setExperienceOuverte(null)}>
            <motion.div initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 30 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col border border-[#E8DCCB]/50">
              <button onClick={() => setExperienceOuverte(null)} className="absolute top-6 right-6 z-30 bg-white/90 p-4 rounded-full text-stone-800 hover:bg-[#C18765] hover:text-white transition-colors backdrop-blur-md shadow-lg"><X size={28} /></button>
              <div className="w-full h-64 md:h-80 relative flex-shrink-0 bg-stone-200">
                <img src={experienceOuverte.image} alt={experienceOuverte.poste} className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent"></div>
                <div className="absolute bottom-6 left-8 md:left-12 right-8 z-10">
                  <span className={`inline-block px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider mb-3 ${experienceOuverte.type === 'tech' ? 'bg-[#E6B869] text-white' : 'bg-[#C18765] text-white'}`}>{experienceOuverte.type === 'tech' ? 'Mission Tech' : 'Job Étudiant'}</span>
                  <h3 className="text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-md">{experienceOuverte.poste}</h3>
                </div>
              </div>
              <div className="p-8 md:p-12 overflow-y-auto bg-white flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 pb-6 border-b border-stone-100">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-stone-700 font-bold text-2xl"><Briefcase className={experienceOuverte.type === 'tech' ? 'text-[#E6B869]' : 'text-[#C18765]'} size={28} /> {experienceOuverte.entreprise}</div>
                    <div className="flex items-center gap-3 text-stone-500 font-semibold text-lg"><Calendar size={22} /> {experienceOuverte.periode}</div>
                  </div>
                  <div className="flex flex-wrap gap-2 max-w-sm justify-start sm:justify-end">
                    {experienceOuverte.tags.map((tag: string) => (<span key={tag} className={`px-3 py-1.5 text-sm font-bold uppercase tracking-wider rounded-md border ${experienceOuverte.type === 'tech' ? 'bg-[#FDF8F0] text-[#D4A373] border-[#E6B869]/50' : 'bg-[#F5F0EA] text-[#C18765] border-[#E8DCCB]'}`}>{tag}</span>))}
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <h4 className="text-2xl font-bold text-stone-800 mb-4">Missions & Réalisations</h4>
                  <p className="text-stone-600 text-xl leading-relaxed text-justify">{experienceOuverte.detailsLong}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.8 }} onClick={scrollToTop} className="fixed bottom-8 right-8 z-[80] p-4 bg-[#C18765] text-white rounded-full shadow-[0_10px_25px_rgba(193,135,101,0.5)] hover:bg-stone-800 transition-colors cursor-none"></motion.button>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-gradient { animation: gradient 6s ease infinite; }
      `}</style>
    </main>
  );
}