import { MealModel } from "../../domain/models/MealModel";

export class MealRepository {
  async fetchMeals(): Promise<MealModel[]> {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const meals = await response.json();
    return meals.meals;
  }
}