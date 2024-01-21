import { Container } from './styles'

interface TitleProps {
    title: string
}

export const Title = ({ title }: TitleProps) => {
    return <Container> {title} </Container>
}
