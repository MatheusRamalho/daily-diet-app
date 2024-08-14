import { Alert } from 'react-native'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import UUID from 'react-native-uuid'
import { useNavigation } from '@react-navigation/native'

import { Input } from '@/components/Input'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import { storageMealGet, storageMealSet } from '@/storage/storageMeal'
import { MealListType } from '@/types/meal'

import { Container, Content, ContentFlex, Header } from './styles'

const newMealSchema = z.object({
    name: z.string({ message: 'Nome é obrigatório.' }),
    description: z.string({ message: 'Descrição é obrigatória.' }),
    date: z.string({ message: 'Horário é obrigatório.' }),
    hour: z.string({ message: 'Horário é obrigatório.' }),
    // status: z.string({ message: 'Nome é obrigatório.' }),
})

type NewMealSchemaData = z.infer<typeof newMealSchema>

export const NewMeal = () => {
    const navigation = useNavigation()

    const { control, handleSubmit } = useForm<NewMealSchemaData>({
        resolver: zodResolver(newMealSchema),
    })

    async function handleAddNewMeal(data: NewMealSchemaData) {
        if (data === null) {
            return Alert.alert('Aviso!', `Preencha todos os campos para adicionar uma nova refeição`)
        }

        try {
            const storedMealList = await storageMealGet()
            const newMealList: MealListType[] = storedMealList ? [...storedMealList] : []

            // Verifica se já existe uma entrada para a data especificada
            const existingDateIndex = newMealList.findIndex((meal) => meal.title === data.date)

            if (existingDateIndex !== -1) {
                // Adiciona a nova refeição à data existente
                newMealList[existingDateIndex].data.push({
                    id: String(UUID.v4()),
                    name: data.name,
                    description: data.description,
                    date: data.date,
                    hour: data.hour,
                    status: 'INSIDE',
                })
            } else {
                // Cria uma nova entrada de data com a nova refeição
                newMealList.push({
                    title: data.date,
                    data: [
                        {
                            id: String(UUID.v4()),
                            name: data.name,
                            description: data.description,
                            date: data.date,
                            hour: data.hour,
                            status: 'INSIDE',
                        },
                    ],
                })
            }

            storageMealSet(newMealList)
        } catch (error) {
            console.log(error)
        } finally {
            navigation.navigate('home')
        }
    }

    return (
        <Container>
            <Header>
                <Title isCentralized title="Nova refeição" />
            </Header>

            <Content>
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { value, onChange } }) => (
                        <Input label="Nome" value={value} onChangeText={onChange} />
                    )}
                />

                <Controller
                    control={control}
                    name="description"
                    render={({ field: { value, onChange } }) => (
                        <Input label="Descrição" value={value} onChangeText={onChange} />
                    )}
                />

                <ContentFlex>
                    <Controller
                        control={control}
                        name="date"
                        render={({ field: { value, onChange } }) => (
                            <Input label="Data" value={value} onChangeText={onChange} />
                        )}
                    />

                    <Controller
                        control={control}
                        name="hour"
                        render={({ field: { value, onChange } }) => (
                            <Input label="Horário" value={value} onChangeText={onChange} />
                        )}
                    />
                </ContentFlex>

                <Button title="Cadastrar refeição" icon="check" onPress={handleSubmit(handleAddNewMeal)} />
            </Content>
        </Container>
    )
}
