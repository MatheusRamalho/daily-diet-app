import { TouchableOpacityProps } from 'react-native'

import { Container, Divider, Hour, Name, StatusColor } from './styles'

import { Status } from 'src/types/Status'

interface MealProps extends TouchableOpacityProps {
    id: string
    name: string
    hour: string
    status: Status
}

export const Meal = ({ id, hour, name, status, ...rest }: MealProps) => {
    return (
        <Container {...rest} id={id}>
            <Hour> {hour} </Hour>
            <Divider />
            <Name> {name} </Name>
            <StatusColor type={status} />
        </Container>
    )
}
