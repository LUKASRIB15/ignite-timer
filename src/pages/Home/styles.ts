import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: max-content;
  margin: 4.5rem auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
  }
`

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

export const CountdownContainer = styled.div`
  font-family: 'Roboto-mono', monospace;
  font-size: 10rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-600']};
    padding: 0rem 1rem;
    border-radius: 8px;
  }

  div {
    color: ${(props) => props.theme.green};
  }
`

export const StartButtonCountdown = styled.button`
  width: 100%;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  border: 0;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme.green};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-dark']};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
