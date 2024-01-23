import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface ButtonStyleProps {
    variation: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 12px;

    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;

    ${({ theme, variation }) => css`
        border: 1px solid ${variation === 'PRIMARY' ? 'transparent' : theme.COLORS.GRAY_700};
        background-color: ${variation === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
    `};
`

export const Title = styled.Text<ButtonStyleProps>`
    ${({ theme, variation }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${variation === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    `};
`

export const Icon = styled(Feather).attrs<ButtonStyleProps>(({ theme, variation }) => ({
    size: 24,
    color: variation === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))``
