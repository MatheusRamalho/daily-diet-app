import styled, { css } from 'styled-components/native'

import { Status } from 'src/types/Status'

interface StatusStyleProps {
    type: Status | ''
}

export const Container = styled.View<StatusStyleProps>`
    gap: 12px;

    height: 90px;
    padding: 16px;
    border-radius: 8px;

    ${({ theme, type }) => css`
        background-color: ${type === 'INSIDE'
            ? theme.COLORS.GREEN_300
            : type === 'OUTSIDE'
              ? theme.COLORS.RED_300
              : theme.COLORS.GRAY_200};
    `};
`

export const Value = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`

export const Text = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_600};
    `};
`
