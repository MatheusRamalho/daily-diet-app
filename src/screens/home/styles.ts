import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Content = styled.View`
    width: 100%;
    padding: 32px 0;

    justify-content: center;
`
