import { getAssetUrl } from "@/lib/get-asset-url";

const cdn = "https://cdn.prod.website-files.com/6a20eb17fa7f874df9ab69d2/";
const legacy = "https://s3.amazonaws.com/webflow-prod-assets/6a20eb17fa7f874df9ab69d2/";

export const CORPORATE_NAV = [
  { href: "/company-introduction", label: "Company Introduction" },
  { href: "/social-responsibility", label: "Social Responsibility" },
  { href: "/principal-policies", label: "Principles & Policies" },
  { href: "/4-millionth-rollout", label: "4 Millionth Rollout" }
] as const;

export const FOUR_MILLIONTH_ROLLOUT_IMAGES = [
  "6a4b1bf77eb026e80b510ae1_4-millionth-rollout-12_002.jpg",
  "6a4b1bfe2a6dee9e170764b4_4-millionth-rollout-21.jpg",
  "6a4b1c03a6b21e66fab2a27c_4-millionth-rollout-32.jpg",
  "6a4b1c0c8eb07b9ca5b7b3b1_4-millionth-rollout-41.jpg",
  "6a4b1c11e878aadb657a9150_4-millionth-rollout-5.jpg",
  "6a4b1c15e0c8a74776c36e82_4-millionth-rollout-62.jpg",
  "6a4b1c18053a0ea44a4d2618_4-millionth-rollout-71.jpg",
  "6a4b1c1dd0e0f799d7ecfa9c_4-millionth-rollout-8.jpg",
  "6a4b1c21f2b3031b92e43423_4-millionth-rollout-9.jpg",
  "6a4b1c24ee8a179649db0884_4-millionth-rollout-10.jpg",
  "6a4b1c29d30e0dd5356c8f4e_4-millionth-rollout-111.jpg",
  "6a4b1c2cf2b3031b92e435cb_4-millionth-rollout-12.jpg",
  "6a4b1c2ff23ec83d3c989d13_4-millionth-rollout-13.jpg",
  "6a4b1c322a6dee9e17076b94_4-millionth-rollout-14.jpg",
  "6a4b1c366a094d32e02e7e9a_4-millionth-rollout-15.jpg",
  "6a4b1c3967feb6e78c5195a7_4-millionth-rollout-16.jpg",
  "6a4b1c3c0b17a51efed4237f_4-millionth-rollout-17.jpg"
].map((name) => cdn + name);

export const CORPORATE_IMAGES = {
  hero: getAssetUrl("hlym/corporate-hero.webp"),
  complex: cdn + "6a45138b2cad2735d297be8a_company-pic.jpg",
  ccsPledge: cdn + "6a45e656eecc21ca675c339a_CSS-PLEDGE.jpg",
  safety: cdn + "6a45e02c79a552885d0839b7_social-demonstration.jpg",
  environment: legacy + "6a460d1eecb9eb25675006aa_principles-environmental-policy.jpg"
} as const;

export const CORPORATE_MILESTONES = [
  {
    year: "1979",
    title: "The first Yamaha RX100",
    copy: "The first CKD Yamaha street model rolled out at the Shah Alam plant."
  },
  {
    year: "1988",
    title: "500,000 motorcycles",
    copy: "The 500,000th locally assembled Yamaha motorcycle rolled off the line."
  },
  {
    year: "1994",
    title: "One million motorcycles",
    copy: "HLYM celebrated the rollout of its 1,000,000th Yamaha motorcycle in Malaysia."
  },
  {
    year: "1997",
    title: "A new home",
    copy: "Operations moved to the 36-acre Hong Leong Yamaha Complex, housing the main office, R&D Centre, four factories and a warehouse.",
    image: CORPORATE_IMAGES.complex,
    imageAlt: "Hong Leong Yamaha Complex in Sungai Buloh"
  },
  {
    year: "2018",
    title: "Four million motorcycles",
    copy: "HLYM reached its four-millionth locally assembled Yamaha motorcycle.",
    image: FOUR_MILLIONTH_ROLLOUT_IMAGES[0]!,
    imageAlt: "Four millionth rollout programme artwork",
    secondaryImage: FOUR_MILLIONTH_ROLLOUT_IMAGES[1]!,
    secondaryImageAlt: "Four millionth rollout event programme"
  }
] as const;

