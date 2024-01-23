import styled, { css } from 'styled-components/native'
import { TitleProps } from '.'

export const Container = styled.Text<TitleProps>`
    margin: 8px 0;

    ${({ theme, isCentralized }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_700};

        text-align: ${isCentralized ? 'center' : 'left'};
    `};
`
