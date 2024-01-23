import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

import { Status } from 'src/types/Status'

interface StatusStyleProps {
    type: Status
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    gap: 16px;
    justify-content: center;

    padding: 48px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Title = styled.Text<StatusStyleProps>`
    text-align: center;

    ${({ theme, type }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${type === 'INSIDE' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
    `};
`

export const Desc = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`

export const Illustration = styled.Image`
    width: 224px;
    height: 288px;
    margin: 0 auto;
`
