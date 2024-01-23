import { Status } from 'src/types/Status'

import { Container, Value, Text } from './styles'

interface StatisticItemProps {
    value: string
    desc: string
    status?: Status
}

export const StatisticItem = ({ value, desc, status }: StatisticItemProps) => {
    return (
        <Container type={status || ''}>
            <Value> {value} </Value>
            <Text> {desc} </Text>
        </Container>
    )
}
