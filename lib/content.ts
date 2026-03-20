export type FeaturedProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  label: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "pistachio-salankatia",
    name: "Pistachio Salankatia",
    description: "Silken layers finished with roasted pistachio and a glossy Egyptian cream pour.",
    price: "INR 198",
    image: "/frames/cappy.realesrgan_014.jpg",
    label: "House Favorite"
  },
  {
    id: "lotus-ruh-hayati",
    name: "Lotus Ruh Hayati",
    description: "A velvety signature bowl with caramel biscuit depth and a rich, smooth finish.",
    price: "INR 245",
    image: "/frames/cappy.realesrgan_048.jpg",
    label: "Signature"
  },
  {
    id: "nutella-umm-ali",
    name: "Nutella Crispy Umm Ali",
    description: "Toasted shards, warm cream and chocolate-hazelnut richness in a more indulgent build.",
    price: "INR 280",
    image: "/frames/cappy.realesrgan_068.jpg",
    label: "Best Seller"
  },
  {
    id: "mango-velvet-cup",
    name: "Mango Velvet Cup",
    description: "Fresh mango brightness layered over smooth cream for a cleaner late-evening dessert.",
    price: "INR 185",
    image: "/frames/cappy.realesrgan_032.jpg",
    label: "Seasonal Mood"
  }
];

export const aboutShineLaban = {
  image: "/frames/cappy.realesrgan_052.jpg",
  copy:
    "Shine Laban is a premium dessert experience bringing authentic Egyptian flavours to India. Crafted with rich ingredients, creamy textures, and indulgent layers, every dessert is designed to deliver a unique and unforgettable taste.\n\nFrom signature bowls like Salankatia and Ruh Hayati to indulgent flavour variations like Pistachio, Lotus, and Chocolate, Shine Laban blends tradition with modern presentation to create a luxurious dessert experience.",
  stats: [
    {
      value: "1000+",
      label: "Customers Served"
    },
    {
      value: "Premium",
      label: "Ingredients"
    },
    {
      value: "Signature",
      label: "Recipes"
    },
    {
      value: "Authentic",
      label: "Egyptian Taste"
    }
  ]
} as const;

export type MenuCategoryItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

