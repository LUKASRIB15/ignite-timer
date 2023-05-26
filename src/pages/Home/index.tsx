import {
  HomeContainer,
  StartButtonCountdown,
  StopButtonCountdown,
} from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { CycleContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'É importante dizer o nome da tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

// Criando uma interface baseada no schema que criamos acima
type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { interruptedCurrentCycle, createNewCycle, activeCycle } =
    useContext(CycleContext)
  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: newCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const taskInput = watch('task')
  const minutesAmountInput = watch('minutesAmount')

  const submitIsInvalid = !taskInput || !minutesAmountInput

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopButtonCountdown onClick={interruptedCurrentCycle} type="submit">
            <HandPalm size={24} />
            Interromper
          </StopButtonCountdown>
        ) : (
          <StartButtonCountdown disabled={submitIsInvalid} type="submit">
            <Play size={24} />
            Começar
          </StartButtonCountdown>
        )}
      </form>
    </HomeContainer>
  )
}
