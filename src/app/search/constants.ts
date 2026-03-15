import { ACCOUNTS } from "@/data/accounts";
import type { Product, AccountBadge } from "@/types";

export const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Everyday Essentials",
    price: "₹180",
    image: "/hero_indian_essentials.png",
    tag: "essentials",
    account: ACCOUNTS.brownSeries,
  },
  {
    id: 2,
    name: "Winter Collection",
    price: "₹320",
    image: "/hero_indian_winter.png",
    tag: "winter",
    account: ACCOUNTS.noor,
  },
  {
    id: 3,
    name: "Premium Accessories",
    price: "₹240",
    image: "/hero_indian_accessories.png",
    tag: "accessories",
    account: ACCOUNTS.sara,
  },
  {
    id: 4,
    name: "Modern Silhouettes",
    price: "₹450",
    image: "/hero_indian_new_arrivals.png",
    tag: "new",
    account: ACCOUNTS.zahra,
  },
  {
    id: 5,
    name: "Eid Collection",
    price: "₹560",
    image: "/hero_eid_collection.png",
    tag: "eid",
    account: ACCOUNTS.zahra,
  },
  {
    id: 6,
    name: "Textured Midi Skirt",
    price: "₹240",
    image: "/trending_hijabi_skirt.png",
    tag: "bottoms",
    account: ACCOUNTS.brownSeries,
  },
  {
    id: 7,
    name: "Oversized Linen Coat",
    price: "₹450",
    image: "/hero.png",
    tag: "outerwear",
    account: ACCOUNTS.earth,
  },
  {
    id: 8,
    name: "Classic Leather Tote",
    price: "₹560",
    image: "/hero-2.png",
    tag: "accessories",
    account: ACCOUNTS.sara,
  },
];

export const CATEGORIES = [
  "All",
  "New",
  "Outerwear",
  "Knitwear",
  "Bottoms",
  "Accessories",
  "Eid",
];
export const TRENDING = [
  "Eid Collection",
  "Linen Coat",
  "Knitwear",
  "Accessories",
  "Winter Wear",
];

export const BROWSE_CATEGORIES = [
  {
    label: "New Arrivals",
    tag: "new",
    image: "/hero_indian_new_arrivals.png",
    color: "bg-[#7A5A40]",
  },
  {
    label: "Outerwear",
    tag: "outerwear",
    image: "/hero.png",
    color: "bg-[#4A3728]",
  },
  {
    label: "Accessories",
    tag: "accessories",
    image: "/hero_indian_accessories.png",
    color: "bg-[#9B6B43]",
  },
  {
    label: "Bottoms",
    tag: "bottoms",
    image: "/trending_hijabi_skirt.png",
    color: "bg-[#5D4037]",
  },
  {
    label: "Eid Collection",
    tag: "eid",
    image: "/hero_eid_collection.png",
    color: "bg-[#8D6E63]",
  },
  {
    label: "Essentials",
    tag: "essentials",
    image: "/hero_indian_essentials.png",
    color: "bg-[#3E2723]",
  },
];

export const HIERARCHICAL_CATEGORIES = [
  {
    category: "Men",
    subcategories: [
      { label: "Shirts", tag: "shirts" },
      { label: "Trousers", tag: "trousers" },
      { label: "Outerwear", tag: "outerwear" },
      { label: "Accessories", tag: "accessories" },
    ]
  },
  {
    category: "Women",
    subcategories: [
      { label: "Dresses", tag: "dresses" },
      { label: "Tops", tag: "tops" },
      { label: "Bottoms", tag: "bottoms" },
      { label: "Accessories", tag: "accessories" },
      { label: "Modest Wear", tag: "modest" },
    ]
  },
  {
    category: "Kids",
    subcategories: [
      { label: "Boys", tag: "boys" },
      { label: "Girls", tag: "girls" },
      { label: "Baby", tag: "baby" },
      { label: "Accessories", tag: "accessories" },
    ]
  },
  {
    category: "Accessories",
    subcategories: [
      { label: "Bags", tag: "bags" },
      { label: "Jewelry", tag: "jewelry" },
      { label: "Watches", tag: "watches" },
      { label: "Sunglasses", tag: "sunglasses" },
    ]
  }
];

export const GRID_CATEGORIES = [
  {
    title: "Men",
    subtitle: "Classic & contemporary",
    iconName: "Mars",
    color: "bg-orange-500/10 text-orange-500",
    tag: "men",
  },
  {
    title: "Women",
    subtitle: "Modest & elegant",
    iconName: "Flower2",
    color: "bg-green-500/10 text-green-500",
    tag: "women",
  },
  {
    title: "Kids",
    subtitle: "Playful & comfy",
    iconName: "Smile",
    color: "bg-blue-500/10 text-blue-500",
    tag: "kids",
  },
  {
    title: "Accessories",
    subtitle: "Finishing touches",
    iconName: "Watch",
    color: "bg-purple-500/10 text-purple-500",
    tag: "accessories",
  },
  {
    title: "Outerwear",
    subtitle: "Layer up warmly",
    iconName: "Cloud",
    color: "bg-cyan-500/10 text-cyan-500",
    tag: "outerwear",
  },
  {
    title: "Eid Collection",
    subtitle: "Festive wear",
    iconName: "Moon",
    color: "bg-yellow-500/10 text-yellow-500",
    tag: "eid",
  },
  {
    title: "New Arrivals",
    subtitle: "Just dropped",
    iconName: "Zap",
    color: "bg-pink-500/10 text-pink-500",
    tag: "new",
  },
  {
    title: "Essentials",
    subtitle: "Everyday basics",
    iconName: "Box",
    color: "bg-neutral-500/10 text-neutral-500",
    tag: "essentials",
  },
];

