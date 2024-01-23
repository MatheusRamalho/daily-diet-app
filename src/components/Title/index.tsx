import { Container } from './styles'

export interface TitleProps {
    title: string
    isCentralized?: boolean
}

export const Title = ({ title, isCentralized = false }: TitleProps) => {
    return (
        <Container title={title} isCentralized={isCentralized}>
            {title}
        </Container>
    )
}
