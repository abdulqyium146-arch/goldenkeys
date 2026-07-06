// ─── Business Constants ─────────────────────────────────────────────────────

export const SITE_URL = 'https://goldenskeys.com'
export const PHONE = '(214) 555-0147'
export const PHONE_HREF = 'tel:+12145550147'
export const BUSINESS_NAME = "Golden's Casa Linda Keys"
export const TAGLINE = "Casa Linda's Trusted Locksmith"
export const ADDRESS = 'Casa Linda, Dallas, TX 75218'
export const STREET = 'Casa Linda'
export const CITY = 'Dallas'
export const STATE = 'TX'
export const ZIP = '75218'
export const EMAIL = 'info@goldenskeys.com'
export const SINCE = '2004'
export const RATING = '4.9'
export const REVIEW_COUNT = '312'
export const LAT = 32.8379
export const LNG = -96.6989
export const LICENSE = 'TX TACLA'
export const PRICE_RANGE = '$$'

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navServices = [
  { name: 'Emergency Locksmith', href: '/emergency-locksmith' },
  { name: 'Residential Locksmith', href: '/residential-locksmith' },
  { name: 'Commercial Locksmith', href: '/commercial-locksmith' },
  { name: 'Automotive Locksmith', href: '/automotive-locksmith' },
  { name: 'Rekeying Services', href: '/rekeying' },
  { name: 'Key Duplication', href: '/key-duplication' },
]

export const navLocations = [
  { name: 'Dallas TX', href: '/locksmith-dallas-tx' },
  { name: 'Casa Linda', href: '/locksmith-casa-linda' },
  { name: 'Garland TX', href: '/locksmith-garland-tx' },
  { name: 'Mesquite TX', href: '/locksmith-mesquite-tx' },
  { name: 'Richardson TX', href: '/locksmith-richardson-tx' },
  { name: 'Plano TX', href: '/locksmith-plano-tx' },
  { name: 'Rowlett TX', href: '/locksmith-rowlett-tx' },
]

// ─── All Services ─────────────────────────────────────────────────────────────

export const allServices = [
  { name: 'Emergency Locksmith', href: '/emergency-locksmith', category: 'emergency' },
  { name: 'Residential Locksmith', href: '/residential-locksmith', category: 'residential' },
  { name: 'Commercial Locksmith', href: '/commercial-locksmith', category: 'commercial' },
  { name: 'Automotive Locksmith', href: '/automotive-locksmith', category: 'automotive' },
  { name: 'Rekeying Services', href: '/rekeying', category: 'residential' },
  { name: 'Key Duplication', href: '/key-duplication', category: 'residential' },
  { name: 'House Lockout', href: '/house-lockout', category: 'emergency' },
  { name: 'Car Lockout', href: '/car-lockout', category: 'automotive' },
  { name: 'Apartment Lockout', href: '/apartment-lockout', category: 'residential' },
  { name: 'Office Lockout', href: '/office-lockout', category: 'commercial' },
  { name: 'Car Key Replacement', href: '/car-key-replacement', category: 'automotive' },
  { name: 'Transponder Key Programming', href: '/transponder-key-programming', category: 'automotive' },
  { name: 'Key Fob Programming', href: '/key-fob-programming', category: 'automotive' },
  { name: 'Ignition Repair', href: '/ignition-repair', category: 'automotive' },
  { name: 'Motorcycle Key Replacement', href: '/motorcycle-key-replacement', category: 'automotive' },
  { name: 'Push-to-Start Key', href: '/push-to-start-key', category: 'automotive' },
  { name: 'Smart Lock Installation', href: '/smart-lock-installation', category: 'residential' },
  { name: 'Deadbolt Installation', href: '/deadbolt-installation', category: 'residential' },
  { name: 'Lock Installation', href: '/lock-installation', category: 'residential' },
  { name: 'Lock Repair', href: '/lock-repair', category: 'residential' },
  { name: 'High Security Locks', href: '/high-security-locks', category: 'commercial' },
  { name: 'Keypad Lock Installation', href: '/keypad-lock-installation', category: 'commercial' },
  { name: 'Mailbox Locks', href: '/mailbox-locks', category: 'residential' },
  { name: 'Access Control', href: '/access-control', category: 'commercial' },
  { name: 'Master Key Systems', href: '/master-key-systems', category: 'commercial' },
  { name: 'Panic Bar Installation', href: '/panic-bar-installation', category: 'commercial' },
  { name: 'Safe Opening', href: '/safe-opening', category: 'commercial' },
  { name: 'Broken Key Extraction', href: '/broken-key-extraction', category: 'residential' },
  { name: 'New Homeowner Locks', href: '/new-homeowner-locks', category: 'residential' },
]

