import type { DealerLocation } from "@/data/site-content.types";

export const DEALER_LOCATIONS: readonly DealerLocation[] = [
  {
    area: "kompleks yamaha motor",
    coordinates: [101.564444, 3.228056],
    focus: "flagship enquiries, delivery handover, and brand-direct rider support",
    hours: "mon - sat | 9:00 am - 6:00 pm",
    id: "kompleks-yamaha-motor",
    label: "kompleks yamaha motor",
    locality: "sungai buloh, selangor",
    region: "central",
    serviceTags: ["flagship support", "genuine parts", "brand showroom"],
    summary:
      "the sungai buloh yamaha complex for riders who want direct brand support, " +
      "model guidance, and dependable aftersales coordination."
  },
  {
    area: "jalan sentul",
    coordinates: [101.6924, 3.1794],
    focus: "city commuter support, quick servicing, and accessory consultations",
    hours: "mon - sat | 9:00 am - 6:00 pm",
    id: "ah-hong-motor-sdn-bhd",
    label: "ah hong motor sdn bhd",
    locality: "sentul, kuala lumpur",
    region: "central",
    serviceTags: ["commuter servicing", "owner consultation", "parts support"],
    summary:
      "a central kl option for riders who need practical servicing, parts access, " +
      "and quick ownership support close to the city."
  },
  {
    area: "jalan bagan luar",
    coordinates: [100.3813, 5.4096],
    focus: "northern coastal support, handovers, and everyday servicing",
    hours: "mon - sat | 9:00 am - 6:00 pm",
    id: "brightwill-trading-sdn-bhd",
    label: "brightwill trading sdn bhd",
    locality: "butterworth, penang",
    region: "northern",
    serviceTags: ["northern support", "delivery handover", "genuine parts"],
    summary:
      "covers the butterworth side of the northern region with sales guidance, " +
      "service bookings, and repeat maintenance support."
  },
  {
    area: "jalan sungai rambai",
    coordinates: [100.4597, 5.3617],
    focus: "northern rider support, diagnostics, and commuter maintenance",
    hours: "mon - sat | 9:00 am - 6:00 pm",
    id: "chun-seng-motor-sdn-bhd",
    label: "chun seng motor sdn bhd",
    locality: "bukit mertajam, penang",
    region: "northern",
    serviceTags: ["northern support", "diagnostics", "commuter servicing"],
    summary:
      "supports seberang perai riders with route-ready checks, practical diagnostics, " +
      "and regular maintenance appointments."
  },
  {
    area: "jalan sultanah",
    coordinates: [102.9335, 1.8548],
    focus: "southern town support, servicing, and ownership guidance",
    hours: "mon - sat | 9:00 am - 6:00 pm",
    id: "kian-heng-motor-acc-sdn-bhd",
    label: "kian heng motor acc. sdn bhd",
    locality: "batu pahat, johor",
    region: "southern",
    serviceTags: ["southern support", "service bookings", "genuine parts"],
    summary:
      "serves batu pahat riders with scheduled maintenance, everyday ownership help, " +
      "and practical product support."
  },
  {
    area: "jalan sri indah",
    coordinates: [103.1108, 1.8651],
    focus: "southern commuter support, handovers, and routine servicing",
    hours: "mon - sat | 9:00 am - 6:00 pm",
    id: "akarjaya-motor-sdn-bhd",
    label: "akarjaya motor sdn bhd",
    locality: "parit raja, johor",
    region: "southern",
    serviceTags: ["southern support", "delivery handover", "commuter servicing"],
    summary:
      "gives parit raja riders a nearby yamaha branch for quick service access, " +
      "delivery coordination, and commuter upkeep."
  },
  {
    area: "golden plaza wisma inti deras",
    coordinates: [116.0726, 5.9455],
    focus: "sabah metro support, deliveries, and rider onboarding",
    hours: "mon - sat | 8:30 am - 5:30 pm",
    id: "inti-deras-motors-sdn-bhd",
    label: "inti deras motors sdn bhd",
    locality: "kota kinabalu, sabah",
    region: "sabah",
    serviceTags: ["sabah support", "delivery handover", "big-bike guidance"],
    summary:
      "anchors yamaha support in kota kinabalu with model advice, aftersales help, " +
      "and dependable servicing access."
  },
  {
    area: "jalan singamata",
    coordinates: [118.3268, 5.0286],
    focus: "east sabah support, scheduled servicing, and ownership care",
    hours: "mon - sat | 9:00 am - 6:00 pm",
    id: "shiang-chin-motors-batteries-sdn-bhd",
    label: "shiang chin motors batteries sdn bhd",
    locality: "lahad datu, sabah",
    region: "sabah",
    serviceTags: ["sabah support", "service appointments", "owner consultation"],
    summary:
      "extends sabah coverage into lahad datu with service scheduling, rider support, " +
      "and practical maintenance help."
  },
  {
    area: "jalan lanang",
    coordinates: [111.8257, 2.289],
    focus: "regional sarawak support, commuter servicing, and parts access",
    hours: "mon - sat | 8:00 am - 5:30 pm",
    id: "chop-swee-guan",
    label: "chop swee guan",
    locality: "sibu, sarawak",
    region: "sarawak",
    serviceTags: ["sarawak support", "commuter servicing", "parts support"],
    summary:
      "supports riders in sibu with steady maintenance coverage, parts availability, " +
      "and practical ownership assistance."
  },
  {
    area: "jalan tun ahmad zaidi adruce",
    coordinates: [110.3597, 1.5508],
    focus: "sarawak metro support, rider consultations, and handovers",
    hours: "mon - sat | 8:00 am - 5:00 pm",
    id: "ghee-hua-co-sdn-bhd",
    label: "ghee hua co. sdn bhd",
    locality: "kuching, sarawak",
    region: "sarawak",
    serviceTags: ["sarawak support", "delivery handover", "genuine parts"],
    summary:
      "gives kuching riders a strong yamaha branch for handover support, product guidance, " +
      "and regular service follow-through."
  }
] as const;

export const DEFAULT_DEALER_LOCATION = DEALER_LOCATIONS[0]!;
export const DEFAULT_DEALER_LOCATION_ID = DEFAULT_DEALER_LOCATION.id;
