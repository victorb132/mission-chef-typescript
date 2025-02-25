import { create } from 'zustand';
import { MealModel } from '../domain/models/MealModel';
import { MealRepository } from '../data/repositories/MealRepository';

interface MealState {
  meals: MealModel[];
  isLoading: boolean;
  fetchMeals: () => Promise<void>;
}

export const useMealStore = create<MealState>((set) => ({
  meals: [],
  isLoading: true,
  fetchMeals: async () => {
    const repository = new MealRepository();
    const data = await repository.fetchMeals();
    set({
      meals: data,
      isLoading: false
    })
  }
}));