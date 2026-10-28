const cdn = "https://cdn.prod.website-files.com/6a20eb17fa7f874df9ab69d2/";
const uploads = "https://s3.amazonaws.com/webflow-prod-assets/6a20eb17fa7f874df9ab69d2/";

export const AFTER_SALES_GUIDES = [
  {
    title: "Safety Information KPP",
    image: `${cdn}6a5f2f5cfd289d1a0077d81f_after-sales-safety-information-kpp.png`,
    href: "https://www.yamaha-motor.com.my/safety-information-kpp"
  },
  {
    title: "Video Program KPP",
    image: `${cdn}6a5f2f63ea36a515fa641d75_after-sales-video-program-kpp.png`,
    href: "https://www.yamaha-motor.com.my/video-program-kpp"
  }
] as const;

export const YEZ_BENEFITS = [
  {
    title: "Dibaik pulih dengan produk tulen Yamaha",
    image: `${uploads}6a6a2f5aeeb8ff6f0e24de19_yez-genuine-parts-benefit.png`
  },
  {
    title: "Sijil jaminan YEZ",
    image: `${uploads}6a6a2f5ed9b8cd63e79a86f7_yez-warranty-certificate.png`
  },
  {
    title: "Motosikal YEZ disertakan dengan waranti",
    image: `${uploads}6a6a2f61a3985d4c819cdf20_yez-motorcycle-warranty.png`
  },
  {
    title: "Pusat sehenti untuk motosikal Yamaha",
    image: `${uploads}6a6a2f649749bdef05177dd0_yez-one-stop-centre.png`
  }
] as const;

export const Y_CONNECT_FEATURES = [
  [
    "Parking location",
    "Save the last location where your motorcycle disconnected from your phone."
  ],
  ["Phone notifications", "See incoming calls and messages on the motorcycle's meter display."],
  ["Maintenance recommendations", "Check engine oil condition and battery voltage estimates."],
  ["Fuel consumption", "Review your riding fuel-consumption data."],
  ["Malfunction notifications", "Receive an alert when the system detects a motorcycle issue."],
  [
    "Revs Dashboard",
    "View engine speed, throttle opening, acceleration and economical riding data."
  ]
] as const;

export const Y_CONNECT_QUESTIONS = [
  {
    question: "How do I get started?",
    answer:
      "Download Yamaha Motorcycle Connect, sign up, then pair your compatible motorcycle with Bluetooth and GPS enabled. Use the QR code on its CCU, the frame-number barcode, or enter the frame number manually."
  },
  {
    question: "Can I connect more than one phone?",
    answer:
      "More than one phone can be paired with a motorcycle, but only one phone can be connected at a time."
  },
  {
    question: "Does Y-Connect need mobile data?",
    answer: "Yes. A mobile data connection is required to use Y-Connect."
  }
] as const;

export const RACE_SERIES = [
  {
    name: "PETRONAS AAM Malaysian Cub Prix Championship",
    image: `${uploads}6a72f0011ec8072aa84c28ed_motorsports-cub-prix.jpg`,
    rounds: [
      ["01", "25–26 Apr", "Litar Lumba Tangkak"],
      ["02", "23–24 May", "PETRONAS Sepang International Circuit (North)"],
      ["03", "27–28 Jun", "Dataran Seri Jempol"],
      ["04", "15–16 Aug", "Stadium Negeri Pulau Pinang"],
      ["05", "28–29 Aug", "Litar Permotoran Terengganu"],
      ["06", "3–4 Oct", "LYL International Karting Circuit, Monkey Canopy"],
      ["07", "17–18 Oct", "PETRONAS Sepang International Circuit (South)"],
      ["08", "21–22 Nov", "Medini Iskandar, Iskandar Puteri"]
    ]
  },
  {
    name: "Asia Road Racing Championship",
    image: `${uploads}6a72f00fb7212a320bd26da1_motorsports-arrc.jpg`,
    rounds: [
      ["01", "8 Apr", "PETRONAS Sepang International Circuit, Malaysia"],
      ["02", "10–12 Apr", "PETRONAS Sepang International Circuit, Malaysia"],
      ["03", "8–10 May", "Chang International Circuit, Thailand"],
      ["04", "12–14 Jun", "Mobility Resort Motegi, Japan"],
      ["05", "TBC", "TBC"],
      ["06", "11–13 Sep", "PETRONAS Sepang International Circuit, Malaysia"],
      ["07", "4–6 Dec", "Chang International Circuit, Thailand"]
    ]
  }
] as const;

export const CAREER_ROLES = [
  "Security Officer/ Executive",
  "Internship Trainee",
  "Executive, Marketing",
  "Executive, Apparel & E-Commerce",
  "Technician",
  "Executive, IT",
  "Engineer, QA"
] as const;

