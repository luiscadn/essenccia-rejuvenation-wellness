export interface Treatment {
  id: string;
  name: string;
  category: 'face' | 'body' | 'wellness';
  duration: string;
  price: string;
  numericPrice: number;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  tech: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  size: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  description: string;
  keyIngredients: string[];
  howToUse: string;
  image: string;
  isUpsell?: boolean;
}

export const TREATMENTS: Treatment[] = [
  {
    id: 'rezenerate-nanoneedling',
    name: 'The Rezenerate™ Nano-Needling Renewal',
    category: 'face',
    duration: '1 hr 15 min',
    price: 'From $300',
    numericPrice: 300,
    badge: 'Signature Facial',
    shortDesc: 'A cutting-edge non-invasive treatment utilizing silicon nano-pyramids to infuse clinical serums deep into epidermal layers without needles or downtime.',
    fullDesc: 'Rezenerate uses state-of-the-art nanotechnology to create microscopic, temporary pathways into the skin. This allows medical-grade hyaluronic acids, stem cell peptides, and custom nutrients to absorb 400% more effectively than topical application alone. Clients experience instant plumping, smoothed fine lines, and long-lasting radiance.',
    benefits: [
      'Increases hydration and instant plumping',
      'Smoothes fine lines around eyes and lip contour',
      'Minimizes pore diameter and evens tone',
      'Zero downtime, painless, and completely non-invasive'
    ],
    tech: 'Rezenerate Nanotechnology & High-Frequency Ultrasound',
    image: '/fotos_webp/rezenerate.webp',
  },
  {
    id: 'viora-rf-tightening',
    name: 'Viora Radio Frequency (RF) Lift & Tighten',
    category: 'face',
    duration: '1 hr 15 min',
    price: 'From $450',
    numericPrice: 450,
    badge: 'Advanced Technology',
    shortDesc: 'Controlled multi-channel electromagnetic waves delivering targeted thermal energy to stimulate dermal collagen and contour sagging contours.',
    fullDesc: 'Using V-ST radiofrequency technology, this clinical treatment targets the deeper subcutaneous dermis. The controlled thermal effect immediately contracts existing collagen fibers while triggering new collagen and elastin production over 12 weeks. Perfect for jowls, jawline contour, double chin, neck, and décolleté rejuvenation.',
    benefits: [
      'Noticeably tightens lax jawline and neck tissue',
      'Stimulates neocollagenesis for firmer skin elasticity',
      'Reduces appearance of deep nasolabial folds',
      'Long-lasting structural lifting without surgery'
    ],
    tech: 'Viora V-ST Multi-Core Radiofrequency',
    image: '/fotos_webp/rf_tightening.webp',
  },
  {
    id: 'cavi-lipo-body-sculpting',
    name: 'Cavi-Lipo Ultrasound Cavitation Sculpting',
    category: 'body',
    duration: '1 hr 30 min',
    price: 'From $150',
    numericPrice: 150,
    badge: 'Most Popular Body',
    shortDesc: 'Low-frequency ultrasound cavitation technology that safely liquefies stubborn localized fat deposits for natural lymphatic elimination.',
    fullDesc: 'Cavi-Lipo is one of the most advanced non-surgical body sculpting procedures in Westport. Controlled ultrasound frequencies generate micro-bubbles within localized adipose tissue, causing fat cell membranes to dissolve without affecting surrounding blood vessels or nerves. The emulsified lipids are naturally flushed through your lymphatic system.',
    benefits: [
      'Measurable reduction in abdomen, flanks, and thigh circumference',
      'Smoothes stubborn cellulite dimpling',
      'Accelerates lymphatic circulation and detoxification',
      'Completely non-invasive with zero recovery period'
    ],
    tech: 'Low-Frequency Dual-Probe Ultrasound Cavitation',
    image: '/fotos_webp/cavi_lipo.webp',
  },
  {
    id: 'prx-treatments',
    name: 'PRX-T33 Biorevitalization Facial Protocol',
    category: 'face',
    duration: '1 hr',
    price: 'From $350',
    numericPrice: 350,
    badge: 'No-Peel Bio-Stim',
    shortDesc: 'Non-peeling biorevitalization merging 33% TCA and hydrogen peroxide for instant skin tightening and cellular restoration without flaking.',
    fullDesc: 'PRX-T33 is an Italian patented medical treatment that penetrates down to the papillary dermis without damaging the epidermis. It stimulates growth factors and collagen synthesis while bypassing the peeling and photosensitivity of traditional chemical peels. You leave with an immediate glass-skin luminosity.',
    benefits: [
      'Non-invasive dermal biorevitalization without visible peeling',
      'Improves skin density, firmness, and tone',
      'Safe all year round with zero summer sun restrictions',
      'Clinically softens acne scarring and discoloration'
    ],
    tech: 'Italian Medical Formula (TCA 33% + H2O2 + Kojic Acid)',
    image: '/images/ledy-treatment.jpg',
  },
  {
    id: 'infusion-electro-mesotherapy',
    name: 'Infusion Electro-Mesotherapy Nutrient Treatment',
    category: 'face',
    duration: '1 hr 15 min',
    price: 'From $300',
    numericPrice: 300,
    badge: 'Deep Infusion',
    shortDesc: 'Needle-free electro-osmosis delivering medical-grade peptides, electrolytes, and antioxidants deep into the cellular matrix.',
    fullDesc: 'Infusion utilizes proprietary ionwave pulses to temporarily open micro-channels in the cell membrane. This enables the direct delivery of specialized therapeutic solutions containing hyaluronic acid, organic botanical stem cells, and essential vitamins directly where skin cells regenerate.',
    benefits: [
      'Superior cellular hydration that lasts weeks',
      'Restores compromised skin barrier function',
      'Enhances natural luminosity and smooth texture',
      'Pain-free needleless mesotherapy'
    ],
    tech: 'IonWave™ Electro-Mesotherapy Technology',
    image: '/images/facial-treatment.jpg',
  },
  {
    id: 'body-contouring-cellulite',
    name: 'Viora Reaction Cellulite Smoothing & Firming',
    category: 'body',
    duration: '30 min',
    price: '$200',
    numericPrice: 200,
    badge: 'Cellulite Targeted',
    shortDesc: 'Multi-frequency RF vacuum therapy that mobilizes lymphatic flow, stimulates collagen septa, and visibly smooths cellulite dimples.',
    fullDesc: 'Combines CORE™ radiofrequency with vacuum manipulation to reach multiple tissue depths simultaneously. It targets both superficial collagen laxity and deeper fatty deposits, smoothing the appearance of the buttocks, thighs, and abdomen while improving overall skin tone.',
    benefits: [
      'Dramatically improves skin texture on thighs and glutes',
      'Stimulates localized micro-circulation and lymphatic drainage',
      'Tightens stretched skin post-weight loss or pregnancy',
      'Comfortable treatment akin to a deep warm massage'
    ],
    tech: 'CORE™ Multi-Frequency Vacuum Radiofrequency',
    image: '/fotos_webp/body_sculpt.webp',
  },
  {
    id: 'hydrogen-inhalation-led',
    name: 'Molecular Hydrogen Inhalation with LED Phototherapy',
    category: 'wellness',
    duration: '30 min',
    price: '$75',
    numericPrice: 75,
    badge: 'Cellular Wellness',
    shortDesc: 'Medical-grade molecular hydrogen inhalation to neutralize toxic hydroxyl radicals paired with targeted clinical LED light therapy.',
    fullDesc: 'Molecular hydrogen (H2) is the universe’s smallest antioxidant molecule, capable of crossing the blood-brain barrier and entering mitochondria to scavenge harmful oxidative stress. Paired with full-spectrum clinical LED photobiomodulation, this treatment revitalizes energy, reduces inflammation, and restores glowing skin from within.',
    benefits: [
      'Potent neutralizer of cellular free radicals and oxidative stress',
      'Calms systemic inflammation and mental fatigue',
      'LED red light stimulates ATP production and collagen synthesis',
      'Deeply relaxing restorative session'
    ],
    tech: 'Electrolytic Pure H2 Generator + Medical LED Array',
    image: '/fotos_webp/hydroveil.webp',
  },
  {
    id: 'pemf-magnetic-field',
    name: 'Pulsed Electromagnetic Field (PEMF) Therapy',
    category: 'wellness',
    duration: '45 min',
    price: '$75',
    numericPrice: 75,
    badge: 'Vitality Boost',
    shortDesc: 'Recharge cellular membrane potential with gentle pulsed magnetic frequencies that optimize cell metabolism and speed tissue repair.',
    fullDesc: 'Every healthy cell in your body holds an electrical charge. Stress, toxins, and aging deplete this cellular voltage. PEMF therapy acts as a cellular battery charger, delivering natural magnetic frequencies that open cell membranes for better oxygen intake, detoxification, and reduced discomfort.',
    benefits: [
      'Recharges cellular voltage and metabolic efficiency',
      'Relieves muscle tension and joint stiffness',
      'Supports deeper restorative sleep and parasympathetic relaxation',
      'Synergizes with skincare treatments for accelerated healing'
    ],
    tech: 'Clinical Low-Frequency PEMF Bio-Regenerator',
    image: '/images/hero-clinic.jpg',
  },
  {
    id: 'diamond-resurfacing',
    name: 'Diamond Resurfacing Microdermabrasion',
    category: 'face',
    duration: '30 min',
    price: 'From $125',
    numericPrice: 125,
    shortDesc: 'Precision diamond crystal exfoliation that sweeps away keratinized surface cells to reveal smooth, touchable skin.',
    fullDesc: 'Gentle diamond-tip wand gently buffs the stratum corneum while vacuum suction lifts impurities from pores and promotes fresh blood flow. An ideal pre-treatment to ensure all subsequent serums and therapies penetrate without obstruction.',
    benefits: [
      'Instant silky-smooth texture',
      'Evens superficial sun damage and rough patches',
      'Prepares skin for deeper nutrient absorption'
    ],
    tech: 'Medical Diamond-Tip Controlled Vacuum Resurfacing',
    image: '/images/facial-treatment.jpg',
  },
  {
    id: 'free-personalized-consultation',
    name: 'Complimentary 1-on-1 Skin & Body Consultation',
    category: 'face',
    duration: '45 min',
    price: 'FREE',
    numericPrice: 0,
    badge: 'Recommended First Step',
    shortDesc: 'Comprehensive clinical evaluation with Master Aesthetician Ledy. We evaluate your unique skin physiology and create a personalized plan.',
    fullDesc: 'With over 23 years of specialized experience in Colombia and the US, Ledy takes the time to truly listen. We analyze your skin barrier, evaluate body goals, discuss internal lifestyle factors, and curate a customized treatment journey tailored specifically for you.',
    benefits: [
      'Detailed skin barrier and body composition analysis',
      'Custom protocol roadmap with transparent pricing',
      'Direct one-on-one time with Ledy',
      'No obligation, zero pressure'
    ],
    tech: 'Clinical Digital Skin Diagnostic & Expert Palpation',
    image: '/images/ledy-treatment.jpg',
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'stem-regenerative-serum',
    name: 'Essenccia Stem Regenerative Serum',
    subtitle: 'Cellular Longevity & Copper Peptide Complex',
    price: 138,
    originalPrice: 165,
    size: '30 ml / 1.0 fl oz',
    rating: 4.9,
    reviewsCount: 48,
    badge: 'Bestseller',
    description: 'An ultra-pure elixir formulated with bioactive plant stem cells, copper tripeptides (GHK-Cu), and triple-molecular hyaluronic acid. Penetrates deeply to accelerate cellular regeneration, boost collagen density, and restore plump resilience.',
    keyIngredients: ['Bioactive Alpine Rose Stem Cells', 'Copper Tripeptide-1 (1.5%)', 'Multi-Weight Hyaluronic Acid', 'Niacinamide (5%)'],
    howToUse: 'Dispense 4-5 drops onto cleansed skin morning and evening. Gently press into face, neck, and décolleté before moisturizer.',
    image: '/images/products-line.jpg',
  },
  {
    id: 'cellular-renewal-cream',
    name: 'Cellular Renewal Lipid Barrier Cream',
    subtitle: 'Deep Biomimetic Ceramide & Bakuchiol Treatment',
    price: 112,
    size: '50 ml / 1.7 oz',
    rating: 4.8,
    reviewsCount: 36,
    badge: 'Clinical Grade',
    description: 'A velvet, moisture-locking cream mimicking your skin’s natural lipid matrix. Formulated with five identical ceramides, soothing squalane, and gentle plant bakuchiol to rebuild damaged barriers post-treatment.',
    keyIngredients: ['Ceramide Complex (NP, AP, EOP)', 'Phyto-Squalane', 'Bakuchiol (1.0%)', 'Centella Asiatica (Cica)'],
    howToUse: 'Warm a pearl-sized amount between fingertips and smooth evenly across face and neck after serum.',
    image: '/images/products-line.jpg',
  },
  {
    id: 'hydra-nutrition-elixir',
    name: 'Hydra Nutrition Recovery Oil',
    subtitle: 'Cold-Pressed Botanical Antioxidant Infusion',
    price: 88,
    size: '50 ml / 1.7 fl oz',
    rating: 4.9,
    reviewsCount: 29,
    badge: 'New Release',
    description: 'A weightless dry nectar oil infused with cold-pressed prickly pear seed, marula, and meadowfoam seed oils. Shields against environmental pollutants while sealing in luminous moisture.',
    keyIngredients: ['Prickly Pear Seed Oil', 'Organic Marula Oil', 'Vitamin E Tocopherol', 'Blue Tansy Oil'],
    howToUse: 'Press 2-3 drops as the final step of your nighttime routine, or mix with foundation for an ethereal luminous glow.',
    image: '/images/products-line.jpg',
  },
  {
    id: 'hydra-foam-cleanser',
    name: 'Hydra-Foam Gentle Amino Cleanser',
    subtitle: 'pH-Balanced Calming Daily Purifier',
    price: 48,
    size: '150 ml / 5.1 fl oz',
    rating: 4.7,
    reviewsCount: 52,
    description: 'A luxurious cloud-like foam cleanser formulated with gentle amino-acid surfactants that dissolves sebum, sunscreen, and pollutants without stripping vital epidermal moisture.',
    keyIngredients: ['Apple Amino Acids', 'Chamomile Floral Hydrolat', 'Allantoin', 'Colloidal Oatmeal'],
    howToUse: 'Pump 1-2 times onto damp hands, massage in circular motions across face for 60 seconds, and rinse with lukewarm water.',
    image: '/images/products-line.jpg',
  },
  {
    id: 'lash-eye-conditioner',
    name: 'Peptide Lash & Brow Restorative Elixir',
    subtitle: 'Growth-Stimulating Botanical Nutrient Serum',
    price: 64,
    size: '5 ml / 0.17 fl oz',
    rating: 4.9,
    reviewsCount: 41,
    description: 'Prostaglandin-free conditioning serum enriched with biotinoyl tripeptide and red clover extract to strengthen delicate lash follicles and encourage lush density.',
    keyIngredients: ['Biotinoyl Tripeptide-1', 'Myristoyl Pentapeptide-17', 'Panthenol Provitamin B5', 'Red Clover Extract'],
    howToUse: 'Swipe along the upper lash root line and brows nightly after cleansing. Visible density within 4 weeks.',
    image: '/images/products-line.jpg',
  }
];

