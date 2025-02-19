const productsData = [
  {
    id: 11113123123123,
    title: "Dağcı Botu",
    brand: "MountainPro",
    description:
      "Dayanıklı, su geçirmez ve konforlu dağcılık botu. Zorlu hava koşullarına dayanıklı, uzun süreli kullanım için tasarlandı.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus?",
    price: 450.0,
    discounted_price: 399.0,
    discount_rate: 11.33,
    stock: 15,
    badges: { new: false },
    images: ["/images/product/p01.jpg", "/images/product/p02.jpg"],
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
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus?",
    price: 1200.0,
    discounted_price: 999.0,
    discount_rate: 16.75,
    stock: 8,
    badges: { new: true },
    images: ["/images/product/p21.jpg", "/images/product/p22.jpg"],
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
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus?",
    price: 150.0,
    stock: 0,
    badges: { new: false },
    images: ["/images/product/p31.jpg", "/images/product/p32.jpg"],
    reviews: [],
  },
  {
    id: 444412341234123,
    title: "Kış Montu",
    brand: "FrostGuard",
    description:
      "Soğuk havalarda sıcak tutan, suya dayanıklı ve nefes alabilen kış montu.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus?",
    price: 750.0,
    discounted_price: 649.0,
    discount_rate: 13.47,
    stock: 0,
    badges: { new: true },
    images: ["/images/product/p41.jpg", "/images/product/p42.jpg"],
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
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente, explicabo odio nam a aspernatur pariatur minima adipisci suscipit, non illum nihil delectus commodi possimus, dolores nesciunt? Molestias possimus earum nostrum voluptate aliquid officia ratione excepturi esse distinctio impedit delectus rerum non vel, magnam pariatur. Quia voluptatibus dolore obcaecati natus?",
    price: 300.0,
    discounted_price: 250.0,
    discount_rate: 16.67,
    stock: 5,
    badges: { new: false },
    images: ["/images/product/p51.jpg", "/images/product/p52.jpg"],
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
