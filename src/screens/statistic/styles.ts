import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN_300};
`

export const Content = styled.View`
    flex: 1;
    gap: 16px;

    padding: 24px;
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const ContentFlex = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`
