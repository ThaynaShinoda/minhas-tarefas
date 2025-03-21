import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TasksObject } from '../../models/TaskObject'
import * as enums from '../../utils/enums/task'
type TasksState = {
  itens: TasksObject[]
}

const initialState: TasksState = {
  itens: [
    {
      title: 'Estudar TypeScript',
      description: 'Refazer aula 2',
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE,
      id: 1
    },
    {
      title: 'Estudar React',
      description: 'Ler documentação',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE,
      id: 2
    },
    {
      title: 'Estudar JS',
      description: 'Rever aula',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA,
      id: 3
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((task) => task.id !== action.payload)
      ]
    },
    editingTask: (state, action: PayloadAction<TasksObject>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    },
    registerTask: (state, action: PayloadAction<Omit<TasksObject, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const lastTask = state.itens[state.itens.length - 1]
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens.push(newTask)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0) {
        state.itens[indexTask].status = action.payload.finished
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { removeTask, editingTask, registerTask, changeStatus } =
  tasksSlice.actions
export default tasksSlice.reducer
