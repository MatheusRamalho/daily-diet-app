import { TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Container, Title, ButtonTypeStyleProps, Icon } from './styles'

interface ButtonProps extends TouchableOpacityProps {
    title: string
    variation?: ButtonTypeStyleProps
    icon: keyof typeof Feather.glyphMap
}

export const Button = ({ title, variation = 'PRIMARY', icon, ...rest }: ButtonProps) => {
    return (
        <Container variation={variation} {...rest}>
            <Icon variation={variation} name={icon} />
            <Title variation={variation}> {title} </Title>
        </Container>
    )
}
