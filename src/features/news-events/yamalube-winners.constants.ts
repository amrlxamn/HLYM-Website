const base = "https://cdn.prod.website-files.com/6a20eb17fa7f874df9ab69d2/";

export const YAMALUBE_ENTRY_URL = "https://www.yamalube.com.my/authenticate";

export const YAMALUBE_WINNERS = [
  {
    year: 2026,
    months: [
      ["August", "6ac8ac7dcbc011213faf721e_yamalube-scan-2026-august-winners.pdf"],
      ["July", "6ac8ac7ddf43f493b296d5c2_yamalube-scan-2026-july-winners.pdf"],
      ["June", "6ac8ac7ccbc011213faf7101_yamalube-scan-2026-june-winners.pdf"],
      ["May", "6a448b7cde8d087d5b22e672_yamalube-scan-2026-may-winners.pdf"],
      ["April", "6a448b7d79c60377b4a9650d_yamalube-scan-2026-april-winners.pdf"],
      ["March", "6a448b7ed056e7d638280571_yamalube-scan-2026-march-winners.pdf"],
      ["February", "6a448b7e6bd0a0dc3262639b_yamalube-scan-2026-february-winners.pdf"],
      ["January", "6a448b7f291119ac76364a3f_yamalube-scan-2026-january-winners.pdf"]
    ]
  },
  {
    year: 2025,
    months: [
      ["December", "6a448b7f83a427d55b3b8a9e_yamalube-scan-2025-december-winners.pdf"],
      ["November", "6a448b7fce63d643e17649fc_yamalube-scan-2025-november-winners.pdf"],
      ["October", "6a448b8006b9b5893731509b_yamalube-scan-2025-october-winners.pdf"],
      ["September", "6a448b801526fc5962acd67f_yamalube-scan-2025-september-winners.pdf"],
      ["August", "6a448b801526fc5962acd6c1_yamalube-scan-2025-august-winners.pdf"],
      ["July", "6a448c071526fc5962ad58ee_yamalube-scan-2025-july-winners.pdf"],
      ["June", "6a448c07d056e7d638283795_yamalube-scan-2025-june-winners.pdf"],
      ["May", "6a448c0867581e7f647cda46_yamalube-scan-2025-may-winners.pdf"],
      ["April", "6a448c08d056e7d6382837ee_yamalube-scan-2025-april-winners.pdf"],
      ["March", "6a448c08f4855ecead316b2d_yamalube-scan-2025-march-winners.pdf"],
      ["February", "6a448c09f4855ecead316b7f_yamalube-scan-2025-february-winners.pdf"],
      ["January", "6a448c0b1526fc5962ad5d4a_yamalube-scan-2025-january-winners.pdf"]
    ]
  },
  {
    year: 2024,
    months: [
      ["September", "6a448c0b06b9b5893731a121_yamalube-scan-2024-september-winners.pdf"],
      ["August", "6a448c0c83a427d55b3bcae3_yamalube-scan-2024-august-winners.pdf"],
      ["July", "6a448c0c291119ac76368839_yamalube-scan-2024-july-winners.pdf"],
      ["June", "6a448c0d79c60377b4a97c3b_yamalube-scan-2024-june-winners.pdf"],
      ["May", "6a448c0da6b3dfc4bf5c4906_yamalube-scan-2024-may-winners.pdf"],
      ["April", "6a448c0df4855ecead31709c_yamalube-scan-2024-april-winners.pdf"],
      ["March", "6a448c0e08fbbddd3078ae58_yamalube-scan-2024-march-winners.pdf"],
      ["February", "6a448c0ef4855ecead3170e2_yamalube-scan-2024-february-winners.pdf"],
      ["January", "6a448c0e54c94aed8af9e82c_yamalube-scan-2024-january-winners.pdf"]
    ]
  },
  {
    year: 2023,
    months: [
      ["December", "6a448c0ffd3494482fc8fe6c_yamalube-scan-2023-december-winners.pdf"],
      ["November", "6a448c0fd4d52b3307920abf_yamalube-scan-2023-november-winners.pdf"],
      ["October", "6a448c0f67581e7f647cdf60_yamalube-scan-2023-october-winners.pdf"]
    ]
  }
].map(({ year, months }) => ({
  year,
  months: months.map(([month, filename]) => ({ month, href: base + filename }))
}));
