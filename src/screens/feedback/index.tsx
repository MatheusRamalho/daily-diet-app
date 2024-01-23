import { Container, Desc, Illustration, Title } from './styles'

import { Status } from 'src/types/Status'

import { Button } from '@components/Button'

import greenImg from '@assets/imgs/illustration.png'
import redImg from '@assets/imgs/illustration2.png'

export const Feedback = () => {
    const status: Status = 'INSIDE'

    return (
        <Container>
            <Title type={status}> {status ? 'Que pena!' : 'Continue assim!'} </Title>

            <Desc>
                {status
                    ? 'Você continua dentro da dieta. Muito bem!'
                    : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'}
            </Desc>

            <Illustration source={status ? greenImg : redImg} />

            <Button title="Ir para a página inicial" icon="home" />
        </Container>
    )
}