export const UPSELL_PRODUCTS: Product[] = [
  {
    id: 'botanical-cellular-mist',
    name: 'Botanical Cellular Hydration Mist',
    subtitle: 'Rose Quartz Micro-Filtered Electrolytes',
    price: 38,
    originalPrice: 48,
    size: '100 ml / 3.4 fl oz',
    rating: 5.0,
    reviewsCount: 64,
    badge: '40% Off Add-On',
    description: 'Instant micro-fine refreshing mist with organic damascena rosewater, niacinamide, and deep marine minerals.',
    keyIngredients: ['Damask Rosewater', 'Marine Electrolytes', 'Niacinamide (2%)'],
    howToUse: 'Mist liberally throughout the day to rehydrate skin or set makeup.',
    image: '/images/products-line.jpg',
    isUpsell: true,
  },
  {
    id: 'jade-sculpting-tool',
    name: 'Hand-Carved Xiuyan Jade Gua Sha',
    subtitle: 'Lymphatic Drainage & Facial Contouring',
    price: 28,
    originalPrice: 38,
    size: '100% Authentic Jade',
    rating: 4.9,
    reviewsCount: 88,
    badge: 'Clinic Essential',
    description: 'Custom sculpted jade stone with ergonomic curves to release jawline tension, activate lymph channels, and lift cheekbones.',
    keyIngredients: ['100% Grade-A Natural Xiuyan Jade'],
    howToUse: 'Glide along neck, jaw, and cheekbones at a 15-degree angle with Essenccia Rejuvenation Oil.',
    image: '/images/products-line.jpg',
    isUpsell: true,
  },
  {
    id: 'hydra-recovery-sheet-mask',
    name: 'Biocellulose Collagen Sheet Mask (3-Pack)',
    subtitle: 'Post-Treatment Dermal Soothing Protocol',
    price: 34,
    originalPrice: 45,
    size: '3 Sterile Masks',
    rating: 4.9,
    reviewsCount: 31,
    badge: 'Popular Pair',
    description: 'Sterile second-skin biocellulose mask drenched in 25ml of calming centella, beta-glucan, and peptide serum.',
    keyIngredients: ['Fermented Biocellulose', 'Beta-Glucan', 'Madecassoside'],
    howToUse: 'Apply for 20 minutes after sun exposure or aesthetic treatment for immediate cooling relief.',
    image: '/images/products-line.jpg',
    isUpsell: true,
  }
];

