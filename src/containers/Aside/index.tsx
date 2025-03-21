import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { CardFilter } from '../../components/CardFilter'
import * as S from './styles'
import { Button, Input } from '../../styles'
import { RootReducer } from '../../store'
import { newSearch } from '../../store/reducers/filterSlice'
import * as enums from '../../utils/enums/task'

type Props = {
  showFilters: boolean
}

export function Aside({ showFilters }: Props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { search } = useSelector((state: RootReducer) => state.filter)
  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Input
              type="text"
              placeholder="Buscar"
              value={search}
              onChange={(e) => dispatch(newSearch(e.target.value))}
            />
            <S.Filters>
              <CardFilter
                value={enums.Status.PENDENTE}
                filterFor="status"
                label="pendentes"
              />
              <CardFilter
                value={enums.Status.CONCLUIDA}
                filterFor="status"
                label="concluídas"
              />
              <CardFilter
                value={enums.Priority.URGENTE}
                filterFor="priority"
                label="urgentes"
              />
              <CardFilter
                value={enums.Priority.IMPORTANTE}
                filterFor="priority"
                label="importantes"
              />
              <CardFilter
                value={enums.Priority.NORMAL}
                filterFor="priority"
                label="normal"
              />
              <CardFilter filterFor="all" label="todas" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')} type="button">
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}