// ─── All Location Pages ───────────────────────────────────────────────────────

export type LocationData = {
  slug: string
  city: string
  stateFull: string
  zip: string
  lat: number
  lng: number
  description: string
  neighborhoods: string[]
  nearbyLandmarks: string[]
  population: string
}

export const allLocations: LocationData[] = [
  {
    slug: 'locksmith-dallas-tx',
    city: 'Dallas',
    stateFull: 'Texas',
    zip: '75218',
    lat: 32.7767,
    lng: -96.797,
    description: 'Full-service locksmith covering all of Dallas TX, including Casa Linda, East Dallas, Lakewood, Forest Hills, and the greater Dallas metro area.',
    neighborhoods: ['Casa Linda', 'East Dallas', 'Lakewood', 'Forest Hills', 'Lake Highlands', 'White Rock'],
    nearbyLandmarks: ['White Rock Lake', 'Casa Linda Shopping Center', 'Flagpole Hill'],
    population: '1.3M',
  },
  {
    slug: 'locksmith-casa-linda',
    city: 'Casa Linda',
    stateFull: 'Texas',
    zip: '75218',
    lat: 32.8201,
    lng: -96.6987,
    description: 'Local locksmith based in Casa Linda, Dallas TX. We are the neighborhood locksmith serving Casa Linda, Casa Linda Estates, and White Rock Lake area.',
    neighborhoods: ['Casa Linda Estates', 'White Rock Hills', 'Lake Highlands North', 'Lochwood'],
    nearbyLandmarks: ['Casa Linda Plaza', 'White Rock Lake Park', 'Encanto Park'],
    population: '85K (area)',
  },
  {
    slug: 'locksmith-garland-tx',
    city: 'Garland',
    stateFull: 'Texas',
    zip: '75040',
    lat: 32.9126,
    lng: -96.6389,
    description: 'Trusted locksmith in Garland TX. Emergency lockouts, rekeying, car key programming, and commercial security for Garland and surrounding areas.',
    neighborhoods: ['Downtown Garland', 'Firewheel', 'Sachse Road Corridor', 'Rowlett Road'],
    nearbyLandmarks: ['Firewheel Town Center', 'Duck Creek', 'Garland ISD Stadium'],
    population: '246K',
  },
  {
    slug: 'locksmith-mesquite-tx',
    city: 'Mesquite',
    stateFull: 'Texas',
    zip: '75150',
    lat: 32.7668,
    lng: -96.5992,
    description: 'Licensed locksmith serving Mesquite TX. House lockouts, rekeying, commercial locks, and automotive key services across all of Mesquite.',
    neighborhoods: ['Downtown Mesquite', 'Town East', 'Oates Estates', 'Belt Line'],
    nearbyLandmarks: ['Town East Mall', 'Mesquite Rodeo Arena', 'Westlake Park'],
    population: '142K',
  },
  {
    slug: 'locksmith-richardson-tx',
    city: 'Richardson',
    stateFull: 'Texas',
    zip: '75080',
    lat: 32.9482,
    lng: -96.7297,
    description: 'Professional locksmith in Richardson TX serving UT Dallas area, Telecom Corridor, and all Richardson neighborhoods. 24/7 emergency service.',
    neighborhoods: ['UTD Area', 'Telecom Corridor', 'Spring Creek', 'Sherrill Park'],
    nearbyLandmarks: ['UT Dallas', 'Richland College', 'Breckinridge Park'],
    population: '121K',
  },
  {
    slug: 'locksmith-plano-tx',
    city: 'Plano',
    stateFull: 'Texas',
    zip: '75075',
    lat: 33.0198,
    lng: -96.6989,
    description: 'Expert locksmith in Plano TX. Serving Legacy West, Downtown Plano, and all Plano neighborhoods. Smart locks, commercial security, emergency lockouts.',
    neighborhoods: ['Legacy West', 'Downtown Plano', 'Willow Bend', 'Haggard Park'],
    nearbyLandmarks: ['Legacy West', 'Shops at Legacy', 'Oak Point Park'],
    population: '290K',
  },
  {
    slug: 'locksmith-rowlett-tx',
    city: 'Rowlett',
    stateFull: 'Texas',
    zip: '75088',
    lat: 32.9026,
    lng: -96.5637,
    description: 'Reliable locksmith in Rowlett TX. Emergency lockouts, rekeying, smart lock installation, and commercial locksmith services. Fast response to all Rowlett addresses.',
    neighborhoods: ['Waterview', 'Lakeside', 'Downtown Rowlett', 'Liberty Grove'],
    nearbyLandmarks: ['Lake Ray Hubbard', 'Waterview Golf Club', 'Rowlett Creek Preserve'],
    population: '72K',
  },
  {
    slug: 'locksmith-rockwall-tx',
    city: 'Rockwall',
    stateFull: 'Texas',
    zip: '75032',
    lat: 32.9301,
    lng: -96.4597,
    description: 'Trusted locksmith serving Rockwall TX and Lake Ray Hubbard area. Residential, commercial, and automotive locksmith services with fast response times.',
    neighborhoods: ['Downtown Rockwall', 'Harbor District', 'Chandler', 'Heath Road Corridor'],
    nearbyLandmarks: ['The Harbor', 'Lake Ray Hubbard', 'Rockwall County Courthouse'],
    population: '50K',
  },
  {
    slug: 'locksmith-sachse-tx',
    city: 'Sachse',
    stateFull: 'Texas',
    zip: '75048',
    lat: 32.9165,
    lng: -96.5888,
    description: 'Local locksmith in Sachse TX. Serving all Sachse neighborhoods with emergency lockout service, rekeying, and automotive key services. Fast 30-min response.',
    neighborhoods: ['Woodbridge', 'Country Club Estates', 'Sachse Crossing', 'Miles Road'],
    nearbyLandmarks: ['Woodbridge Golf Club', 'Sachse Community Park', 'Miles Road Corridor'],
    population: '29K',
  },
  {
    slug: 'locksmith-wylie-tx',
    city: 'Wylie',
    stateFull: 'Texas',
    zip: '75098',
    lat: 33.0151,
    lng: -96.5388,
    description: 'Professional locksmith in Wylie TX. Emergency lockouts, residential rekeying, commercial security, and automotive locksmith services across Wylie and surrounding areas.',
    neighborhoods: ['Wylie Downtown', 'Dominion of Pleasant Valley', 'Bozman Farms', 'Inspiration'],
    nearbyLandmarks: ['Lavon Lake', 'Wylie East High School', 'Bob Hance Recreation Center'],
    population: '58K',
  },
  {
    slug: 'locksmith-forney-tx',
    city: 'Forney',
    stateFull: 'Texas',
    zip: '75126',
    lat: 32.7482,
    lng: -96.4698,
    description: 'Trusted locksmith in Forney TX. Fast emergency response to all Forney neighborhoods. House lockouts, rekeying, car keys, and commercial lock services.',
    neighborhoods: ['Travis Ranch', 'Gateway Parks', 'Devonshire', 'Clements Ranch'],
    nearbyLandmarks: ['Lake Ray Hubbard', 'Forney Community Park', 'Pinson Road Corridor'],
    population: '30K',
  },
  {
    slug: 'locksmith-sunnyvale-tx',
    city: 'Sunnyvale',
    stateFull: 'Texas',
    zip: '75182',
    lat: 32.7982,
    lng: -96.5538,
    description: 'Expert locksmith serving Sunnyvale TX and the eastern Dallas suburbs. Emergency lockouts, rekeying, automotive key programming. Licensed and insured.',
    neighborhoods: ['Sunnyvale Estates', 'Ranch at Sunnyvale', 'Oakwood Estates', 'Pecan Ridge'],
    nearbyLandmarks: ['Town Lake Park', 'Sunnyvale ISD', 'Collins Road Corridor'],
    population: '6K',
  },
  {
    slug: 'locksmith-balch-springs-tx',
    city: 'Balch Springs',
    stateFull: 'Texas',
    zip: '75180',
    lat: 32.7232,
    lng: -96.6238,
    description: 'Affordable locksmith in Balch Springs TX. Emergency lockouts, residential rekeying, car key replacement, and commercial security. Serving all of Balch Springs 24/7.',
    neighborhoods: ['Lake June', 'Elam Road', 'Belt Line Road Corridor', 'Hickory Tree'],
    nearbyLandmarks: ['Municipal Park', 'Balch Springs Activity Center', 'Lake June Park'],
    population: '25K',
  },
  {
    slug: 'locksmith-seagoville-tx',
    city: 'Seagoville',
    stateFull: 'Texas',
    zip: '75159',
    lat: 32.6426,
    lng: -96.5388,
    description: 'Local locksmith serving Seagoville TX and southeastern Dallas County. House lockouts, rekeying, car key programming, commercial locks. Fast affordable service.',
    neighborhoods: ['Downtown Seagoville', 'Kaufman Street Corridor', 'Cedar Hill Estates', 'Malloy Bridge'],
    nearbyLandmarks: ['Lake Tawakoni nearby', 'Seagoville High School', 'Community Park'],
    population: '17K',
  },
  {
    slug: 'locksmith-heath-tx',
    city: 'Heath',
    stateFull: 'Texas',
    zip: '75032',
    lat: 32.8421,
    lng: -96.4636,
    description: 'Trusted locksmith serving Heath TX and Rockwall County lakefront communities. Residential security upgrades, smart locks, rekeying, and emergency lockout service.',
    neighborhoods: ['Heath Shores', 'Briar Wood', 'Overland Grove', 'Floyd Branch Corridor'],
    nearbyLandmarks: ['Lake Ray Hubbard Shoreline', 'Heath Golf & Athletic Club', 'Floyd Branch Park'],
    population: '9K',
  },
]

