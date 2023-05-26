import { styled } from 'styled-components'

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
