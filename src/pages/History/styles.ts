import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-500']};
      text-align: left;
      padding: 1rem 1.5rem;
      font-size: 0.75rem;
      line-height: 1.6;

      &:nth-child(1) {
        border-top-left-radius: 8px;
      }

      &:nth-child(4) {
        border-top-right-radius: 8px;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-200']};
      text-align: left;
      padding: 1rem 1.5rem;
      font-size: 0.75rem;
      border-top: 4px solid ${(props) => props.theme['gray-700']};

      &:first-child {
        width: 50%;
      }
    }
  }
`

const STATUS_VARIANT = {
  success: 'status-green',
  progress: 'status-yellow',
  danger: 'status-red',
}

interface StatusProps {
  variant: keyof typeof STATUS_VARIANT
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    display: block;
    border-radius: 999px;
    background-color: ${(props) => props.theme[STATUS_VARIANT[props.variant]]};
  }
`
