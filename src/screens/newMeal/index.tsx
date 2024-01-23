import { Container, Content, ContentFlex, Header } from './styles'

import { Input } from '@components/Input'
import { Title } from '@components/Title'
import { Button } from '@components/Button'

export const NewMeal = () => {
    return (
        <Container>
            <Header>
                <Title isCentralized title="Nova refeição" />
            </Header>

            <Content>
                <Input label="Nome" />
                <Input label="Descrição" />

                <ContentFlex>
                    <Input label="Data" />
                    <Input label="Hora" />
                </ContentFlex>

                <Button title="Cadastrar refeição" icon="check" />
            </Content>
        </Container>
    )
}
