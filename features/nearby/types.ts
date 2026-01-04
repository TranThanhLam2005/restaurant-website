export type RestaurantType = "dine-in" | "takeaway" | "delivery";

export interface NearbyStore {
  // Restaurant type
  restaurantType: RestaurantType;

  // Search query
  searchQuery: string;
  debouncedSearchQuery: string;

  // Actions
  setRestaurantType: (type: RestaurantType) => void;
  setSearchQuery: (query: string) => void;
  setDebouncedSearchQuery: (query: string) => void;
  reset: () => void;
}
