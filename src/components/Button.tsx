import { ButtonContainer, ButtonVariantProps } from './Button.styles'

export interface ButtonProps {
  variant?: ButtonVariantProps
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
