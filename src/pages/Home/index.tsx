import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  StartButtonCountdown,
  TaskInput,
} from './styles'
import { Play } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="amountMinutes">durante</label>
          <MinutesAmountInput
            type="number"
            id="amountMinutes"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <div>:</div>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartButtonCountdown type="submit">
          <Play size={24} />
          Começar
        </StartButtonCountdown>
      </form>
    </HomeContainer>
  )
}
