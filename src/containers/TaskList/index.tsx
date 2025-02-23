import { useSelector } from 'react-redux'
import { Task } from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

export function TaskList() {
  const tasks = useSelector((state: RootReducer) => state.tasks)
  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              description={t.description}
              title={t.title}
              priority={t.priority}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
