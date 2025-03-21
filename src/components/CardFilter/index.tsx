import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { modifyFilter } from '../../store/reducers/filterSlice'
import * as enums from '../../utils/enums/task'
import { RootReducer } from '../../store'

export type Props = {
  label: string
  filterFor: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

export function CardFilter({ label, filterFor, value }: Props) {
  const dispatch = useDispatch()

  // const { filter, tasks } = useSelector((state: RootReducer) => state)
  const filter = useSelector((state: RootReducer) => state.filter)
  const tasks = useSelector((state: RootReducer) => state.tasks)

  function isActive() {
    const sameFilterFor = filter.filterFor === filterFor
    const sameValue = filter.value === value

    return sameFilterFor && sameValue
  }

  function filtering() {
    dispatch(
      modifyFilter({
        filterFor,
        value
      })
    )
  }

  function countTasks() {
    if (filterFor === 'all') return tasks.itens.length
    if (filterFor === 'priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (filterFor === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }

  const active = isActive()
  const counter = countTasks()
  return (
    <S.Card $active={active} onClick={filtering}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}
