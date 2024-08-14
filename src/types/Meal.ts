import { Status } from './status'

export interface MealType {
    id: string
    name: string
    description: string
    date: string
    hour: string
    status: Status
}

export interface MealListType {
    title: string
    data: MealType[]
}
