import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

import { Status } from '@/types/status'

interface StatusStyleProps {
    type: Status
}

export const Container = styled(TouchableOpacity)<StatusStyleProps>`
    align-items: center;
    justify-content: center;

    padding: 40px 18px;
    border-radius: 8px;

    ${({ theme, type }) => css`
        background-color: ${type === 'INSIDE' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
    `};
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE['2XL']}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`

export const Description = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_600};
    `};
`
