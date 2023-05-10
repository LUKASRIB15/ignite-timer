import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: max-content;
  margin: 5rem auto;
  border-radius: 8px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-700']};
`
