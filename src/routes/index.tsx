import { View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'

export const Routes = () => {
    const { COLORS } = useTheme()

    return (
        // A View abaixo evita o efeito de Glitch (piscar tela branca ao mudar de tela)
        <View style={{ flex: 1, backgroundColor: COLORS.GRAY_100 }}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}
