import {MenuSection} from "./types";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

//server-side function for fetching menu sections (SSR/SSG)
export async function getMenuSectionsServer(): Promise<MenuSection[]> {
  try {
    const res = await fetch(`${API}/menu-sections`, {
      next: {revalidate: 3600}, // Cache for 1 hour
    });
    if (!res.ok) throw new Error("Failed to fetch menu sections");
    return res.json();
  } catch (error) {
    console.error("Error fetching menu sections:", error);
    return [];
  }
}
export const MenuAPI = {
  getCategoriesWithFood: async (id: string) =>
    fetch(`${API}/menu-categories/${id}/detail`).then((res) => res.json()),
};
