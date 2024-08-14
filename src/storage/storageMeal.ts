import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_STORAGE } from '@/constants/storage'
import { MealListType } from '@/types/meal'

export async function storageMealSet(meal: MealListType[]) {
    await AsyncStorage.setItem(MEAL_STORAGE, JSON.stringify(meal))
}

export async function storageMealGet() {
    const storage = await AsyncStorage.getItem(MEAL_STORAGE)
    const meal: MealListType[] = storage ? JSON.parse(storage) : []

    return meal
}

export async function storageMealRemove(mealId: string) {
    // Recupera o array de refeições do armazenamento
    const mealList = await storageMealGet()

    if (mealList) {
        // Encontra e remove o item com o ID correspondente
        const updatedMealList = mealList
            .map((meal) => ({
                ...meal,
                data: meal.data.filter((item) => item.id !== mealId),
            }))
            .filter((meal) => meal.data.length > 0) // Remove também datas que ficaram sem refeições

        // Atualiza o localStorage com o novo array
        await storageMealSet(updatedMealList)
    }

    await AsyncStorage.removeItem(MEAL_STORAGE)
}

export async function storageMealClear() {
    await AsyncStorage.removeItem(MEAL_STORAGE)
}

export async function storageGetMealId(id: string) {
    const storedMeals: MealListType[] | null = await storageMealGet()

    if (storedMeals) {
        // Use map para iterar sobre as listas e find para encontrar a refeição
        const foundMeal = storedMeals
            .map((mealGroup) => mealGroup.data.find((item) => item.id === id))
            .find((meal) => meal !== undefined) // find retorna a primeira refeição encontrada

        if (foundMeal !== undefined) {
            return foundMeal
        }
    }
}
