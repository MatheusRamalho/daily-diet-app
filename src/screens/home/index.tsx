import { useEffect, useState } from 'react'
import { SectionList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button } from '@/components/Button'
import { Percent } from '@/components/Percent'
import { Meal } from '@/components/Meal'
import { ListEmpty } from '@/components/ListEmpty'
import { Title } from '@/components/Title'
import { MealListType } from '@/types/meal'
import { storageMealGet } from '@/storage/storageMeal'

import { Container, Content } from './styles'

export function Home() {
    const navigation = useNavigation()
    const [meals, setMeals] = useState<MealListType[]>([])

    const handleStatistic = () => {
        navigation.navigate('statistic')
    }

    const handleNewMeal = () => {
        navigation.navigate('new')
    }

    const handleMealDetails = (id: string) => {
        navigation.navigate('meal', { id })
    }

    useEffect(() => {
        async function loadMeals() {
            const storedMeals = await storageMealGet()
            setMeals(storedMeals)
        }

        loadMeals()
    }, [])

    return (
        <Container>
            <Content>
                <Percent
                    value="90,86%"
                    status="INSIDE"
                    description="das refeições dentro da dieta"
                    onPress={handleStatistic}
                />
            </Content>

            <Content>
                <Title title="Refeições" />
                <Button title="Nova refeição" icon="plus" onPress={handleNewMeal} />
            </Content>

            <Content>
                <SectionList
                    sections={meals}
                    keyExtractor={(item) => item.id}
                    renderSectionHeader={({ section }) => <Title title={section.title} />}
                    renderItem={({ item }) => (
                        <Meal
                            id={item.id}
                            hour={item.hour}
                            name={item.name}
                            status={item.status}
                            onPress={() => handleMealDetails(item.id)}
                        />
                    )}
                    contentContainerStyle={meals.length === 0 && { flex: 1 }}
                    ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira refeição" />}
                    showsVerticalScrollIndicator={false}
                />
            </Content>
        </Container>
    )
}
