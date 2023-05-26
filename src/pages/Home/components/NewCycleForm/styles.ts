import { styled } from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};
  border: 0;
  outline: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-400']};

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${(props) => props.theme['green-light']};
  }

  &::placeholder {
    text-align: center;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;
`
