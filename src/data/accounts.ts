import type { UserProfile, AccountBadge } from "@/types";

// ── Mock Business Accounts ──

export const BUSINESS_ACCOUNTS: UserProfile[] = [
  {
    id: "brown-series",
    username: "brownseries",
    displayName: "Brown Series",
    avatar: "🏷️",
    accountType: "business",
    bio: "Contemporary fashion rooted in earth tones and timeless design.",
    followers: 24300,
    following: 142,
    verified: true,
    businessInfo: {
      storeName: "Brown Series",
      category: "Fashion",
      rating: 4.8,
      totalSales: 3420,
      location: "Mumbai, India",
      established: "2024",
    },
  },
  {
    id: "zahra-curates",
    username: "zahra_curates",
    displayName: "Zahra Ahmed",
    avatar: "🧕",
    accountType: "business",
    bio: "Modest fashion curator. Minimalist Eid looks & everyday elegance.",
    followers: 18700,
    following: 310,
    verified: true,
    businessInfo: {
      storeName: "Zahra Curates",
      category: "Modest Fashion",
      rating: 4.9,
      totalSales: 1890,
      location: "Dubai, UAE",
      established: "2025",
    },
  },
  {
    id: "modest-layering",
    username: "modest_layering",
    displayName: "Agnes",
    avatar: "🧶",
    accountType: "business",
    bio: "Handcrafted knitwear & layering pieces. Slow fashion, warm textures.",
    followers: 9400,
    following: 87,
    verified: false,
    businessInfo: {
      storeName: "Noor Textiles",
      category: "Knitwear & Textiles",
      rating: 4.7,
      totalSales: 760,
      location: "Jaipur, India",
      established: "2025",
    },
  },
  {
    id: "sara-styles",
    username: "sara_styles",
    displayName: "Sara Collections",
    avatar: "👜",
    accountType: "business",
    bio: "Premium leather goods & accessories. Neutral palette, bold craft.",
    followers: 12100,
    following: 204,
    verified: true,
    businessInfo: {
      storeName: "Sara Collections",
      category: "Accessories",
      rating: 4.6,
      totalSales: 2150,
      location: "Istanbul, Turkey",
      established: "2024",
    },
  },
  {
    id: "earth-atelier",
    username: "earth.atelier",
    displayName: "Earth Atelier",
    avatar: "🌿",
    accountType: "business",
    bio: "Sustainable outerwear & essentials. Earth-first, style-always.",
    followers: 6800,
    following: 156,
    verified: false,
    businessInfo: {
      storeName: "Earth Atelier",
      category: "Sustainable Fashion",
      rating: 4.5,
      totalSales: 430,
      location: "Bangalore, India",
      established: "2025",
    },
  },
];

// ── Quick-access account badges (for embedding in products/feed) ──

export function getAccountBadge(accountId: string): AccountBadge {
  const acct = BUSINESS_ACCOUNTS.find((a) => a.id === accountId);
  if (!acct) {
    return {
      id: "unknown",
      username: "unknown",
      displayName: "Unknown",
      avatar: "❓",
    };
  }
  return {
    id: acct.id,
    username: acct.username,
    displayName: acct.displayName,
    avatar: acct.avatar,
    verified: acct.verified,
  };
}

export const ACCOUNTS = {
  brownSeries: getAccountBadge("brown-series"),
  zahra: getAccountBadge("zahra-curates"),
  noor: getAccountBadge("modest-layering"),
  sara: getAccountBadge("sara-styles"),
  earth: getAccountBadge("earth-atelier"),
};

// ── Current logged-in user (mock) ──

export const CURRENT_USER: UserProfile = {
  id: "current-user",
  username: "adam.john",
  displayName: "Adam John",
  avatar: "👤",
  accountType: "personal",
  bio: "Fashion enthusiast. Earth tones only.",
  followers: 142,
  following: 89,
};
