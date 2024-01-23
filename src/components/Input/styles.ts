import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    min-height: 80px;
    max-height: 80px;
    margin: 4px 0;
`

export const Label = styled.Text`
    margin-bottom: 4px;

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`

export const InputContainer = styled(TextInput)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;
    padding: 16px;
    border-radius: 6px;

    ${({ theme }) => css`
        background-color: ${theme.COLORS.WHITE};
        border: 1px solid ${theme.COLORS.GRAY_300};

        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`