export type MenuCategory = {
  slug:
    | "signature-bowls"
    | "pistachio-specials"
    | "chocolate-nutella"
    | "lotus"
    | "fruit-specials"
    | "refreshing-desserts";
  title: string;
  description: string;
  image: string;
  items: MenuCategoryItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "signature-bowls",
    title: "Signature Bowls",
    description: "Classic Egyptian dessert bowls like Salankatia, Ruh Hayati, and Umm Ali.",
    image: "/frames/cappy.realesrgan_012.jpg",
    items: [
      {
        id: "pistachio-salankatia",
        name: "Pistachio Salankatia",
        description: "A signature layered bowl finished with roasted pistachio and silky cream.",
        price: "INR 210",
        image: "/frames/cappy.realesrgan_014.jpg"
      },
      {
        id: "chocolate-salankatia",
        name: "Chocolate Salankatia",
        description: "Classic Salankatia deepened with rich chocolate layers and a glossy finish.",
        price: "INR 225",
        image: "/frames/cappy.realesrgan_020.jpg"
      },
      {
        id: "lotus-salankatia",
        name: "Lotus Salankatia",
        description: "Caramel biscuit notes folded into a creamy Egyptian bowl.",
        price: "INR 230",
        image: "/frames/cappy.realesrgan_024.jpg"
      },
      {
        id: "mango-salankatia",
        name: "Mango Salankatia",
        description: "A fruit-forward variation with smooth mango cream and a lighter finish.",
        price: "INR 215",
        image: "/frames/cappy.realesrgan_032.jpg"
      }
    ]
  },
  {
    slug: "pistachio-specials",
    title: "Pistachio Specials",
    description: "Premium pistachio-based desserts with rich, nutty flavour and creamy layers.",
    image: "/frames/cappy.realesrgan_018.jpg",
    items: [
      {
        id: "pistachio-royale-bowl",
        name: "Pistachio Royale Bowl",
        description: "A lush pistachio dessert with dense cream layers and a polished nut finish.",
        price: "INR 260",
        image: "/frames/cappy.realesrgan_018.jpg"
      },
      {
        id: "pistachio-cream-cup",
        name: "Pistachio Cream Cup",
        description: "A softer cup format with airy cream and premium pistachio depth.",
        price: "INR 185",
        image: "/frames/cappy.realesrgan_040.jpg"
      },
      {
        id: "double-pistachio-delight",
        name: "Double Pistachio Delight",
        description: "A richer bowl with pistachio cream, crushed nuts, and extra texture.",
        price: "INR 295",
        image: "/frames/cappy.realesrgan_052.jpg"
      }
    ]
  },
  {
    slug: "chocolate-nutella",
    title: "Chocolate & Nutella",
    description: "Indulgent chocolate desserts with smooth Nutella richness.",
    image: "/frames/cappy.realesrgan_064.jpg",
    items: [
      {
        id: "nutella-umm-ali",
        name: "Nutella Umm Ali",
        description: "Warm layers and Nutella richness brought together in an indulgent classic.",
        price: "INR 280",
        image: "/frames/cappy.realesrgan_068.jpg"
      },
      {
        id: "chocolate-velvet-cup",
        name: "Chocolate Velvet Cup",
        description: "A smooth chocolate dessert cup with a dense, creamy finish.",
        price: "INR 175",
        image: "/frames/cappy.realesrgan_060.jpg"
      },
      {
        id: "choco-layer-bowl",
        name: "Choco Layer Bowl",
        description: "Layered chocolate cream with a darker cocoa profile and glossy top.",
        price: "INR 240",
        image: "/frames/cappy.realesrgan_064.jpg"
      }
    ]
  },
  {
    slug: "lotus",
    title: "Lotus (Biscoff)",
    description: "Caramel biscuit flavours blended into silky, creamy desserts.",
    image: "/frames/cappy.realesrgan_044.jpg",
    items: [
      {
        id: "lotus-ruh-hayati",
        name: "Lotus Ruh Hayati",
        description: "A signature bowl layered with lotus cream and biscuit depth.",
        price: "INR 245",
        image: "/frames/cappy.realesrgan_048.jpg"
      },
      {
        id: "lotus-cream-cup",
        name: "Lotus Cream Cup",
        description: "A refined cup dessert with caramel biscuit notes and a silky spoonful.",
        price: "INR 180",
        image: "/frames/cappy.realesrgan_044.jpg"
      },
      {
        id: "lotus-crunch-bowl",
        name: "Lotus Crunch Bowl",
        description: "Creamy lotus dessert finished with a satisfying biscuit crunch.",
        price: "INR 235",
        image: "/frames/cappy.realesrgan_050.jpg"
      }
    ]
  },
  {
    slug: "fruit-specials",
    title: "Fruit Specials",
    description: "Fresh and light options like Mango-based desserts with a smooth finish.",
    image: "/frames/cappy.realesrgan_032.jpg",
    items: [
      {
        id: "mango-velvet-cup",
        name: "Mango Velvet Cup",
        description: "A cooler mango dessert with a clean cream finish and soft texture.",
        price: "INR 185",
        image: "/frames/cappy.realesrgan_032.jpg"
      },
      {
        id: "mango-cream-bowl",
        name: "Mango Cream Bowl",
        description: "A fuller mango bowl layered with fresh fruit notes and Egyptian cream.",
        price: "INR 210",
        image: "/frames/cappy.realesrgan_036.jpg"
      },
      {
        id: "seasonal-fruit-mix",
        name: "Seasonal Fruit Mix",
        description: "A lighter dessert blend with fruit, cream, and a refreshing finish.",
        price: "INR 195",
        image: "/frames/cappy.realesrgan_038.jpg"
      }
    ]
  },
  {
    slug: "refreshing-desserts",
    title: "Refreshing Desserts",
    description: "Light, quick desserts and drinks for a refreshing sweet experience.",
    image: "/frames/cappy.realesrgan_006.jpg",
    items: [
      {
        id: "aseera-drinks",
        name: "Aseera Drinks",
        description: "A chilled sweet drink option designed for a lighter Egyptian refreshment.",
        price: "INR 150",
        image: "/frames/cappy.realesrgan_006.jpg"
      },
      {
        id: "light-cream-cups",
        name: "Light Cream Cups",
        description: "Small-format cream desserts with a quicker, cooler finish.",
        price: "INR 165",
        image: "/frames/cappy.realesrgan_010.jpg"
      },
      {
        id: "cold-dessert-bowls",
        name: "Cold Dessert Bowls",
        description: "Refreshing chilled bowls built for an easy sweet stop.",
        price: "INR 190",
        image: "/frames/cappy.realesrgan_016.jpg"
      }
    ]
  }
];

export function getMenuCategory(slug: string) {
  return menuCategories.find((category) => category.slug === slug);
}

export function getMenuCategorySlugs() {
  return menuCategories.map((category) => category.slug);
}

export const experienceDetails = {
  heading: "A quieter, more refined dessert experience.",
  description:
    "Shine Laban is designed to feel polished and intentional, with Egyptian comfort, premium toppings and a rich midnight palette that keeps the product in focus.",
  points: [
    "Authentic recipes with a modern, premium finish.",
    "Balanced sweetness, creamy texture and clean presentation.",
    "Built for lingering visits, takeaway cravings and gifting."
  ]
} as const;

export const location = {
  title: "Visit Us in Mumbra",
  subtitle: "DZ City, Amrut Nagar, Mumbra",
  supportLine: "One focused destination. One premium dessert experience.",
  description:
    "Experience Shine Laban at our Mumbra location - serving rich Egyptian desserts with premium quality and indulgent flavours.",
  mapQuery: "DZ City Amrut Nagar Mumbra",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=DZ%20City%20Amrut%20Nagar%20Mumbra",
  phoneDisplay: "+91 84248 54177",
  hours: "Open till late evening"
} as const;
