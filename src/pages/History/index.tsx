import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CycleContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CycleContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              const cycleDate = formatDistanceToNow(new Date(cycle.startDate), {
                addSuffix: true,
                locale: ptBR,
              })
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>{cycleDate}</td>
                  <td>
                    {cycle.finishedDate && (
                      <Status variant="success">Concluído</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status variant="danger">Interrompido</Status>
                    )}

                    {!cycle.interruptedDate && !cycle.finishedDate && (
                      <Status variant="progress">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
