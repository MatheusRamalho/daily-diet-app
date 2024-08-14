import { Container } from './styles'

export interface TitleProps {
    title: string
    isCentralized?: boolean
}

export function Title({ title, isCentralized = false }: TitleProps) {
    return (
        <Container title={title} isCentralized={isCentralized}>
            {title}
        </Container>
    )
}
