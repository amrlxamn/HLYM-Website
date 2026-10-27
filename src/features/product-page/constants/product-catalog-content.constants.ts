import type { ProductFullSpecificationItem } from "../types/product-page.types";

type CatalogContent = {
  cover?: string;
  features: readonly ProductFullSpecificationItem[];
};

const cdn = "https://cdn.prod.website-files.com/6a20eb17fa7f874df9ab69d2/";

function feature(title: string, description: string, image: string): ProductFullSpecificationItem {
  return { title, description, image: { alt: title, src: cdn + image } };
}

// Model-specific imagery and copy from yamaha-motor.com.my/product-content/*.
export const PRODUCT_CATALOG_CONTENT: Record<string, CatalogContent> = {
  xsr155: {
    cover: cdn + "6a97ddc13b5d828a7c5553ff_26XSR155-BR.jpg",
    features: [
      feature(
        "155cc VVA Enjin Sejukan Cecair",
        "Enjin moden dengan teknologi VVA yang memberikan kuasa responsif dan tunggangan lebih lancar dalam pelbagai kelajuan.",
        "6a97d3109aad9ee4bb4987ff_XSR155-Enjin.jpg"
      ),
      feature(
        "ABS 2-Saluran",
        "Sistem brek ABS pada roda hadapan dan belakang untuk kawalan membrek yang lebih yakin.",
        "6a98295b039881590fa805f3_XSR155-ABS-1.jpg"
      ),
      feature(
        "Klac Assist & Slipper",
        "Penukaran gear lebih ringan dan lancar, dengan kawalan lebih stabil ketika menurunkan gear.",
        "6a98295e1e02566cc9105a43_XSR155-Klac.jpg"
      )
    ]
  },
  "xmax-300": {
    cover: cdn + "6a9d8ffc25f795ed3d24ec58_26XMAX-BR.jpg",
    features: [
      feature(
        "Blue Core 300cc Engine",
        "Delivers strong, seamless acceleration with efficient performance for effortless city rides and confident open-road cruising.",
        "6a9d9000e1a7baff5acc9953_Engine.jpg"
      ),
      feature(
        "Comfortable Ergonomics and Leather Style Seat Cover",
        "A relaxed riding position, spacious footboards and premium seat finish keep both rider and passenger comfortable throughout the journey.",
        "6a9d9001979330a78abe128e_Seat-Cover.jpg"
      ),
      feature(
        "Premium Tech MAX Finishing",
        "Exclusive textures, refined details and signature Tech MAX accents create a distinctly premium look and feel.",
        "6a9d9001657b94e2f604e416_finishing.jpg"
      )
    ]
  },
  y16zr: {
    cover: cdn + "6a9d1936c22a4a2c24bdc1ce_Y16-Green.jpg",
    features: [
      feature(
        "Lampu Hadapan LED",
        "Lampu hadapan LED berwajah tajam memberikan pencahayaan yang lebih terang sambil menyerlahkan gaya sporty Y16ZR-R.",
        "6a9d1c0e33e7659204b3d155_y16zr-led.jpg"
      ),
      feature(
        "Intake Sound Dengan Twin Funnel",
        "Sistem Twin Funnel Intake menghasilkan bunyi sedutan enjin yang lebih garang untuk pengalaman tunggangan yang lebih mengujakan.",
        "6a9d1c1008e4ea8fd690b6c7_y16zr-funnel.jpg"
      ),
      feature(
        "Speedometer Digital LCD",
        "Paparan LCD digital moden memaparkan maklumat tunggangan dengan jelas untuk pengalaman yang lebih pintar.",
        "6a9d1c11524f474a15d035ba_y16zr-speedometer.jpg"
      )
    ]
  },
  y15zr: {
    cover: cdn + "6a9d7784a2b5bf965e3e5b49_26Y15SE-BR.jpg",
    features: [
      feature(
        "LED Modern Headlights",
        "The new LED headlights provide clear lighting while adding a sporty look.",
        "6a9d6d3499d1a5b211c800da_LED-MODERN-HEADLIGHTS.jpg"
      ),
      feature(
        "Wider Front Tyre",
        "A wider front tyre brings a more comfortable ride and a stronger stance.",
        "6a9d6d34657b94e2f6ff3f13_WIDER-FRONT-TYRE.jpg"
      ),
      feature(
        "LCD Meter Panel",
        "The full LCD meter panel presents riding information in a brighter, easy-to-read format.",
        "6a4f6c41f0ebb245e58bad92_Y15ZR%20feature%20LCD%20meter%20panel.jpg"
      )
    ]
  },
  "135lc-fi": {
    cover: cdn + "6a9d74fd96b5375232c6ab3e_26135LC-BR.jpg",
    features: [
      feature(
        "Yamaha Premium Basket",
        "Bakul Yamaha 2-dalam-1 yang direka khas untuk penyimpanan tambahan. Didatangkan khas untuk model SE sahaja.",
        "6a9d7247592e74f82b57124c_Premium-Basket--b7ca6e4b1a48f668.jpg"
      ),
      feature(
        "Enjin Suntikan Bahan Api EU4",
        "Dikuasakan oleh enjin klac automatik 135cc dengan suntikan bahan api dan sejukan cecair.",
        "6a9d72448c2579098599f303_Enjin--4f2bc8ac97013c6c.jpg"
      ),
      feature(
        "Cara Mudah Membuka Tempat Duduk",
        "Pusingkan kunci ke kiri untuk membuka tempat duduk tanpa perlu menarik keluar kunci.",
        "6a9d72468c2579098599f565_Membuka-Tempat-Duduk--2dae3a6b49d6acd1.jpg"
      )
    ]
  },
  "yzf-r25": {
    cover: cdn + "6a9d758908e4ea8fd69efad7_25R25-BR.png",
    features: [
      feature(
        "YZF-R1 Inspired Front",
        "The front fairing and screen take inspiration from the YZF-R1, with a central air duct and cross-layered panels for cooling airflow.",
        "6a9d75fc72c4c4fe4458f055_Penampilan-Agresif.jpg"
      ),
      feature(
        "Dual LED Headlights",
        "YZF-R1-inspired LED headlights bring visibility and a distinctive R-series look.",
        "6a9d758a6eea1dc8de1ced4b_LED.jpg"
      ),
      feature(
        "3 in 1 Main Switch",
        "A big-bike-inspired main switch combines starter and engine controls.",
        "6a9d6d2c2ad674a13142bc6f_Suis-Utama-3-Dalam-1.jpg"
      )
    ]
  },
  tmax: {
    cover: cdn + "6a9d750783c9404b340cd6e9_26TMAX-BR.jpg",
    features: [
      feature(
        "Emergency Stop Signal",
        "Extra safety, when it matters most.",
        "6a9d7509c33c64e77dd5718b_5e98775e-ESS.jpg"
      ),
      feature(
        "New Front Fairing",
        "Dual-eye headlights and a restyled front end give the TMAX sharper, sportier lines.",
        "6a9d757fd5f06fa5211110ba_Fairing.jpg"
      ),
      feature(
        "Textured Seat Cover",
        "A fresh seat design adds comfort and a premium finish.",
        "6a9d757f72c4c4fe4458d7ba_Seat-Cover.jpg"
      )
    ]
  },
  "tenere-700": {
    cover: cdn + "6a9d7781e3a179fb3ccb1e99_26TENERE700-BR.jpg",
    features: [
      feature(
        "Rally-Bred Headlight and Body",
        "The rally-inspired design retains the Ténéré silhouette and updates its quad LED headlamp for improved visibility.",
        "6a9d7349979330a78ab8ff43_Headlight--b1570a60d96dfa81.jpg"
      ),
      feature(
        "690cc CP2 Engine",
        "Yamaha’s CP2 engine receives electronic throttle, a new air intake and a smoother gearshift.",
        "6a9d7348e7ac837cc22ec8c7_Engine-1--f7dfb3b8ce6ed992.jpg"
      ),
      feature(
        "Fully Adjustable Suspension",
        "Long-travel suspension and fully adjustable front forks support confident riding over rough terrain.",
        "6a9d73489cfa34df00909836_Adjustable-Suspension--f28492a4a4d6aa3a.jpg"
      )
    ]
  },
  "pg-1": {
    cover: cdn + "6a9d777c2ad674a131471842_26PG1-BR.jpg",
    features: [
      feature(
        "Lampu Depan dan Belakang Ikonik",
        "Lampu berbentuk bulat yang ringkas melengkapkan reka bentuk bergaya model ini.",
        "6a9d7403979330a78ab96398_Lampu.jpg"
      ),
      feature(
        "Dwi Kerusi Terpisah",
        "Penutup tangki bahan api di bawah tempat duduk penunggang memudahkan pengisian bahan api.",
        "6a9d740283c9404b340c6d06_Dwi-Kerusi.jpg"
      ),
      feature(
        "Pelindung Suspensi Depan",
        "Memberi perlindungan tambahan daripada kotoran ketika menunggang.",
        "6a9d7404c22a4a2c24ccf08e_51937c62-Suspensi.jpg"
      )
    ]
  },
  "tracer-9-gt": {
    cover: cdn + "6a9d7706a2b5bf965e3e35af_26TRACER9GT-BR.jpg",
    features: [
      feature(
        "More Comfortable Ergonomics",
        "A longer subframe, padded seats and a revised handlebar position create more space and a relaxed posture for rider and passenger.",
        "6a9d770ba02953dfdee30f6d_Ergonomics.jpg"
      ),
      feature(
        "Smart Key System",
        "Start the Tracer 9 GT and operate the steering lock and fuel cap without a physical ignition key.",
        "6a9d770df9f12aa6028456dd_Smart-Key.jpg"
      ),
      feature(
        "3rd Generation Quick Shifter",
        "Clutchless upshifts and downshifts make gear changes smoother and more effortless.",
        "6a9d770d4a935f84bb3c6df6_Quick-Shifter.jpg"
      )
    ]
  },
  nmax: {
    cover: cdn + "6a9d7704a7122d6b7a1732f1_26NMAX-BR.jpg",
    features: [
      feature(
        "Sistem Brek Dwi Saluran ABS",
        "Sistem brek membantu menghalang penguncian roda secara tidak sengaja di permukaan jalan licin.",
        "6a9d72cef9f12aa602834877_Dual-ABS--8b400b2926b2f595.jpg"
      ),
      feature(
        "Sistem Kunci Pintar",
        "Sistem keyless dilengkapi Answer Back System untuk membantu mencari motosikal di tempat parkir.",
        "6a9d734233e7659204c28c17_Kunci-Pintar--384ccbe3cb575c0e.jpg"
      ),
      feature(
        "Meter Digital LCD",
        "Meter LCD serta sambungan Y-Connect memaparkan data tunggangan kepada penunggang.",
        "6a9d73435863441d3d6291aa_Meter-Digital--1bb9c0997689aee7.jpg"
      )
    ]
  },
  "ego-avantiz": {
    cover: cdn + "6a9d76056bd8d3c0e8f42703_26EgoAvantiz-BR.jpg",
    features: [
      feature(
        "Stylish Exhaust",
        "A distinctive exhaust housing complements the scooter’s sporty profile.",
        "6a9d6c43d5f06fa5210fb2df_Ego-Avantiz-Stylish-exhaust.jpg"
      ),
      feature(
        "Generous Storage",
        "A 14L under-seat compartment accommodates personal items and a jet-type helmet.",
        "6a9d6c41f9f12aa6028252bf_Ego-Avantiz-Generous.jpg"
      )
    ]
  },
  "ego-gear": {
    cover: cdn + "6a9d74054a935f84bb3b9e90_25GEARPRO-BR.jpg",
    features: [
      feature(
        "Papan Lantai Anti-Slip Yang Lebar",
        "Ruang kaki yang luas dan stabil memberi keselesaan dalam setiap perjalanan.",
        "6a9d749c762a4aa11fb9533e_Tempat-Kaki.jpg"
      ),
      feature(
        "Pemegang Belakang Dengan Tapak Rata",
        "Reka bentuk serba guna untuk mengikat barang atau kargo.",
        "6a9d7499c33c64e77dd53530_Pemegang-Belakang.jpg"
      ),
      feature(
        "Soket Elektrik Mudah Capai",
        "Soket untuk mengecas telefon atau peranti digital ketika dalam perjalanan.",
        "6a9d71dd762a4aa11fb89026_Soket-Pengecas--31dcbf16cdcd9fd9.jpg"
      )
    ]
  },
  "mt-09": {
    cover: cdn + "6a9d7408a7122d6b7a16005d_25MT09-BR.jpg",
    features: [
      feature(
        "Intuitive Control Switch",
        "A dedicated switch controls smartphone connectivity, navigation and cruise control.",
        "6a9d724e63701b2752460268_Control-Switch--28dda4cfe5250d07.jpg"
      ),
      feature(
        "5-Inch TFT Display",
        "The full-colour display offers customisable themes and connectivity with Y-Connect and Garmin StreetCross.",
        "6a9d72be8c257909859a25c3_TFT--3ab929b999f21cfb.jpg"
      )
    ]
  },
  r15m: {
    cover: cdn + "6a9d74a279b4bc2d72ffa836_25R15M-BR-1.jpg",
    features: [
      feature(
        "Enjin 155CC LC4V Dengan VVA",
        "Enjin 155cc dengan teknologi VVA memberi prestasi kuasa yang lebih optimum.",
        "6a9d725008e4ea8fd69db4e7_Enjin-155CC--68e402331e5a49c7.jpg"
      ),
      feature(
        "Handlebar Crown Diinspirasikan YZR-M1",
        "Reka bentuk triple clamp baharu melengkapkan suspensi hadapan dan memberi tunggangan lebih stabil.",
        "6a9d72b9c22a4a2c24cc5684_Handlebar-Crown--21b72f760f5e9363.jpg"
      )
    ]
  },
  "xmax-250": {
    cover: cdn + "6a9d750483ef584481dfdf0d_25XMAX-BR.jpg",
    features: [
      feature(
        "Emergency Stop Signal",
        "Signals flash under hard braking to alert other road users.",
        "6a9d7508762a4aa11fb96ee7_ESS-1.jpg"
      ),
      feature(
        "Remapped Traction Control",
        "Updated traction control supports smoother handling in changing conditions.",
        "6a9d7581a02953dfdee25f7a_Traction-Control.jpg"
      ),
      feature(
        "USB-C Charging Port",
        "Keep devices charged on the move with a USB-C port.",
        "6a9d7583c33c64e77dd5b572_USB-C.jpg"
      )
    ]
  },
  "mt-15": {
    cover: cdn + "6a9d73ff83c9404b340c6bf4_25MT15-BR.jpg",
    features: [
      feature(
        "LCD Meter Panel",
        "A multi-function LCD display presents riding information at a glance.",
        "6a9d6dcce7ac837cc22c5cb8_2cef47b5-Meter.jpg"
      ),
      feature(
        "Inverted Front Fork",
        "Inverted front forks and an aluminium triple clamp offer agile cornering response.",
        "6a9d6dcb72c4c4fe4457c2a2_Inverted-Front-Forks.jpg"
      ),
      feature(
        "Assist & Slipper Clutch",
        "Lighter clutch operation supports smooth downshifts and reduces rider fatigue.",
        "6a9d6dcb3ae12a68fa6322f6_Klac-Assist.jpg"
      )
    ]
  },
  "y16zr-6mro-limited-edition": {
    cover: cdn + "6a9d749d2ad674a13145e5cd_246MRO-BR.jpg",
    features: [
      feature(
        "Glow-in-the-Dark Emblem",
        "A glow-in-the-dark emblem makes this limited edition stand out day or night.",
        "6a9d749f151102895341be48_Glow-in-the-dark.jpg"
      ),
      feature(
        "Chameleon Effect",
        "Special UV graphics change colour as the light shifts.",
        "6a9d749f33e7659204c341e9_Chameleon-Effect.jpg"
      ),
      feature(
        "Unique Serial Number",
        "Each Y16ZR Limited Edition carries its own collector’s serial number.",
        "6a9d74a1f29b4bd21eea93be_Serial-Number.jpg"
      )
    ]
  },
  "mt-25": {
    cover: cdn + "6a9d73fff9f12aa60283c576_24MT25-BR.jpg",
    features: [
      feature(
        "LCD Meter Panel",
        "The LCD meter panel includes a shift timing light and easy-to-read information.",
        "6a9d6d36f9f12aa6028280de_LCD-Meter-Panel.jpg"
      ),
      feature(
        "Inverted Front Fork",
        "Inverted front forks and an aluminium upper clamp support confident cornering and braking.",
        "6a9d6d3699d1a5b211c80280_78267901-Front-Fork.jpg"
      ),
      feature(
        "Front and Rear ABS Brakes",
        "Dual-channel ABS supports stopping power in changing weather conditions.",
        "6a9d6d353ae12a68fa62c9fc_ABS-Brakes.jpg"
      )
    ]
  },
  "y16zr-doxou": {
    cover: cdn + "6a9d71db33e7659204c1cec0_23Y16DX-BR--8e96ae28cb155d84.png",
    features: [
      feature(
        "Penarik Tuas Klac Lebih Pendek",
        "Tuas klac yang lebih pendek memberikan cengkaman lebih selesa ketika menukar gear.",
        "6a9d7173ce65a0766f17d197_Klac--6fad4f465f8cb2f8.jpg"
      ),
      feature(
        "Enjin 155CC Dengan VVA",
        "Enjin sejukan cecair 155cc dengan VVA memberi kuasa untuk tunggangan harian.",
        "6a9d71706f7acb53f7cc394b_155CC-VVA--e4434de3c237f269.jpg"
      ),
      feature(
        "Gearbox 6 Kelajuan",
        "Pemetaan pencucuhan bagi setiap gear menghasilkan daya dorong yang responsif.",
        "6a9d717183ef584481de60f2_Gearbox-Kelajuan-1--b1ef506d9e7d4ce9.jpg"
      )
    ]
  },
  yseries: {
    cover: cdn + "6a9d193499d1a5b211b4bae9_26Y16-Pramac.png",
    features: []
  },
  ez115: { features: [] }
};
