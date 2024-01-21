import React, { RefObject } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container, InputContainer, Label } from './styles'

interface InputProps extends TextInputProps {
    inputRef?: RefObject<TextInput>
    label: string
}

export const Input = ({ label, inputRef, ...rest }: InputProps) => {
    const { COLORS } = useTheme()

    return (
        <Container>
            <Label> {label} </Label>
            <InputContainer ref={inputRef} {...rest} placeholderTextColor={COLORS.GRAY_300} />
        </Container>
    )
}
