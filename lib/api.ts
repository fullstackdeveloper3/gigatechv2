import { API_BASE } from "./constants";
import type { Product } from "@/data/products";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/products.php`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchProduct(id: string): Promise<Product | null> {
  const res = await fetch(`${API_BASE}/products.php?id=${encodeURIComponent(id)}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