export const CLINIC_INFO = {
  name: 'Essenccia Rejuvenation & Wellness',
  founder: 'Ledy',
  experienceYears: 23,
  tagline: 'Where 23+ years of clinical mastery meets personalized care and advanced science in Westport, Connecticut.',
  address: '25 Sylvan Road South, Suite A',
  city: 'Westport',
  state: 'CT',
  zip: '06880',
  country: 'USA',
  phone: '(203) 486-8989',
  phoneClean: '2034868989',
  hours: {
    weekdays: 'Monday – Saturday: 8:00 AM – 4:00 PM',
    sunday: 'Sunday: Closed by Appointment Only'
  },
  instagram: 'https://www.instagram.com/essenccia_rejuvenation_well/',
  facebook: 'https://www.facebook.com/profile.php?id=100063478875034'
};


export const NEWS_ITEMS = [
  { date: '2026 Award', tag: 'Best of 2026', text: 'Essenccia voted Best Day Spa in Westport, CT by BusinessRate Benchmark Program.' },
  { date: 'Sanctuary', tag: 'Suite Tour', text: 'Step inside our private clinical suites at 155 Post Rd E — watch the new video tour.' },
  { date: 'Oct 2026', tag: 'New Technology', text: 'Rezenerate™ nano-needling protocols now available for first-time clients.' },
  { date: 'Sep 2026', tag: 'Clinic Update', text: 'Complimentary 45-minute consultations with Ledy open for the fall season.' },
  { date: 'Boutique', tag: 'Stem Beauty', text: 'The Essenccia Stem Regenerative Serum returns with a refined peptide complex.' },
];

