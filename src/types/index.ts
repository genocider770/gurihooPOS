export type Role = "admin" | "cashier";

export interface Variant {
  id: string;
  name: string;
  price: number;
  stock: number;
  color: string;
}

export interface OrderItem {
  variantId: string;
  quantity: number;
  priceAtOrder: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: "paid" | "unpaid";
  timestamp: number;
  cashierName: string;
  customerName: string;
  type: "offline" | "online";
}

export interface AppConfig {
  storeName: string;
  storeAddress: string;
  taxRate: number;
  currency: string;
}
