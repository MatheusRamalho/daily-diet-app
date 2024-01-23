import { Container, Content, ContentFlex } from './styles'

import { Percent } from '@components/Percent'
import { StatisticItem } from '@components/StatisticItem'
import { Title } from '@components/Title'

export const Statistic = () => {
    return (
        <Container>
            <Percent value="90,86%" status="INSIDE" description="das refeições dentro da dieta" />

            <Content>
                <Title isCentralized title="Estatísticas gerais" />

                <StatisticItem value="22" desc="melhor sequência de pratos dentro da dieta" />
                <StatisticItem value="109" desc="refeições registradas" />

                <ContentFlex>
                    <StatisticItem value="99" desc="refeições dentro da dieta" status="INSIDE" />
                    <StatisticItem value="22" desc="refeições fora da dieta" status="OUTSIDE" />
                </ContentFlex>
            </Content>
        </Container>
    )
}
