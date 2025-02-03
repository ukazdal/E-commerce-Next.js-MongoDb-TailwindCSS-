const productsData = [
  {
    id: 1,
    title: "Dağcı Botu",
    brand: "MountainPro",
    description:
      "Dayanıklı, su geçirmez ve konforlu dağcılık botu. Zorlu hava koşullarına dayanıklı, uzun süreli kullanım için tasarlandı.",
    price: 450.0,
    discounted_price: 399.0,
    discount_rate: 11.33,
    stock: 15,
    badges: { new: false },
    images: [
      "https://images.pexels.com/photos/3310709/pexels-photo-3310709.jpeg",
      "https://images.pexels.com/photos/1292883/pexels-photo-1292883.jpeg",
    ],
  },
  {
    id: 2,
    title: "Outdoor Çadır",
    brand: "CampingGear",
    description:
      "Hızlı kurulumu ve sağlam yapısı ile doğada konforlu bir kamp deneyimi sunar. 4 kişilik geniş iç hacim.",
    price: 1200.0,
    discounted_price: 999.0,
    discount_rate: 16.75,
    stock: 8,
    badges: { new: true },
    images: [
      "https://images.pexels.com/photos/3310709/pexels-photo-3310709.jpeg",
      "https://images.pexels.com/photos/1736587/pexels-photo-1736587.jpeg",
    ],
  },
  {
    id: 3,
    title: "Kamp Sandalyeleri",
    brand: "Outfitters",
    description:
      "Konforlu oturma alanı ve taşınabilir yapısı ile kamp için ideal sandalyeler.",
    price: 150.0,
    stock: 0, // Stokta yok
    badges: { new: false },
    images: [
      "https://images.pexels.com/photos/1545314/pexels-photo-1545314.jpeg",
      "https://images.pexels.com/photos/1211332/pexels-photo-1211332.jpeg",
    ],
  },
  {
    id: 4,
    title: "Kış Montu",
    brand: "FrostGuard",
    description:
      "Soğuk havalarda sıcak tutan, suya dayanıklı ve nefes alabilen kış montu.",
    price: 750.0,
    discounted_price: 649.0,
    discount_rate: 13.47,
    stock: 0,
    badges: { new: true },
    images: [
      "https://images.pexels.com/photos/3310709/pexels-photo-3310709.jpeg",
      "https://images.pexels.com/photos/2437267/pexels-photo-2437267.jpeg",
    ],
  },
  {
    id: 5,
    title: "Sırt Çantası",
    brand: "HikerPack",
    description:
      "Dağcılık ve trekking için özel tasarlanmış, ergonomik ve geniş sırt çantası.",
    price: 300.0,
    discounted_price: 250.0,
    discount_rate: 16.67,
    stock: 5,
    badges: { new: false },
    images: [
      "https://images.pexels.com/photos/1029593/pexels-photo-1029593.jpeg",
      "https://images.pexels.com/photos/4008366/pexels-photo-4008366.jpeg",
    ],
  },
  {
    id: 6,
    title: "Termal Mat",
    brand: "CampX",
    description:
      "Yüksek yalıtım özellikli, kompakt ve hafif kamp matı. Zemin soğuklarından korunmanızı sağlar.",
    price: 180.0,
    discounted_price: 159.0,
    discount_rate: 11.67,
    stock: 10,
    badges: { new: true },
    images: [
      "https://images.pexels.com/photos/3600261/pexels-photo-3600261.jpeg",
      "https://images.pexels.com/photos/1133383/pexels-photo-1133383.jpeg",
    ],
  },
  {
    id: 7,
    title: "Kamp Mangal Seti",
    brand: "GrillMaster",
    description:
      "Kompakt, taşınabilir kamp mangalı. Kolay kurulumu ve kullanımı ile mükemmel pişirme deneyimi.",
    price: 250.0,
    discounted_price: 199.0,
    discount_rate: 20.4,
    stock: 12,
    badges: { new: false },
    images: [
      "https://images.pexels.com/photos/1545314/pexels-photo-1545314.jpeg",
      "https://images.pexels.com/photos/1394889/pexels-photo-1394889.jpeg",
    ],
  },
  {
    id: 8,
    title: "Termos",
    brand: "EcoTherm",
    description:
      "Sıcak ve soğuk içeceklerinizi uzun süre muhafaza eden paslanmaz çelik termos.",
    price: 120.0,
    discounted_price: 99.0,
    discount_rate: 17.5,
    stock: 7,
    badges: { new: true },
    images: [
      "https://images.pexels.com/photos/1170941/pexels-photo-1170941.jpeg",
      "https://images.pexels.com/photos/1133356/pexels-photo-1133356.jpeg",
    ],
  },
  {
    id: 9,
    title: "Trekking Ayakkabısı",
    brand: "TrailRun",
    description:
      "Yüksek tutuş, su geçirmezlik ve rahatlık sunan trekking ayakkabısı.",
    price: 650.0,
    discounted_price: 550.0,
    discount_rate: 15.38,
    stock: 18,
    badges: { new: false },
    images: [
      "https://images.pexels.com/photos/1995968/pexels-photo-1995968.jpeg",
      "https://images.pexels.com/photos/1442114/pexels-photo-1442114.jpeg",
    ],
  },
  {
    id: 10,
    title: "Uyku Tulumu",
    brand: "DreamSleep",
    description:
      "Soğuk havalarda dahi sıcak tutan, hafif ve taşıması kolay uyku tulumu.",
    price: 450.0,
    discounted_price: 399.0,
    discount_rate: 11.33,
    stock: 9,
    badges: { new: true },
    images: [
      "https://images.pexels.com/photos/3585767/pexels-photo-3585767.jpeg",
      "https://images.pexels.com/photos/3373234/pexels-photo-3373234.jpeg",
    ],
  },
];

export default productsData;
