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
    image: '/fotos_webp/19e9e2_e52c1f551c734711bf45011da1a835ea~mv2.webp',
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
    image: '/fotos_webp/19e9e2_b889683592fb4cbf820461c3e76b9dea~mv2.webp',
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
    image: '/fotos_webp/19e9e2_cf3668aa0c9d4b82aca9ce4655e724fe~mv2.webp',
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
    image: '/images/treatment-prx-t33.jpg',
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
    image: '/images/treatment-mesotherapy.jpg',
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
    image: '/images/treatment-cellulite.jpg',
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
    image: '/images/treatment-pemf.jpg',
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
    image: '/images/treatment-microdermabrasion.jpg',
  },
  {
    id: 'jawline-sculpt-lift',
    name: 'Jawline Sculpt & Lift (Cavi-Lipo + RF Combo)',
    category: 'face',
    duration: '1 hr',
    price: 'Consultation',
    numericPrice: 0,
    badge: 'Signature Neck Lift',
    shortDesc: 'Our signature non-invasive neck lift refining the lower face, jowls, and neck by lifting, tightening, and smoothing.',
    fullDesc: 'A signature combination of Cavi-Lipo ultrasound and radiofrequency designed to refine the contours of the lower face, jowls, and neck. By lifting, tightening, and smoothing, it restores elegance and balance to your natural profile: a rejuvenation that reflects your true essence.',
    benefits: [
      'Defines the jawline and softens the double chin',
      'Lifts and tightens jowls and neck tissue',
      'Smoothes the lower-face contour with zero downtime',
      'Non-surgical and fully personalized'
    ],
    tech: 'Cavi-Lipo Ultrasound + Radiofrequency Combination',
    image: '/images/treatment-jawline-lift.jpg',
  },
  {
    id: 'advanced-deep-pore-renewal',
    name: 'Advanced Deep Pore Renewal',
    category: 'face',
    duration: '1 hr',
    price: '$125',
    numericPrice: 125,
    badge: 'All Skin Types',
    shortDesc: 'A customized deep-cleansing facial with clinical skin evaluation, exfoliation, aromatic massage, and a finishing mask.',
    fullDesc: 'This customized deep cleansing facial is designed for all skin types. It begins with a comprehensive clinical evaluation of the skin, followed by deep pore cleansing, exfoliation, a relaxing aromatic massage, and a final treatment mask. Your skin will feel supple, smooth, refreshed, and completely nourished.',
    benefits: [
      'Deep pore cleansing and purification',
      'Gentle exfoliation for smooth, refreshed skin',
      'Relaxing aromatic massage',
      'Included in the VIP Special'
    ],
    tech: 'Clinical Skin Evaluation & Hydro-Purifying Protocol',
    image: '/images/treatment-deep-pore.jpg',
  },
  {
    id: 'targeted-fat-reduction',
    name: 'Targeted Fat Reduction Therapy',
    category: 'body',
    duration: '30 min',
    price: 'From $200',
    numericPrice: 200,
    badge: 'Packages Available',
    shortDesc: 'Ultrasound cavitation creating microscopic bubbles in fat cells, eliminated naturally through the lymphatic system.',
    fullDesc: 'Cavi-Lipo uses ultrasound waves to create microscopic bubbles in fat cells, causing them to break down through cavitation. The body then naturally eliminates the released fat via the lymphatic system. One treatment $200; five treatments $650 ($130 each); ten treatments $1,000 ($100 each).',
    benefits: [
      'Reduces stubborn localized fat deposits',
      'Package pricing: 5 sessions $650, 10 sessions $1,000',
      'No surgery, no anesthesia, no downtime',
      'Supports body contour and cellulite therapy'
    ],
    tech: 'Ultrasound Cavitation (Cavi-Lipo)',
    image: '/fotos_webp/19e9e2_ec496819efed47f1bf5c728e126a70d6~mv2.webp',
  },
  {
    id: 'muscle-tone-zerobody',
    name: 'Muscle Tone & Firming (ZeroBody Microcurrent)',
    category: 'body',
    duration: '20 min',
    price: 'From $150',
    numericPrice: 150,
    badge: 'Electrotherapy',
    shortDesc: 'Low-level microcurrent that stimulates cellular activity, enhances muscle tone, and improves skin elasticity.',
    fullDesc: 'ZeroBody technology utilizes microcurrent therapy to deliver low-level electrical currents that stimulate cellular activity, enhance muscle tone, improve skin elasticity, and promote a rejuvenated appearance. One area $150 (20 min); four areas $300 ($75 per session); eight areas $480 ($60 per session).',
    benefits: [
      'Enhances muscle tone and definition',
      'Improves skin elasticity',
      'Supports natural healing and skin revitalization',
      'Series pricing: 4 areas $300, 8 areas $480'
    ],
    tech: 'ZeroBody Microcurrent Therapy',
    image: '/fotos_webp/19e9e2_8a856c4ff78c44ae8807be483df73025~mv2.webp',
  },
  {
    id: 'microcurrent-cellular-care',
    name: 'Microcurrent Cellular Care & Lymphatic Drainage',
    category: 'wellness',
    duration: '20 min',
    price: 'From $150',
    numericPrice: 150,
    badge: 'Lymphatic Support',
    shortDesc: 'Gentle microcurrent stimulation to support lymphatic flow, cellular energy, and skin revitalization.',
    fullDesc: 'Low-level electrical currents stimulate cellular activity and support the lymphatic system, promoting natural healing, circulation, and a rejuvenated appearance. A restorative complement to body and facial protocols.',
    benefits: [
      'Supports lymphatic drainage and circulation',
      'Stimulates cellular activity',
      'Promotes natural healing and revitalization',
      'Comfortable and relaxing'
    ],
    tech: 'ZeroBody Microcurrent Therapy',
    image: '/fotos_webp/19e9e2_ee52b20920f5459c9e094f48af3015bf~mv2.webp',
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
    image: '/images/treatment-consultation.jpg',
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
    image: '/images/product-stem-serum.jpg',
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
    image: '/images/product-barrier-cream.jpg',
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
    image: '/images/product-recovery-oil.jpg',
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
    image: '/images/product-amino-cleanser.jpg',
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
    image: '/images/product-lash-elixir.jpg',
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
    image: '/images/product-hydration-mist.jpg',
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

export const CAVI_LIPO_FAQ = [
  {
    question: 'What is Cavi-Lipo?',
    answer: 'A non-invasive and one of the most advanced and efficient systems using ultrasound technology to break down fat cells by targeting and reducing stubborn fat deposits. Great for men and women who want to reduce fat deposits on the double chin, belly, thighs, hips, breasts, upper arms, or any other trouble area.',
  },
  {
    question: 'Why is it called Cavi-Lipo?',
    answer: 'The therapy uses low-level ultrasound to emulsify fat. Cavitation means the breaking down of the fatty tissue. Noninvasive, non-surgical “liposuction” means the fat is removed in a natural fashion through the lymphatic and urinary systems, at the pace your body can tolerate.',
  },
  {
    question: 'What are the benefits?',
    answer: 'Decreased circumference in the target area; enhanced body tone and contour; improved skin tone and texture; blood and lymphatic circulation; excellent cellulite therapy; connective tissue tightening; detoxification and cleansing; full body oxygenation therapy. No surgery, no anesthesia, no pain, no downtime.',
  },
  {
    question: 'What are the contraindications?',
    answer: 'Individuals with acute or contagious disease, HIV, a history of cancer, kidney failure, liver failure, fatty liver, implant devices such as pacemakers or electrical prosthesis, epilepsy or MS should not undergo Cavi-Lipo. Pregnancy and breast-feeding are also contraindications. Anyone with active contagious skin conditions will not be allowed to undergo treatments. It is best to wait three to six months after a surgical procedure in the target area.',
  },
  {
    question: 'Why can’t I have caffeine or alcohol 48 hours before or after a treatment?',
    answer: 'Alcohol and caffeine interfere with the lymphatic process that removes and metabolizes fat, which can decrease your results.',
  },
];

export const PRIVACY_TERMS_SECTIONS = [
  {
    number: '1',
    title: 'Data Collection',
    text: 'We may collect your name, email address, mailing address, and mobile phone number when you sign up for SMS updates. This information may be collected through our website contact form, email, rental agreement, or third-party reservation systems.',
  },
  {
    number: '2',
    title: 'Data Usage',
    text: 'Your information will only be used for sending updates, promotions, appointment reminders, and communications related to our services.',
  },
  {
    number: '3',
    title: 'Data Security',
    text: 'We use secure storage and protection measures to safeguard your personal information against unauthorized access.',
  },
  {
    number: '4',
    title: 'Data Retention',
    text: 'Your information will be retained as long as you are subscribed to our SMS service. You may request deletion at any time.',
  },
  {
    number: '5',
    title: 'Messaging Rates & Frequency',
    text: 'Message and data rates may apply. Your mobile carrier may charge fees for sending or receiving text messages, especially if you do not have an unlimited plan.\n\nMessages are recurring, and frequency may vary.',
  },
  {
    number: '6',
    title: 'Contact for Help',
    text: 'For assistance, contact us at: phone number: (203) 486-8989 email: info@essencciarejuvenationwellness.com\n\nYou may also reply with the word HELP to receive our contact details via text.',
  },
  {
    number: '7',
    title: 'Opt-Out Instructions',
    text: 'You may opt out of SMS messages at any time by:\n• Replying STOP or CANCEL to any message,\n• Emailing us at info@essencciarejuvenationwellness.com or calling us at (203) 486-8989\n\nAfter unsubscribing, you will receive one final confirmation SMS. Your phone number will be removed from our list within 24 hours.',
  },
  {
    number: '8',
    title: 'Non-Sharing Clause',
    text: 'We do not sell, rent, or share your information with third parties for marketing purposes. ESSENCCIA REJUVENATION & WELLNESS will never share collected mobile numbers with outside parties.',
  },
];

export const SPA_POLICIES = [
  {
    title: 'Cancellations',
    text: '24 hour notice is required for a cancellation and will help us reschedule your appointment. We take our appointments very seriously. Please arrive at least 15 minutes before your appointment to ensure a full treatment session.',
  },
  {
    title: 'Noise',
    text: 'To maintain the peaceful sanctuary of the spa, we request that all visitors maintain conversations at a considerate volume. All mobile phones and electronic devices must be placed on silence mode. Gently closing the doors also maintains tranquility. We appreciate your consideration.',
  },
  {
    title: 'Children',
    text: 'Children are not allowed in the spa. A spa room is only appropriate for you and your therapist. If it is absolutely necessary to have your child with you, please be respectful of other people’s privacy.',
  },
  {
    title: 'Pets',
    text: 'No pets are allowed per the health department.',
  },
];

export interface GoogleReview {
  id: string;
  author: string;
  initials: string;
  avatarBg: string;
  rating: number;
  timeAgo: string;
  isLocalGuide?: boolean;
  totalReviewsByAuthor?: number;
  treatmentTag: string;
  text: string;
  highlight: string;
  ownerResponse?: {
    author: string;
    timeAgo: string;
    text: string;
  };
  associatedImage: string;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'melissa-pucci',
    author: 'Melissa Pucci',
    initials: 'MP',
    avatarBg: 'from-[#484774] to-[#5c6c84]',
    rating: 5,
    timeAgo: '2 years ago',
    totalReviewsByAuthor: 3,
    treatmentTag: 'Radio Frequency & Body Contouring',
    highlight: 'After one treatment of Radio Frequency, the bag under my eye was gone. My stomach changed its shape and stretch marks drastically improved!',
    text: "I visited Essenccia Rejuvenation & Wellness Center for the first time a few months ago. The truth is, I'm now hooked! Her treatments produce lasting results. She has been working on my face and body and the results are truly impressive. I've had this bump/bag under my eye for years - I've tried filler, that didn't work. After one treatment of Radio Frequency, it was gone (I can't believe it). In addition, I've had 3 children, and my stomach shows it. Ledy suggested that I try Body Contouring Treatments (fat melting & skin tightening). I am shocked at the results, my stomach has changed its shape and my stretch marks are drastically improved! I'm amazed that with every treatment, I see results - it's addicting! Results set aside, you leave here feeling pampered and rejuvenated. Truly a treasure. This is for sure a gem in Westport, CT. Thanks Ledy! You are the best!!",
    associatedImage: '/images/hero-clinic.jpg',
  },
  {
    id: 'leah-smith',
    author: 'Leah Smith',
    initials: 'LS',
    avatarBg: 'from-amber-600 to-orange-500',
    rating: 5,
    timeAgo: '5 months ago',
    totalReviewsByAuthor: 1,
    treatmentTag: 'Clinical Skincare Treatments',
    highlight: 'Ledy is amazing!!!!! She is passionate, skillful, talented, and truly just a beautiful person inside and out.',
    text: 'Ledy is amazing!!!!! She is passionate, skillful, talented, and truly just a beautiful person inside and out. My experiences with her are always very personable, which makes me feel so comfortable at all times. Ledy is the best!!!',
    associatedImage: '/images/facial-treatment.jpg',
  },
  {
    id: 'wilma-figueroa',
    author: 'Wilma Figueroa',
    initials: 'WF',
    avatarBg: 'from-indigo-600 to-purple-700',
    rating: 5,
    timeAgo: '2 years ago',
    totalReviewsByAuthor: 2,
    treatmentTag: 'Cavitation Body Sculpting & Facial',
    highlight: 'I had a few cavitation sessions with Ledy and she transformed my body, no need for any surgery because the results were stunning!',
    text: 'Ledy is truly amazing! She is a professional who is very knowledgeable in all areas of beauty. She is honest with what works for each client and is extremely skilled. She is constantly perfecting her technique and informs the client of what she is doing. I had a few cavitation sessions with Ledy and she transformed my body, no need for any surgery because the results were stunning. I also did a facial with her and it was a facial like never before. She incorporated my neck, chest, and back not only was it relaxing but it left my skin nourished and glowing. To top it off, she is so nice and pleasant! I love going to see her.',
    associatedImage: '/fotos_webp/body_sculpt.webp',
  },
  {
    id: 'june-bosik',
    author: 'June Bosik',
    initials: 'JB',
    avatarBg: 'from-emerald-600 to-teal-700',
    rating: 5,
    timeAgo: '2 years ago',
    isLocalGuide: true,
    totalReviewsByAuthor: 17,
    treatmentTag: 'Lymphatic Massages & Ultra Cavitation',
    highlight: 'From lymphatic massages, ultra cavitation and facials, all are phenomenal! You leave feeling so invigorated. She is the best of the best!',
    text: 'Words cannot express the passion Ledy has for her line of work! I have had many treatments performed by her and they are all fabulous. From lymphatic massages, ultra cavitation and facials, all are phenomenal! You leave her beautiful relaxing salon feeling so invigorated and honestly (in la-la land)!!! Ledy takes great pride in her treatments and will never let you down!!! She is the best of the best!!!',
    associatedImage: '/fotos_webp/cavi_lipo.webp',
  },
  {
    id: 'maryclaire-reeves',
    author: 'Maryclaire Reeves',
    initials: 'MR',
    avatarBg: 'from-teal-600 to-cyan-700',
    rating: 5,
    timeAgo: '1 year ago',
    totalReviewsByAuthor: 3,
    treatmentTag: 'Aesthetic Procedures & Facial Care',
    highlight: 'Ledy is a true professional and very knowledgeable about the procedures she performs. Always learning new techniques. I always look forward to my next treatment.',
    text: 'I have had many treatments at Essenccia Rejuvenation & Wellness Center. Ledy is a true professional and very knowledgeable about the procedures she performs. She explains what she is doing and why. She is always learning new techniques and taking online courses. The Spa is a clean and relaxing environment. I always look forward to my next treatment. Thank you, Ledy!',
    ownerResponse: {
      author: 'Ledy Madero (Owner)',
      timeAgo: '1 year ago',
      text: "Thank you so much, Maryclaire! Your kind words mean the world to me. It's always a pleasure treating you, and I truly appreciate your trust. I look forward to seeing you again soon! 💖",
    },
    associatedImage: '/images/ledy-treatment.jpg',
  },
  {
    id: 'aphrodite-karakasis',
    author: 'Aphrodite Karakasis',
    initials: 'AK',
    avatarBg: 'from-blue-600 to-indigo-600',
    rating: 5,
    timeAgo: '5 months ago',
    totalReviewsByAuthor: 9,
    treatmentTag: 'Leg Sculpt, Facial Sculpt & Oxygen',
    highlight: 'I have had leg sculpt, facial sculpt and oxygen treatment. Everything I have done is working great and feels amazing. Clean and peaceful environment!',
    text: 'Ledy is a wonderful lady that cares about you while you are with her. I have had leg sculp, facial sculpt and oxygen treatment. Everything i have done is working great and feels amazing. Clean and peaceful environment!!!',
    associatedImage: '/images/wellness-therapy.jpg',
  },
  {
    id: 'jaime',
    author: 'Jaime',
    initials: 'J',
    avatarBg: 'from-blue-700 to-sky-600',
    rating: 5,
    timeAgo: '1 year ago',
    totalReviewsByAuthor: 3,
    treatmentTag: 'Cavilipo & Radio Frequency',
    highlight: 'I highly recommend Ledy! Doing Body Sculpting Cavilipo and Radio Frequency and I see such an improvement in a very short amount of time.',
    text: 'I highly recommend Ledy! I’ve been doing Body sculpting Cavilipo and Radio Frequency and I see such an improvement in a very short amount of time Ledy is amazing!',
    ownerResponse: {
      author: 'Ledy Madero (Owner)',
      timeAgo: '1 year ago',
      text: "Jaime! Thank you so much for trusting me with your body sculpting journey! I'm thrilled to hear you're seeing great results with the Cavitation Lipo and Radio Frequency treatments. Your progress is amazing, and it's a pleasure to be part of your transformation.",
    },
    associatedImage: '/fotos_webp/cavi_lipo.webp',
  },
  {
    id: 'diana-mager',
    author: 'Diana Mager',
    initials: 'DM',
    avatarBg: 'from-amber-600 to-orange-600',
    rating: 5,
    timeAgo: '2 years ago',
    totalReviewsByAuthor: 6,
    treatmentTag: 'Non-Invasive Face, Neck & Chest',
    highlight: 'My face, neck and upper chest look better and better with every treatment. It changes your look without invasive measures! 10 stars!',
    text: 'What a fantastic experience! I keep going back because my face, neck and upper chest look better and better with every treatment. Ledy is amazing! It’s peaceful, soothing and a great way to pamper yourself but changes your look without invasive measures !!!! 10 stars !',
    associatedImage: '/images/treatment-deep-pore.jpg',
  },
  {
    id: 'rose-azor',
    author: 'Rose Azor',
    initials: 'RA',
    avatarBg: 'from-slate-600 to-slate-800',
    rating: 5,
    timeAgo: '2 years ago',
    totalReviewsByAuthor: 6,
    treatmentTag: 'Facial Pore Refining & Skin Glow',
    highlight: 'I had such a glow, my skin looked clearer and pores noticeably smaller. So glad I came. Ledy is such a kind, caring person.',
    text: 'I had an appointment with Ledy on September 20, 2024. All I can say is that I\'m so happy with the way my skin looked after the facial. I had such a glow, my skin looked clearer and pores noticeably smaller. So glad I came. Ledy is such a kind, caring person and takes so much pride in what she does. I can\'t wait to come back for my next facial. Thank you so much Ledy.',
    associatedImage: '/fotos_webp/rezenerate.webp',
  },
  {
    id: 'theway-iseelt',
    author: 'TheWay IseeIt',
    initials: 'TW',
    avatarBg: 'from-cyan-600 to-teal-800',
    rating: 5,
    timeAgo: '2 years ago',
    isLocalGuide: true,
    totalReviewsByAuthor: 48,
    treatmentTag: 'Hydrogen Inhalation & Light Therapy',
    highlight: 'How relaxing and rejuvenating the session was. I feel I have more swagger in my step. Definitely going back for another session.',
    text: "I must say I am impressed with Ledy and her service. As a man, I was skeptical and even hesitant in considering any form of treatment. That's just the way us men are. After some convincing by my wife and Ledy, I finally gave in and submitted to the 'hydrogen inhalation with light' therapy. I have to tell you how relaxing and rejuvenating the session was. I feel I have more swagger in my step. It just feels great, no other way to describe it. Definitely going back for another session. Ledy is totally professional and explained the benefits and procedure beforehand to waylay any concerns I had.",
    associatedImage: '/images/treatment-pemf.jpg',
  },
  {
    id: 'stamford-instructor',
    author: 'Stamford Lead Instructor',
    initials: 'SL',
    avatarBg: 'from-orange-500 to-amber-600',
    rating: 5,
    timeAgo: '1 year ago',
    totalReviewsByAuthor: 1,
    treatmentTag: 'Body Procedure & Consultation',
    highlight: 'Ledy took the time to explain what the procedure entails and what the end result would be with realistic expectations. Very clean space!',
    text: "Ledi is truly a professional and takes pride in her work! I was a little hesitant at first not really understanding the process but Ledi took the time to explain what the procedure entails and what the end result would be with realistic expectations. The office space is very clean with a welcoming vibe! Ledi I'm so happy that I found You and very happy with my results!",
    ownerResponse: {
      author: 'Ledy Madero (Owner)',
      timeAgo: '1 year ago',
      text: "Thank you so much for your thoughtful words! I'm truly grateful you gave me the opportunity to guide you through the process, and I'm so glad you felt comfortable and informed every step of the way. Creating a welcoming, clean space and setting realistic expectations is very important to me.",
    },
    associatedImage: '/images/hero-clinic.jpg',
  },
  {
    id: 'rosanne-young',
    author: 'Rosanne Young',
    initials: 'RY',
    avatarBg: 'from-purple-700 to-pink-700',
    rating: 5,
    timeAgo: '2 years ago',
    totalReviewsByAuthor: 6,
    treatmentTag: 'Personalized Oasis Session',
    highlight: 'Her facility is an oasis. You get an immediate feeling of relaxation. Hours of pampering with significant results your first visit!',
    text: 'What an amazing experience! Had my first session with Leyda today. She is so passionate about making sure that she customizes the treatments to your exact issues. Her facility is an oasis. You get an immediate feeling of relaxation. Leyda gives you hours of pampering with significant results your first visit! Her many years of experience have made her a valuable resource. Looking forward to my 2nd visit! Thanks Leyda! 😘',
    associatedImage: '/images/hero-clinic.jpg',
  },
  {
    id: 'kevin-piscitelli',
    author: 'Kevin Piscitelli',
    initials: 'KP',
    avatarBg: 'from-rose-600 to-red-600',
    rating: 5,
    timeAgo: '2 years ago',
    totalReviewsByAuthor: 13,
    treatmentTag: 'Long-term Professional Aesthetic Care',
    highlight: 'I have been going to Ledy for many years and she is the consummate professional. Stays on top of new processes and techniques.',
    text: 'I have been going to Ledy for many years and she is the consummate professional. She continues to grow and develop her business and stays on top of new processes and techniques. I have purchased many gift certificates to give to customers and friends for them to experience.',
    associatedImage: '/fotos_webp/ledy_founder.webp',
  },
  {
    id: 'jimena-umana',
    author: 'Jimena Umana',
    initials: 'JU',
    avatarBg: 'from-stone-600 to-stone-800',
    rating: 5,
    timeAgo: '11 months ago',
    totalReviewsByAuthor: 11,
    treatmentTag: 'Targeted Body Sculpting',
    highlight: 'Ledy Madero is an outstanding professional. The changes I have seen in my body are remarkable.',
    text: "Ledy Madero is an outstanding professional. I'm getting body sculpting done by her and the changes I have seen in my body are remarkable.",
    ownerResponse: {
      author: 'Ledy Madero (Owner)',
      timeAgo: '11 months ago',
      text: "Thank you, Jimana! I'm so happy you're seeing such great results. Your dedication truly shows! Grateful you chose ESSENCCIA! Ledy",
    },
    associatedImage: '/fotos_webp/rf_tightening.webp',
  },
];

