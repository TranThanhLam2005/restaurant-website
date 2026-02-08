export interface MenuCategory {
  id: string;
  name: string;
}
export interface MenuSection {
  id: string;
  name: string;
  description: string;
  categories: MenuCategory[];
}

export interface Food {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
  ingredients: string;
  preparationTime: number;
  calories: number;
}

export interface MenuCategoryWithFoods extends MenuCategory {
  foods: Food[];
}

export interface OrderFood extends Food {
  quantity: number;
}
