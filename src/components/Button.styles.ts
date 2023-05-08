import styled from 'styled-components'

export type ButtonVariantProps = 'primary' | 'secondary' | 'danger' | 'sucess'

interface ButtonContainerProps {
  variant: ButtonVariantProps
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme.green};
`
