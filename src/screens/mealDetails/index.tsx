import { Text } from 'react-native'

import { Container, Content, Header } from './styles'

import { Title } from '@components/Title'
import { Button } from '@components/Button'

export const MealDetails = () => {
    return (
        <Container>
            <Header>
                <Title isCentralized title="Refeição" />
            </Header>

            <Content>
                <Title title="X-tudo" />
                <Text> Xis completo da lancheria do bairro </Text>

                <Title title="Data e hora" />
                <Text> 12/08/2022 às 20:00 </Text>

                <Button title="Editar refeição" icon="edit" />
                <Button title="Excluir refeição" icon="trash" variation="SECONDARY" />
            </Content>
        </Container>
    )
}
