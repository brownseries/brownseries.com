// ── Account Types (Instagram-style: Personal vs Business) ──

export type AccountType = "personal" | "business";

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  avatar: string; // emoji or image URL
  accountType: AccountType;
  bio?: string;
  followers: number;
  following: number;
  verified?: boolean;
  // Business-only fields
  businessInfo?: BusinessInfo;
}

export interface BusinessInfo {
  storeName: string;
  category: string;
  rating: number;
  totalSales: number;
  location?: string;
  established?: string;
}

// ── Lightweight account reference (embedded in products/feed/stories) ──

export interface AccountBadge {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  verified?: boolean;
}

// ── Product with account attribution ──

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: string;
  account: AccountBadge;
}

// ── Feed item with account attribution ──

export interface FeedItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  saves: number;
  likes: number;
  tags: string[];
  href: string;
  aspect: "tall" | "short";
  hot: boolean;
  account: AccountBadge;
}

// ── Story with account attribution ──

export interface Story {
  id: string;
  label: string;
  image: string;
  href: string;
  active: boolean;
  account: AccountBadge;
}