export const FEATURED_COLLECTIONS = [
  {
    id: "eid-glow",
    title: "Eid Glow '26",
    items: 24,
    image: "/hero_eid_collection.png",
    color: "from-[#9B6B43] to-[#D2B48C]",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-golden-dress-34440-large.mp4",
    account: ACCOUNTS.zahra,
  },
  {
    id: "monochrome",
    title: "The Monochrome Edit",
    items: 18,
    image: "/hero.png",
    color: "from-[#2C2C2C] to-[#4A4A4A]",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-woman-in-a-white-dress-and-a-hat-walks-on-the-4933-large.mp4",
    account: ACCOUNTS.brownSeries,
  },
  {
    id: "linen-luxury",
    title: "Linen Luxury",
    items: 12,
    image: "/hero_indian_essentials.png",
    color: "from-[#D2B48C] to-[#E5D3B3]",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-young-woman-in-a-summer-dress-posing-on-the-beach-4945-large.mp4",
    account: ACCOUNTS.earth,
  },
];

export const SPOTLIGHT = {
  name: "Zahra Ahmed",
  role: "Fashion Curator",
  image: "/hero_indian_winter.png",
  quote: "Modesty is not about hiding, it's about revealing your dignity.",
  lookCount: 42,
  account: ACCOUNTS.zahra,
};

export const COMMUNITY_BOARDS = [
  {
    id: "board-1",
    title: "Minimalist Eid",
    creator: "@zahra_curates",
    items: 12,
    images: [
      "/hero_eid_collection.png",
      "/hero_indian_essentials.png",
      "/hero_indian_accessories.png",
    ],
    account: ACCOUNTS.zahra,
  },
  {
    id: "board-2",
    title: "Winter Textures",
    creator: "@modest_layering",
    items: 8,
    images: [
      "/hero_indian_winter.png",
      "/trending_hijabi_skirt.png",
      "/hero.png",
    ],
    account: ACCOUNTS.noor,
  },
  {
    id: "board-3",
    title: "Neutral Palette",
    creator: "@sara_styles",
    items: 15,
    images: [
      "/hero-2.png",
      "/hero_indian_new_arrivals.png",
      "/hero_indian_essentials.png",
    ],
    account: ACCOUNTS.sara,
  },
];

export const STYLE_QUIZ_QUESTIONS = [
  {
    id: "mood",
    question: "What's your current vibe?",
    options: [
      {
        id: "minimal",
        label: "Minimalist Zen",
        image: "/hero.png",
        tag: "outerwear",
      },
      {
        id: "bold",
        label: "Bold Expression",
        image: "/hero_eid_collection.png",
        tag: "eid",
      },
      {
        id: "classic",
        label: "Timeless Classic",
        image: "/hero_indian_winter.png",
        tag: "winter",
      },
      {
        id: "utility",
        label: "Modern Utility",
        image: "/hero_indian_essentials.png",
        tag: "essentials",
      },
    ],
  },
  {
    id: "color",
    question: "Pick a palette",
    options: [
      {
        id: "earth",
        label: "Earth Tones",
        color: "bg-[#7A5A40]",
        tag: "accessories",
      },
      {
        id: "monochrome",
        label: "Monochrome",
        color: "bg-[#2C2C2C]",
        tag: "outerwear",
      },
      {
        id: "pastel",
        label: "Soft Pastels",
        color: "bg-[#D2B48C]",
        tag: "new",
      },
      { id: "jewel", label: "Jewel Tones", color: "bg-[#4A3728]", tag: "eid" },
    ],
  },
  {
    id: "silhouette",
    question: "Preferred Fit?",
    options: [
      {
        id: "oversized",
        label: "Oversized & Relaxed",
        image: "/hero.png",
        tag: "outerwear",
      },
      {
        id: "tailored",
        label: "Structured & Tailored",
        image: "/hero_indian_essentials.png",
        tag: "essentials",
      },
      {
        id: "layered",
        label: "Multi-layered",
        image: "/hero_indian_winter.png",
        tag: "winter",
      },
      {
        id: "fluid",
        label: "Fluid & Flowy",
        image: "/trending_hijabi_skirt.png",
        tag: "bottoms",
      },
    ],
  },
];

export const SAVED_ITEMS: Product[] = [
  {
    id: 1,
    name: "Everyday Essentials",
    price: "₹180",
    image: "/hero_indian_essentials.png",
    tag: "essentials",
    account: ACCOUNTS.brownSeries,
  },
  {
    id: 4,
    name: "Modern Silhouettes",
    price: "₹450",
    image: "/hero_indian_new_arrivals.png",
    tag: "new",
    account: ACCOUNTS.zahra,
  },
  {
    id: 8,
    name: "Classic Leather Tote",
    price: "₹560",
    image: "/hero-2.png",
    tag: "accessories",
    account: ACCOUNTS.sara,
  },
  {
    id: 2,
    name: "Winter Collection",
    price: "₹320",
    image: "/hero_indian_winter.png",
    tag: "winter",
    account: ACCOUNTS.noor,
  },
  {
    id: 6,
    name: "Textured Midi Skirt",
    price: "₹240",
    image: "/trending_hijabi_skirt.png",
    tag: "bottoms",
    account: ACCOUNTS.brownSeries,
  },
];

export const PERSONAL_BOARDS = [
  {
    id: "p-board-1",
    title: "Summer in Kerala",
    items: 5,
    images: [
      "/hero_indian_essentials.png",
      "/hero_indian_accessories.png",
      "/hero.png",
    ],
  },
  {
    id: "p-board-2",
    title: "Wedding Guest",
    items: 3,
    images: [
      "/hero_eid_collection.png",
      "/hero_indian_new_arrivals.png",
      "/hero-2.png",
    ],
  },
];
