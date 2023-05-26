import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: max-content;
  margin: 3.5rem auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
  }
`

const BaseButtonCountdown = styled.button`
  width: 100%;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: background-color 0.2s;
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartButtonCountdown = styled(BaseButtonCountdown)`
  background-color: ${(props) => props.theme.green};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-dark']};
  }
`

export const StopButtonCountdown = styled(BaseButtonCountdown)`
  background-color: ${(props) => props.theme['status-red']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-dark']};
  }
`