// ─── Service Areas (for homepage / footer) ───────────────────────────────────

export const serviceAreas = allLocations.map((l) => ({
  name: l.city,
  zip: l.zip,
  href: `/${l.slug}`,
}))

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const homeFaqs = [
  {
    q: 'How much does a locksmith cost in Dallas TX?',
    a: 'Residential lockout $65–$125, car lockout $50–$100, rekeying $15–$35/lock, car key programming $75–$250. Free estimates available — call us at (214) 555-0147 for an exact quote.',
  },
  {
    q: 'How quickly can you arrive for an emergency?',
    a: 'Typically 15–45 minutes anywhere in the Dallas metro area. We dispatch immediately upon your call, 24/7 — including nights, weekends, and holidays.',
  },
  {
    q: 'Should I rekey or replace my locks after moving in?',
    a: 'Rekeying is usually the better choice — same security, lower cost ($15–$35/lock vs $80–$200+ to replace). We can assess your locks and recommend the best option.',
  },
  {
    q: 'Can you program transponder car keys on-site?',
    a: 'Yes, we carry professional automotive key programming equipment and can program keys for most Toyota, Honda, Ford, Chevrolet, Nissan, and other major vehicles on-site.',
  },
  {
    q: 'What ID do I need when calling a locksmith?',
    a: "For home lockouts: photo ID with matching address. For car lockouts: driver's license + vehicle registration. For businesses: proof of ownership or employment.",
  },
  {
    q: 'What cities do you serve?',
    a: 'We serve all of Dallas County and surrounding areas — Casa Linda, East Dallas, Garland, Mesquite, Richardson, Plano, Rowlett, Sachse, Sunnyvale, Wylie, Forney, Rockwall, Balch Springs, Seagoville, and Heath.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Golden\'s Casa Linda Keys holds a Texas TACLA (Texas Alarm License Act) license and is fully bonded and insured. All technicians are background-checked before employment.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes, we provide free phone estimates for all services. We always quote before starting any work — no hidden fees, no surprises.',
  },
]

