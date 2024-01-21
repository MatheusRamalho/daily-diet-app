import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

import { Status } from 'src/types/Status'

interface StatusStyleProps {
    type: Status
}

export const Container = styled(TouchableOpacity)`
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    margin: 4px 0;
    padding: 14px 16px 14px 12px;
    border-radius: 6px;

    ${({ theme }) => css`
        background-color: ${theme.COLORS.WHITE};
        border: 1px solid ${theme.COLORS.GRAY_300};
    `};
`

export const Hour = styled.Text`
    text-transform: uppercase;

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`

export const Divider = styled.Text`
    width: 1px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Name = styled.Text`
    flex: 1;

    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    overflow: hidden;

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_600};
    `};
`

export const StatusColor = styled.Text<StatusStyleProps>`
    width: 14px;
    height: 14px;
    border-radius: 999px;

    ${({ theme, type }) => css`
        background-color: ${type === 'INSIDE' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500};
    `};
`
