import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface ButtonStyleProps {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 12px;

    min-height: 56px;
    max-height: 56px;
    margin: 4px 0;
    border-radius: 6px;

    ${({ theme, type }) => css`
        border: 1px solid ${type === 'PRIMARY' ? 'transparent' : theme.COLORS.GRAY_700};
        background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
    `};
`

export const Title = styled.Text<ButtonStyleProps>`
    ${({ theme, type }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    `};
`

export const Icon = styled(Feather).attrs<ButtonStyleProps>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))``
