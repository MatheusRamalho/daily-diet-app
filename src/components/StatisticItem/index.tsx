import { Status } from '@/types/status'

import { Container, Value, Text } from './styles'

interface StatisticItemProps {
    value: string
    desc: string
    status?: Status
}

export function StatisticItem({ value, desc, status }: StatisticItemProps) {
    return (
        <Container type={status || ''}>
            <Value> {value} </Value>
            <Text> {desc} </Text>
        </Container>
    )
}
