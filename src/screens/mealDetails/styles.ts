import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Header = styled.View`
    padding: 20px 0;
`

export const Content = styled.View`
    flex: 1;
    gap: 16px;

    padding: 24px;
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`
