import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Input, MainContainer, SaveButton, Titulo } from '../../styles'
import { Form, Opcoes } from './styles'
import * as enums from '../../utils/enums/task'

import { registerTask } from '../../store/reducers/tasksSlice'

export function Formulario() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Priority.NORMAL)

  function cadastrarTarefa(evento: FormEvent) {
    evento.preventDefault()

    dispatch(
      registerTask({
        title: titulo,
        description: descricao,
        priority: prioridade,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Input
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          type="text"
          placeholder="Título"
        />
        <Input
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          <input
            value={enums.Priority.URGENTE}
            type="radio"
            name="prioridade"
            id="urgente"
            onChange={(event) =>
              setPrioridade(event.target.value as enums.Priority)
            }
          />{' '}
          <label htmlFor="urgente">Urgente</label>
          <input
            value={enums.Priority.IMPORTANTE}
            type="radio"
            name="prioridade"
            id="importante"
            onChange={(event) =>
              setPrioridade(event.target.value as enums.Priority)
            }
          />{' '}
          <label htmlFor="importante">Importante</label>
          <input
            value={enums.Priority.NORMAL}
            type="radio"
            name="prioridade"
            id="normal"
            onChange={(event) =>
              setPrioridade(event.target.value as enums.Priority)
            }
            defaultChecked={prioridade === enums.Priority.NORMAL}
          />{' '}
          <label htmlFor="normal">Normal</label>
        </Opcoes>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </Form>
    </MainContainer>
  )
}
