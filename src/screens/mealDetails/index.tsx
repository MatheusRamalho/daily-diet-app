import { Alert, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Title } from '@/components/Title'
import { Button } from '@/components/Button'

import { Container, Content, Header, Infos, InfosButtons } from './styles'
import { useEffect, useState } from 'react'
import { MealType } from '@/types/meal'
import { storageGetMealId, storageMealRemove } from '@/storage/storageMeal'

export function MealDetails() {
    const navigation = useNavigation()
    const route = useRoute()
    const { id } = route.params
    const [meal, setMeal] = useState<MealType | undefined>(undefined)

    useEffect(() => {
        async function fetchMeal() {
            const getMeal = await storageGetMealId(id)
            setMeal(getMeal)
        }

        fetchMeal()
    }, [id])

    function handleDeleteMeal(id: string) {
        Alert.alert('Remover', `Deseja realmente remover?`, [
            {
                text: 'Não',
                style: 'cancel',
            },
            {
                text: 'Sim',
                onPress: async () => {
                    await storageMealRemove(id)
                    navigation.navigate('home')
                },
            },
        ])
    }

    return (
        <Container>
            <Header>
                <Title isCentralized title="Refeição" />
            </Header>

            <Content>
                {meal && (
                    <>
                        <Infos>
                            <View>
                                <Title title={meal.name} />
                                <Text> {meal.description} </Text>
                            </View>

                            <View>
                                <Title title="Data e hora" />
                                <Text>
                                    {meal.date} às {meal.hour}
                                </Text>
                            </View>
                        </Infos>

                        <InfosButtons>
                            <Button title="Editar refeição" icon="edit" />

                            <Button
                                title="Excluir refeição"
                                icon="trash"
                                variation="SECONDARY"
                                onPress={() => handleDeleteMeal(meal.id)}
                            />
                        </InfosButtons>
                    </>
                )}
            </Content>
        </Container>
    )
}
