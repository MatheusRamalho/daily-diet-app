import styled, { css } from 'styled-components/native'

export const Container = styled.Text`
    margin: 8px 0;

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`
