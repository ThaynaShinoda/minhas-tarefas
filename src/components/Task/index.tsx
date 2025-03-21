import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import {
  removeTask,
  editingTask,
  changeStatus
} from '../../store/reducers/tasksSlice'
import { TasksObject } from '../../models/TaskObject'
import { Button, SaveButton } from '../../styles'
import * as enums from '../../utils/enums/task'

type Props = TasksObject

export function Task({
  title,
  priority,
  status,
  description: originalDescription,
  id
}: Props) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  function cancelEdition() {
    setIsEditing(false)
    setDescription(originalDescription)
  }

  function changeStatusTask(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeStatus({
        id,
        finished: event.target.checked
      })
    )
  }
  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.CONCLUIDA}
          onChange={changeStatusTask}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag $priority={priority}>{priority}</S.Tag>
      <S.Tag $status={status}>{status}</S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  editingTask({
                    title,
                    priority,
                    status,
                    description,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </SaveButton>
            <S.CancelRemoveButton onClick={cancelEdition}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.CancelRemoveButton onClick={() => dispatch(removeTask(id))}>
              Remover
            </S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
