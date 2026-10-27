import type { ProductColorOption } from "../types/product-page.types";

const cdn = "https://cdn.prod.website-files.com/6a20eb17fa7f874df9ab69d2/";
const cms = "https://cdn.prod.website-files.com/6a448abbfd3494482fc8242e/";

function option(model: string, label: string, image: string, swatch: string): ProductColorOption {
  return {
    alt: `Yamaha ${model} in ${label}`,
    image: image.startsWith("http") ? image : cdn + image,
    label,
    swatch: swatch.startsWith("http") || swatch.startsWith("data:") ? swatch : cdn + swatch
  };
}

function solidSwatch(color: string) {
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"><rect width="25" height="25" fill="${color}"/></svg>`)}`;
}

// Colours and swatches are sourced from each model's Yamaha product page or official CMS variants.
export const PRODUCT_CATALOG_COLORS: Record<string, readonly ProductColorOption[]> = {
  xsr155: [
    option(
      "XSR155",
      "Royale Hitam",
      "6a98019c0335ab9634b05dc7_XSR155-Royale-Hitam.png",
      "6a98295c1e02566cc91059d4_XSR155-Black.png"
    ),
    option(
      "XSR155",
      "Perak Klasik",
      "6a98019c404937e7386b120e_XSR155-Perak-Klasik.png",
      "6a98295de763b80e51398ff4_XSR155-Grey.png"
    ),
    option(
      "XSR155",
      "Malar Hijau",
      "6a98019dab6db4a9180071a3_XSR155-Malar-Hijau.png",
      "6a98295dd85c11d86bfa4586_XSR155-Green.png"
    )
  ],
  "xmax-300": [
    option(
      "XMAX 300",
      "Crystal Graphite",
      "6a9d8ffef9f12aa60288da92_26XMAX-CrystalGaphite.png",
      "6a9d8ffc25f795ed3d24ec6e_Dark-Grey.jpg"
    )
  ],
  y16zr: [
    option(
      "Y16ZR-R",
      "Yoru Black",
      "6a9d192dce65a0766f04502b_26Y16-YoruBlack.png",
      "6a9d193525f795ed3d0ce952_Y16-Black.jpg"
    ),
    option(
      "Y16ZR-R",
      "Raijin Green",
      "6a9d192dd5f06fa521fdfd4e_26Y16-RaijinGreen.png",
      "6a9d1936c22a4a2c24bdc1ce_Y16-Green.jpg"
    ),
    option(
      "Y16ZR-R",
      "Kouka Grey",
      "6a9d1932d5f06fa521fdfeae_26Y16-KoukaGrey.png",
      "6a9d193999d1a5b211b4bc2d_Y16-Grey.jpg"
    ),
    option(
      "Y16ZR-R",
      "Pramac",
      "6a9d193499d1a5b211b4bae9_26Y16-Pramac.png",
      "6a9d193b33e7659204b254cd_Y16-Pramac.jpg"
    )
  ],
  y15zr: [
    option(
      "Y15ZR",
      "Royal Maroon",
      "6a9d7785f9f12aa602847a6d_26Y15SE-RoyalMaroon.png",
      "6a9d7601f9f12aa602841ba5_Royal-Maroon.jpg"
    ),
    option(
      "Y15ZR",
      "Blue",
      "6a9d75fec22a4a2c24cdeef8_25Y15ZR-Blue-1.png",
      "6a9d760056b7da39198c90c7_Blue.jpg"
    ),
    option(
      "Y15ZR",
      "Green",
      "6a9d75fec22a4a2c24cdef3e_25Y15ZR-Green.png",
      "6a9d76005863441d3d63db6f_Green.jpg"
    ),
    option(
      "Y15ZR",
      "Violet",
      "6a9d75ffc33c64e77dd60186_25Y15ZR-Violet.png",
      "6a9d760156b7da39198c9152_Violet.jpg"
    )
  ],
  "135lc-fi": [
    option(
      "135LC Fi",
      "Celeste",
      "6a9d74fe08e4ea8fd69ed3dd_26135LC-Celeste-300x180.png",
      "6a9d750008e4ea8fd69ed509_Celeste.jpg"
    ),
    option(
      "135LC Fi",
      "Samba Green",
      "6a9d74ff33e7659204c3665a_26135LC-SambaGreen-300x180.png",
      "6a9d75003ae12a68fa65d206_SambaGreen.jpg"
    ),
    option(
      "135LC Fi",
      "Matador Red",
      "6a9d74fe6f7acb53f7cc7ee8_26135LC-MatadorRed-300x180.png",
      "6a9d75006f7acb53f7cc7fa2_MatadorRed.jpg"
    ),
    option(
      "135LC Fi",
      "Tank White",
      "6a9d74ff762a4aa11fb96d1e_26135LC-TankWhite-300x180.png",
      "6a9d7501c33c64e77dd56d84_TankWhite.jpg"
    )
  ],
  "yzf-r25": [
    option(
      "YZF-R25",
      "Pearl Blu",
      "6a9d7589151102895341e8ec_25R25-PearlBlu.png",
      "6a9d75fcc33c64e77dd5ffd4_Pearl-Blu.jpg"
    ),
    option(
      "YZF-R25",
      "Racing Blu",
      "6a9d75894b43058c84fa83d7_25R25-RacingBlu.png",
      "6a9d75fdc33c64e77dd60099_RacingBlu.jpg"
    )
  ],
  tmax: [
    option(
      "TMAX",
      "Crystal Graphite",
      "6a9d77834b43058c84fafbb3_26TMAX-CrystalGaphite.png",
      "6a9d7783a2b5bf965e3e5a4d_Crystal-Graphite.jpg"
    ),
    option(
      "TMAX",
      "Ceramic Grey",
      "6a9d75035863441d3d637d37_25NMAX-CeramicGrey.png",
      "6a9d7507c33c64e77dd57118_Ceramic-Grey.jpg"
    )
  ],
  "tenere-700": [
    option(
      "TENERE 700",
      "Adventure Blue",
      "6a9d734772c4c4fe445879eb_26TENERE700--2be1c03c77a400b0.png",
      "6a9d734aa7122d6b7a15a782_LightBlue--df789432b1a03ee6.jpg"
    )
  ],
  "pg-1": [
    option(
      "PG-1",
      "Sky Blue",
      "6a9d777d3ae12a68fa66eb07_26PG1-SkyBlue.png",
      "6a9d777ff9f12aa602847747_SkyBlue.jpg"
    ),
    option(
      "PG-1",
      "Classic Black",
      "6a9d777c2ad674a1314718ae_26PG1-ClassicBlack.png",
      "6a9d777e2ad674a131471964_ClassicBlack.jpg"
    )
  ],
  "tracer-9-gt": [
    option(
      "TRACER 9 GT",
      "Ceramic Ice",
      "6a9d7706a7122d6b7a1733e3_26TRACER9GT-CeramicIce.png",
      "6a9d77083ae12a68fa66b551_CeramicIce.jpg"
    ),
    option(
      "TRACER 9 GT",
      "Tech Black",
      "6a9d77075863441d3d64623f_26TRACER9GT-TechBlack.png",
      "6a9d777a25f795ed3d1e5015_131f73d1-TechBlack.jpg"
    )
  ],
  nmax: [
    option(
      "NMAX",
      "Icon Blue",
      "6a9d77055863441d3d6461b1_26NMAX-IconBlue.png",
      "6a9d770c979330a78aba55d7_IconBlue.jpg"
    ),
    option(
      "NMAX",
      "Crystal Graphite",
      "6a9d7704c22a4a2c24ce26f0_26NMAX-CrystalGraphite.png",
      "6a9d770a33e7659204c41a65_CrystalGraphite.jpg"
    )
  ],
  "ego-avantiz": [
    option(
      "EGO AVANTIZ",
      "Biru",
      "6a9d770283ef584481e091d5_26EgoAvantiz-Biru.png",
      "6a9d7708e3a179fb3ccb09c4_28f9ba26-Biru.jpg"
    ),
    option(
      "EGO AVANTIZ",
      "Hitam",
      "6a9d7703f30bc64cc951d7bf_26EgoAvantiz-Hitam.png",
      "6a9d770cc33c64e77dd690c1_Hitam.jpg"
    ),
    option(
      "EGO AVANTIZ",
      "Hijau",
      "6a9d7702c22a4a2c24ce263e_26EgoAvantiz-Hijau.png",
      "6a9d770b5863441d3d64645c_55cc81ba-Hijau.jpg"
    )
  ],
  ez115: [
    option(
      "EZ115",
      "Biru",
      cms + "6a59b7861adc934e7aea16cb_25EZ115-Biru.png",
      solidSwatch("#6b7a9d")
    ),
    option(
      "EZ115",
      "Kelabu",
      cms + "6a59b7861adc934e7aea16c3_25EZ115-Kelabu.png",
      solidSwatch("#313335")
    ),
    option(
      "EZ115",
      "Hijau",
      cms + "6a59b7871adc934e7aea17c0_25EZ115-Hijau.png",
      solidSwatch("#93a79d")
    )
  ],
  "ego-gear": [
    option(
      "EGO GEAR",
      "Cosmic Blu",
      "6a9d7405cb5db07a0c6d6fca_25GearPro-CosmicBlu.png",
      "6a9d740a33e7659204c2f71a_Cosmic-Blu.jpg"
    ),
    option(
      "EGO GEAR",
      "Navy Green",
      "6a9d740633e7659204c2f4a4_25GearPro-NavyGreen.png",
      "6a9d74998c257909859b2c17_Navy-Green.jpg"
    ),
    option(
      "EGO GEAR",
      "Stellar White",
      "6a9d7406f9f12aa60283c963_25GearPro-StellarWhite.png",
      "6a9d749b08e4ea8fd69eb3c3_Stellar-White.jpg"
    )
  ],
  "mt-09": [
    option(
      "MT-09",
      "Lightning Blue",
      "6a9d740983ef584481df7fee_25MT09-LightningBlue.png",
      "6a9d749872c4c4fe4458a30a_LightningBlue.jpg"
    ),
    option(
      "MT-09",
      "Tech Black",
      "6a9d74095863441d3d62f0d7_25MT09-TechBlack.png",
      "6a9d749c2ad674a13145e567_cd0bdf1f-TechBlack.jpg"
    )
  ],
  r15m: [
    option(
      "R15M",
      "R15M",
      "6a9d74a208e4ea8fd69eb6cf_25R15M.png",
      "6a9d6d2f4a935f84bb39d720_black.jpg"
    ),
    option(
      "R15M",
      "Monster Energy",
      "6a9d74a2c33c64e77dd53a4f_25R15M-MonsterEnergy-1.png",
      solidSwatch("#151516")
    )
  ],
  "xmax-250": [
    option(
      "XMAX 250",
      "Icon Red",
      "6a9d7506a7122d6b7a1669d5_25XMAX-IconRed.png",
      "6a9d7401f9f12aa60283c6af_Red.jpg"
    ),
    option(
      "XMAX 250",
      "Ceramic Grey",
      "6a9d75053ae12a68fa65d3f9_25XMAX-CeramicGrey.png",
      "6a9d7507c33c64e77dd57118_Ceramic-Grey.jpg"
    )
  ],
  yseries: [
    option(
      "YSERIES",
      "Emerald Pearl",
      "https://s3.amazonaws.com/webflow-prod-assets/6a20eb17fa7f874df9ab69d2/6a571fa67de7ea880dd886f4_Y16ZR-Emerald-Pearl.png",
      solidSwatch("#e7e7e3")
    ),
    option(
      "YSERIES",
      "Desert Steel",
      "https://s3.amazonaws.com/webflow-prod-assets/6a20eb17fa7f874df9ab69d2/6a571fa83be5eaaccb2e397b_Y16ZR-Desert-Steel.png",
      solidSwatch("#b5b0a8")
    ),
    option(
      "YSERIES",
      "Fiery Red",
      "https://s3.amazonaws.com/webflow-prod-assets/6a20eb17fa7f874df9ab69d2/6a571fabf32f325ec517e7c1_Y16ZR-Fiery-Red.png",
      solidSwatch("#bf002d")
    )
  ],
  "mt-15": [
    option(
      "MT-15",
      "Ice Storm",
      "6a9d74003ae12a68fa654a2a_25MT15-IceStorm.png",
      solidSwatch("#9daab5")
    ),
    option(
      "MT-15",
      "Black",
      "6a9d724c592e74f82b571400_24MT15-Black--18bd5918b435f8a6.png",
      solidSwatch("#353638")
    )
  ],
  "y16zr-6mro-limited-edition": [
    option(
      "Y16ZR 6MRO Limited Edition",
      "Asymmetric Dual Colour",
      "6a9d749e2ad674a13145e60c_246MRO-Grey.png",
      "6a9d74a12ad674a13145e6f1_Neon.jpg"
    )
  ],
  "mt-25": [
    option(
      "MT-25",
      "Petronas Green",
      "6a9d72c0a7122d6b7a156466_24MT25-Cyan--d20d5164aff3d8a2.png",
      "6a9d7248ce65a0766f182176_Petronas-Green--674bb5f6f3a24637.jpg"
    ),
    option(
      "MT-25",
      "Tech Black",
      "6a9d72bfe7ac837cc22e849a_24MT25-Black--a1ab4a0a991500d9.png",
      "6a9d72c1c33c64e77dd427a5_Tech-Black--43ed24c4c8ffb69e.jpg"
    )
  ],
  "y16zr-doxou": [
    option(
      "Y16ZR DOXOU",
      "DOXOU Red and Blue",
      "6a9d71dca02953dfdee1f429_23Y16DX--4b953643f0ec460a.png",
      "6a9d6d3499d1a5b211c8016c_Blue.png"
    )
  ]
};
