import { ButtonAdicionar } from '../../components/ButtonAdicionar'
import { Aside } from '../../containers/Aside'
import { TaskList } from '../../containers/TaskList'

export function Home() {
  return (
    <>
      <Aside showFilters />
      <TaskList />
      <ButtonAdicionar />
    </>
  )
}