export const PROMISES = [
  { title: 'Unhurried time', text: 'Every consultation is given the space it deserves. Nobody watches the clock.' },
  { title: 'Clear explanations', text: 'Your skin and your options, explained in plain language without complex medical jargon.' },
  { title: 'Options for your lifestyle', text: 'Protocols adapted to your routine, your budget, and the pace you want to move at.' },
  { title: 'No pressure, no hard sell', text: 'You leave with a clear plan and the freedom to decide when, or whether, to begin.' },
];

export const REASONS = [
  { number: '01', title: '23+ Years of Clinical Mastery', text: 'More than two decades of hands-on aesthetic practice, refined one client at a time.' },
  { number: '02', title: 'Medical Certifications in Colombia & the U.S.', text: 'Training that spans two countries and two medical traditions, applied with a holistic, individualized eye.' },
  { number: '03', title: 'Next-Generation Medical Technology', text: 'Viora RF, Cavi-Lipo, Rezenerate and PRX-T33: advanced, non-surgical tools chosen for measurable results.' },
];

export const RECOMMENDED_IDS = ['rezenerate-nanoneedling', 'cavi-lipo-body-sculpting', 'viora-rf-tightening'];

export const BEFORE_AFTER = [
  { image: '/fotos_webp/before_after_1.webp', treatment: 'PRX-T33 Biorevitalization', goal: 'Tone, pigmentation and texture', result: 'More even, luminous complexion.' },
  { image: '/fotos_webp/before_after_2.webp', treatment: 'Viora RF Lift & Tighten', goal: 'Lower face and neck firmness', result: 'Improved contour and skin tension.' },
  { image: '/fotos_webp/before_after_3.webp', treatment: 'Rezenerate Nano-Needling', goal: 'Eye contour and fine lines', result: 'Smoother, brighter eye area.' },
  { image: '/fotos_webp/before_after_4.webp', treatment: 'Viora RF Lift & Tighten', goal: 'Jawline definition', result: 'Subtle lift along the jawline.' },
  { image: '/fotos_webp/before_after_5.webp', treatment: 'Rezenerate Nano-Needling', goal: 'Forehead lines and texture', result: 'Softer lines and refined texture.' },
  { image: '/fotos_webp/before_after_6.webp', treatment: 'Infusion Electro-Mesotherapy', goal: 'Hydration and eye-area rejuvenation', result: 'Rested, hydrated appearance.' },
];
