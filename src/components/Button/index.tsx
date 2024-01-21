import { TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Container, Title, ButtonTypeStyleProps, Icon } from './styles'

interface ButtonProps extends TouchableOpacityProps {
    title: string
    type?: ButtonTypeStyleProps
    icon: keyof typeof Feather.glyphMap
}

export const Button = ({ title, type = 'PRIMARY', icon, ...rest }: ButtonProps) => {
    return (
        <Container type={type} {...rest}>
            <Icon type={type} name={icon} />
            <Title type={type}> {title} </Title>
        </Container>
    )
}
