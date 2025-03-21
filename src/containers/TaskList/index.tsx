import { useSelector } from 'react-redux'

import { Task } from '../../components/Task'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

export function TaskList() {
  const tasks = useSelector((state: RootReducer) => state.tasks.itens)
  const { search, filterFor, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  function filteringTasks() {
    let filteredTasks = tasks

    if (search !== undefined) {
      filteredTasks = filteredTasks.filter(
        (task) => task.title.toLowerCase().search(search.toLowerCase()) >= 0
      )

      if (filterFor === 'priority') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value)
      } else if (filterFor === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value)
      }

      return filteredTasks
    } else {
      return tasks
    }
  }

  function filterResult(quantity: number) {
    let message = ''
    if (filterFor === 'all') {
      message = `${quantity} tarefa(s) encontrada(s) como: todas ${
        search !== undefined && search.length > 0 ? `e "${search}"` : ''
      }`
    } else {
      message = `${quantity} tarefa(s) encontrada(s) como: "${`${filterFor} = ${value}`}" ${
        search !== undefined && search.length > 0 ? `e "${search}"` : ''
      }`
    }
    return message
  }

  const tarefas = filteringTasks()
  const message = filterResult(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{message}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.title}>
            <Task
              description={t.description}
              title={t.title}
              priority={t.priority}
              status={t.status}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
