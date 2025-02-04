const productsData = [
  {
    id: 11113123123123,
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
    reviews: [
      {
        user: "Ahmet Y.",
        comment: "Gerçekten çok kaliteli, kış koşullarına uygun!",
        rating: 5,
      },
      {
        user: "Mehmet K.",
        comment: "Su geçirmezliği harika ama biraz ağır.",
        rating: 4,
      },
    ],
  },
  {
    id: 222213412341234,
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
    reviews: [
      {
        user: "Ayşe T.",
        comment: "Kurulumu çok kolay, malzeme kalitesi iyi.",
        rating: 5,
      },
    ],
  },
  {
    id: 33334123412341234,
    title: "Kamp Sandalyeleri",
    brand: "Outfitters",
    description:
      "Konforlu oturma alanı ve taşınabilir yapısı ile kamp için ideal sandalyeler.",
    price: 150.0,
    stock: 0,
    badges: { new: false },
    images: [
      "https://images.pexels.com/photos/1545314/pexels-photo-1545314.jpeg",
      "https://images.pexels.com/photos/1211332/pexels-photo-1211332.jpeg",
    ],
    reviews: [],
  },
  {
    id: 444412341234123,
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
    reviews: [
      {
        user: "Burak D.",
        comment: "Çok sıcak tutuyor, su geçirmezliği de harika!",
        rating: 5,
      },
    ],
  },
  {
    id: 5555123412341,
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
    reviews: [
      {
        user: "Emre C.",
        comment: "Çok kullanışlı ve geniş, uzun yürüyüşlerde bile rahat!",
        rating: 5,
      },
      {
        user: "Zeynep A.",
        comment: "Malzeme kalitesi iyi ama askıları biraz rahatsız etti.",
        rating: 4,
      },
    ],
  },
];

export default productsData;