// ─── Service Page Configs ─────────────────────────────────────────────────────

export type ServiceConfig = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  badge: string
  subtitle: string
  category: string
  relatedServices: string[]
  priceRange: string
  keywords: string[]
}

export const serviceConfigs: Record<string, ServiceConfig> = {
  'emergency-locksmith': {
    slug: 'emergency-locksmith',
    title: 'Emergency Locksmith',
    metaTitle: 'Emergency Locksmith Dallas TX | 24/7 Fast Response | Golden\'s Keys',
    metaDescription: '24/7 emergency locksmith in Dallas TX. House lockouts, car lockouts, business lockouts. Fast 15–45 min response. Licensed & insured. Call (214) 555-0147 now.',
    h1: '24/7 Emergency Locksmith in Dallas TX',
    badge: '🚨 Emergency Service',
    subtitle: 'Locked out? We dispatch immediately — day or night. Licensed technicians across Dallas metro. Fast 15–45 min response.',
    category: 'Emergency Services',
    relatedServices: ['/house-lockout', '/car-lockout', '/office-lockout', '/residential-locksmith'],
    priceRange: '$65–$200',
    keywords: ['emergency locksmith dallas', '24/7 locksmith dallas tx', 'lockout service dallas', 'emergency lockout dallas'],
  },
  'residential-locksmith': {
    slug: 'residential-locksmith',
    title: 'Residential Locksmith',
    metaTitle: 'Residential Locksmith Dallas TX | House Lockout, Rekeying & More',
    metaDescription: 'Licensed residential locksmith in Dallas TX. House lockout, rekeying, smart lock installation, deadbolt installation. Fast response, upfront pricing. Call (214) 555-0147.',
    h1: 'Residential Locksmith in Dallas TX',
    badge: '🏠 Residential Services',
    subtitle: 'Complete home locksmith services — house lockouts, rekeying, deadbolt installation, smart locks. Licensed, bonded & insured. Fast response across Dallas metro.',
    category: 'Residential Services',
    relatedServices: ['/rekeying', '/smart-lock-installation', '/deadbolt-installation', '/house-lockout'],
    priceRange: '$65–$200',
    keywords: ['residential locksmith dallas', 'home locksmith dallas tx', 'house lockout dallas', 'rekey house dallas'],
  },
  'commercial-locksmith': {
    slug: 'commercial-locksmith',
    title: 'Commercial Locksmith',
    metaTitle: 'Commercial Locksmith Dallas TX | Business Locks & Access Control',
    metaDescription: 'Professional commercial locksmith in Dallas TX. Office lockouts, master key systems, access control, high security locks. Licensed & insured. Call (214) 555-0147.',
    h1: 'Commercial Locksmith in Dallas TX',
    badge: '🏢 Commercial Services',
    subtitle: 'Protect your business with professional commercial lock solutions — master key systems, access control, high security locks, and office lockout service.',
    category: 'Commercial Services',
    relatedServices: ['/access-control', '/master-key-systems', '/high-security-locks', '/office-lockout'],
    priceRange: '$85–$500+',
    keywords: ['commercial locksmith dallas', 'business locksmith dallas tx', 'office lockout dallas', 'master key system dallas'],
  },
  'automotive-locksmith': {
    slug: 'automotive-locksmith',
    title: 'Automotive Locksmith',
    metaTitle: 'Automotive Locksmith Dallas TX | Car Lockout, Key Programming',
    metaDescription: 'Expert automotive locksmith in Dallas TX. Car lockouts, transponder key programming, key fob replacement, ignition repair. All makes & models. Call (214) 555-0147.',
    h1: 'Automotive Locksmith in Dallas TX',
    badge: '🚗 Automotive Services',
    subtitle: 'On-site car key programming, car lockouts, transponder keys, ignition repair. We come to you anywhere in Dallas metro. Licensed, insured, competitive pricing.',
    category: 'Automotive Services',
    relatedServices: ['/car-lockout', '/car-key-replacement', '/transponder-key-programming', '/key-fob-programming'],
    priceRange: '$50–$350',
    keywords: ['automotive locksmith dallas', 'car locksmith dallas tx', 'car key replacement dallas', 'transponder key dallas'],
  },
  'rekeying': {
    slug: 'rekeying',
    title: 'Rekeying Services',
    metaTitle: 'Lock Rekeying Dallas TX | Rekey House After Moving | $15–$35/Lock',
    metaDescription: 'Professional lock rekeying in Dallas TX. Rekey house after moving, lost keys, or security upgrade. $15–$35 per lock. Same-day service. Call (214) 555-0147.',
    h1: 'Lock Rekeying Service in Dallas TX',
    badge: '🔑 Rekeying Services',
    subtitle: 'Professional rekeying for homes, apartments, and businesses. Same security, fraction of replacement cost. New to your home? Rekey first.',
    category: 'Residential Services',
    relatedServices: ['/residential-locksmith', '/deadbolt-installation', '/smart-lock-installation', '/new-homeowner-locks'],
    priceRange: '$15–$35/lock',
    keywords: ['rekey locks dallas tx', 'lock rekeying dallas', 'rekey house dallas', 'locksmith rekeying dallas'],
  },
  'key-duplication': {
    slug: 'key-duplication',
    title: 'Key Duplication',
    metaTitle: 'Key Duplication Dallas TX | House Keys, Car Keys, Security Keys Cut',
    metaDescription: 'Fast key duplication in Dallas TX. House keys, car keys, padlock keys, high security keys. On-site mobile service across Dallas. Call (214) 555-0147.',
    h1: 'Key Duplication Service in Dallas TX',
    badge: '🗝️ Key Duplication',
    subtitle: 'Fast, accurate key duplication for all types — house keys, car keys, padlock keys, and restricted security keys. Mobile service across Dallas metro.',
    category: 'Key Services',
    relatedServices: ['/rekeying', '/car-key-replacement', '/residential-locksmith', '/transponder-key-programming'],
    priceRange: '$5–$150',
    keywords: ['key duplication dallas tx', 'key cutting dallas', 'duplicate keys dallas', 'copy keys dallas'],
  },
}
