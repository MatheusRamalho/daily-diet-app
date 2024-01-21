import { FlatList } from 'react-native'

import { Container, Content } from './styles'

import { Button } from '@components/Button'
import { Percent } from '@components/Percent'
import { Meal } from '@components/Meal'
import { ListEmpty } from '@components/ListEmpty'
import { Title } from '@components/Title'

import { MEAL_DATA } from '@storage/Meal'

export const Home = () => {
    return (
        <Container>
            <Content>
                <Percent value="90,86%" status="INSIDE" description="das refeições dentro da dieta" />
            </Content>

            <Content>
                <Title title="Refeições" />
                <Button title="Nova refeição" icon="plus" />
            </Content>

            <Content>
                <Title title="12.08.22" />
                <FlatList
                    data={MEAL_DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Meal id={item.id} hour={item.hour} name={item.name} status={item.status} />
                    )}
                    contentContainerStyle={MEAL_DATA.length === 0 && { flex: 1 }}
                    ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira refeição" />}
                    showsVerticalScrollIndicator={false}
                />
            </Content>
        </Container>
    )
}