// Only published file URLs from the official resources page. Its empty/about:blank/manual links are omitted.
export const RESOURCE_GROUPS = [
  {
    name: "Moped",
    models: [
      [
        "Lagenda 115Z",
        `${uploads}6a71bb49fe5ad17369a20840_Lagenda115-Brochure.pdf`,
        `${uploads}6a71bb489cd91775cec8edd6_LAGENDA-115Z-PC.pdf`
      ],
      [
        "125ZR",
        `${uploads}6a71ade7842d5a395682427b_product_download_pdf_5976b750d8c15.pdf`,
        `${uploads}6a71ade579bf73adb0106007_product_download_pdf_57172d4219c25.pdf`
      ],
      [
        "135LC Fi",
        `${cdn}6a71f09bc21366568e6e50cb_25LC135-Brochure.pdf`,
        `${cdn}6a71f58eb88edcaca181546e_135LC-BDK6-BDK7.pdf`
      ],
      [
        "YSERIES",
        `${cdn}6a9fa2bbdd74d741d07f7645_26Y16-Brochure.pdf`,
        `${cdn}6a9f8bf086bb92d9d571f124_Y16ZR-BSM1-Revise.pdf`
      ],
      [
        "Y16ZR DOXOU",
        `${cdn}6a71efe34e16ea71c59cb8e2_23Y16DOXOU-Brochure.pdf`,
        `${cdn}6a71efe257ab63fa7d745092_Y16ZR-BAX2-DOXOU.pdf`
      ],
      [
        "EZ115",
        `${cdn}6a71efe554398ab46a1a17c9_24EZ115-Brochure.pdf`,
        `${cdn}6a71efe5922da16273f819a0_24EZ115-BBY3.pdf`
      ],
      [
        "PG-1",
        `${cdn}6a71f1869762493427a67e34_26PG1-Brochure.pdf`,
        `${cdn}6a71f590286857df502bae3c_PG-1-BNT2.pdf`
      ],
      [
        "Y16ZR 6MRO Limited Edition",
        `${cdn}6a71f09a1001dec9b037c694_246MRO-Brochure.pdf`,
        `${cdn}6a9f8bf086bb92d9d571f124_Y16ZR-BSM1-Revise.pdf`
      ]
    ]
  },
  {
    name: "Automatic",
    models: [
      ["XMAX 250", null, `${cdn}6a71f09d462f12c46e085da9_XMAX-BPW2-compressed.pdf`],
      [
        "EGO SOLARIZ",
        `${uploads}6a71ad211311f97007643cf9_product_download_pdf_5a9f63c1ce6bb.pdf`,
        `${uploads}6a71bb45672951eddd6ec83e_Ego-Solariz-Parts-Catalog-122019.pdf`
      ],
      ["EGO AVANTIZ", `${cdn}6a71f14a922da16273f8f2ef_26EgoAvantiz-Brochure.pdf`, null],
      [
        "NMAX",
        `${cdn}6a71f14b212eb060ea5bc882_26NMAX-Brochure.pdf`,
        `${cdn}6a71fc54a5f16dbe5d0c1b14_N-MAX-BTP2.pdf`
      ],
      ["EGO GEAR", `${cdn}6a71f58f378249a250252623_25GEARPRO-Brochure.pdf`, null]
    ]
  },
  {
    name: "Street",
    models: [
      [
        "FZ150i",
        `${uploads}6a71ade5b683c5285df3dd3e_product_download_pdf_593a56c06451f.pdf`,
        `${uploads}6a71ade359f6ec2e19cbd05b_product_download_pdf_57172938c48e6.pdf`
      ],
      [
        "YZF-R25",
        `${cdn}6a71f186c21366568e6ec6ca_26R25-Brochure.pdf`,
        `${cdn}6a71fc53544702e85ebf819d_R25-BRF1.pdf`
      ],
      [
        "YZF-R15",
        `${uploads}6a71bb4acc7773b00ab76a44_21R15-Brochure.pdf`,
        `${uploads}6a71bb4934e6a1f4cd45896f_20R15-Parts-Catalogue.pdf`
      ],
      [
        "MT-25",
        `${cdn}6a71efe394c67e94e0824795_24MT25-BROCHURE.pdf`,
        `${cdn}6a71efe5043dcea25f61712a_MT-25-BFB2_compressed.pdf`
      ],
      ["MT-15", null, `${cdn}6a71efe457ab63fa7d745192_MT-15-BHM4_compressed.pdf`],
      ["R15M", `${cdn}6a71f09d6f201c924c6ccdf6_25R15M-Brochure1.pdf`, null]
    ]
  },
  {
    name: "Big Bikes",
    models: [
      [
        "MT-07",
        `${uploads}6a71bb46f46d1cdcb9379526_2020MT07-Brochure.pdf`,
        `${uploads}6a71bb46672951eddd6ec89e_20MT07-Parts.pdf`
      ],
      [
        "MT-09",
        `${cdn}6a71f09eb88edcaca17f7b4d_25MT09-Brochure.pdf`,
        `${cdn}6a71f58f462f12c46e0b1915_MT-09-BWF2.pdf`
      ],
      [
        "TENERE 700",
        `${cdn}6a71fc54137ec5da38ecd7d8_26TENERE700-Brochure.pdf`,
        `${cdn}6a71fc55a5f16dbe5d0c1d4a_TENERE-700-BYC2.pdf`
      ],
      [
        "TRACER 9 GT",
        `${cdn}6a71f5907263f8acdfdc513a_26TRACER9GT-Brochure.pdf`,
        `${cdn}6a71fc54544702e85ebf8215_TRACER-9-GT-BHX3.pdf`
      ],
      [
        "TMAX",
        `${cdn}6a71f09c4ff8538a5e694cf1_25TMAX-Brochure.pdf`,
        `${cdn}6a71f09c526bc6797047bad9_TMAX-BYF1-Revised.pdf`
      ]
    ]
  }
] as const;