export const SAFETY_GALLERY = [
  { title: "Theory", image: cdn + "6a45e02a78186a33122303a6_social-theory.jpg" },
  { title: "Participants", image: cdn + "6a45e02b78186a331223049b_social-participants.jpg" },
  { title: "Q & A", image: cdn + "6a45e02bc954a9dbbeca1ab7_social-qa.jpg" },
  { title: "Demonstration", image: cdn + "6a45e02c79a552885d0839b7_social-demonstration.jpg" },
  { title: "Practical", image: cdn + "6a45e02d7a7239f7ef994dda_social-practical.jpg" },
  { title: "Certification", image: cdn + "6a45e02dcd9c73f2de45d1ef_social-certification.jpg" }
] as const;

export const ROAD_SAFETY_GALLERY = [
  { title: "Theme", image: cdn + "6a45e02ea683fc747197059c_social-theme1.jpg" },
  { title: "Press conference", image: cdn + "6a45e02f2829a41f3763aeb4_social-press.jpg" },
  { title: "Official launch", image: cdn + "6a45e02f79a552885d083c56_social-official.jpg" },
  {
    title: "Free maintenance 15-point check",
    image: cdn + "6a45e02f6a81b4aa1ee9769b_social-free.jpg"
  },
  { title: "Gallery & helmet exchange", image: cdn + "6a45e0301c6bffc8d44a4767_social-GALLERY.jpg" }
] as const;

export const CORPORATE_POLICIES = [
  {
    title: "Environmental Policy",
    image: CORPORATE_IMAGES.environment,
    copy: "HLYM recognises the need for environmental protection and is committed to responsible use of energy, water and resources, reducing pollution and continually improving its environmental management programmes.",
    document: legacy + "6a460fdb2ee628c43b3b9ac1_Env-Policy-Rev-7-English-Version.pdf"
  },
  {
    title: "Quality Policy",
    image: legacy + "6a460d1e5170472712eaa437_principles-quality-policy.jpg",
    copy: "We are committed to provide high quality products and services at competitive prices that meet customer and applicable legal requirements. We strive for continual improvement and cost effectiveness through quality and productivity programmes."
  },
  {
    title: "Environmental Procedures for Suppliers and Contractors",
    image: legacy + "6a460d1f2ee628c43b39c1d8_principles-env-procedures-suppliers.jpg",
    copy: "Requirements for suppliers and contractors entering HLYM cover chemical handling, waste management, transportation, servicing of plant facilities and spill control.",
    document: legacy + "6a460fdb7134889b5d8f0f07_Environmental-Procedures-for-Supplier-Rev5.pdf"
  },
  {
    title: "Green Procurement Guidelines",
    image: legacy + "6a460d1fcaf911b9a066d906_principles-green-procurement.jpg",
    copy: "Yamaha Global procurement guidelines for HLYM suppliers support environmental protection and control of environmentally hazardous substances in products delivered to HLYM.",
    document: legacy + "6a460fdd4592454b2a3a8450_GREENGUIDE21EN.pdf"
  },
  {
    title: "Occupational Safety & Health Policy",
    image: legacy + "6a460d57e44c506d79337e42_principles-occupational-safety-health-policy.jpg",
    copy: "Read HLYM’s occupational safety and health policy.",
    document: legacy + "6a460fde24dad61b8cdd4fdd_HLYM-Safety-Health-Policy-2018.pdf"
  },
  {
    title: "Anti-Bribery & Corruption Policy",
    image: legacy + "6a460d589a0d87beb814193d_principles-anti-bribery-corruption-policy.jpg",
    copy: "Read the Hong Leong Industries anti-bribery and corruption policy.",
    document: legacy + "6a460fdefd6ecfa34828a31c_HLI-Anti-Bribery-n-Corruption-Policy-VW-v7.4.pdf"
  },
  {
    title: "Whistleblowing Policy",
    image: legacy + "6a460d59f939f7fa500bbc39_principles-whistleblowing-policy.jpg",
    copy: "Read the Hong Leong Industries whistleblowing policy.",
    document: legacy + "6a460fe24592454b2a3a84b3_HLI-Whistleblowing-Policy-v8.pdf"
  },
  {
    title: "Supplier Code of Conduct & Ethics",
    image: legacy + "6a460d5a7134889b5d8d4211_principles-supplier-code-of-conduct.jpg",
    copy: "Read the Hong Leong Industries supplier code of conduct and ethics.",
    document: legacy + "6a460fe39a0d87beb81663c2_HLI-Supplier-Code-of-Conduct-Ethic.pdf"
  }
] as const;
