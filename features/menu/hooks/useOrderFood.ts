import {create} from "zustand";
import {OrderFood} from "../types";

const initialOrders: OrderFood[] = [];

export const useOrderFood = create<{
  orders: OrderFood[];
  totalPrice: number;
  addFood: (food: OrderFood) => void;
  removeFood: (foodId: string) => void;
  increaseQuantity: (foodId: string) => void;
  decreaseQuantity: (foodId: string) => void;
  deleteOrder: (foodId: string) => void;
}>((set, get) => ({
  orders: initialOrders,
  totalPrice: 0,
  addFood: (food: OrderFood) =>
    set((state) => {
      const existingFood = state.orders.find((item) => item.id === food.id);

      if (existingFood) {
        const updatedOrders = state.orders.map((item) =>
          item.id === food.id ? {...item, quantity: item.quantity + 1} : item,
        );
        return {
          orders: updatedOrders,
          totalPrice: get().totalPrice + food.price,
        };
      } else {
        return {
          orders: [...state.orders, food],
          totalPrice: get().totalPrice + food.price,
        };
      }
    }),
  removeFood: (foodId: string) =>
    set((state) => ({
      orders: state.orders.filter((food) => food.id !== foodId),
      totalPrice:
        get().totalPrice -
        (state.orders.find((food) => food.id === foodId)?.price || 0),
    })),
  increaseQuantity: (foodId: string) =>
    set((state) => {
      const updatedOrders = state.orders.map((food) => {
        if (food.id === foodId) {
          return {...food, quantity: food.quantity + 1};
        }
        return food;
      });
      const addedFood = state.orders.find((food) => food.id === foodId);
      return {
        orders: updatedOrders,
        totalPrice: get().totalPrice + (addedFood ? addedFood.price : 0),
      };
    }),
  decreaseQuantity: (foodId: string) =>
    set((state) => {
      const updatedOrders = state.orders.map((food) => {
        if (food.id === foodId && food.quantity > 1) {
          return {...food, quantity: food.quantity - 1};
        }
        return food;
      });
      const removedFood = state.orders.find((food) => food.id === foodId);
      return {
        orders: updatedOrders,
        totalPrice: get().totalPrice - (removedFood ? removedFood.price : 0),
      };
    }),
  deleteOrder: (foodId: string) =>
    set((state) => {
      const foodToDelete = state.orders.find((food) => food.id === foodId);
      const priceReduction = foodToDelete
        ? foodToDelete.price * foodToDelete.quantity
        : 0;
      return {
        orders: state.orders.filter((food) => food.id !== foodId),
        totalPrice: get().totalPrice - priceReduction,
      };
    }),
}));
