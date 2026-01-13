import {useQuery} from "@tanstack/react-query";
import {MenuAPI} from "../services";
import {MenuCategoryWithFoods} from "../types";

export const useMenuCategory = (categoryId: string | null) => {
  return useQuery<MenuCategoryWithFoods>({
    queryKey: ["menuCategory", categoryId],
    queryFn: () => {
      if (!categoryId) throw new Error("Category ID is required");
      return MenuAPI.getCategoriesWithFood(categoryId);
    },
    enabled: !!categoryId,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
  });
};
