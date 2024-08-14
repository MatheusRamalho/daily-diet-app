import { TouchableOpacityProps } from 'react-native'

import { Container, Description, Title } from './styles'

import { Status } from '@/types/status'

interface PercentProps extends TouchableOpacityProps {
    value: string
    description: string
    status: Status
}

export function Percent({ value, description, status, ...rest }: PercentProps) {
    return (
        <Container {...rest} type={status}>
            <Title> {value} </Title>
            <Description> {description} </Description>
        </Container>
    )
}
