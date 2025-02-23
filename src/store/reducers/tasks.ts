import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TasksObject } from '../../models/TaskObject'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new TasksObject(
      'Estudar TypeScript',
      'Refazer aula 2',
      'urgente',
      'pendente',
      1
    ),
    new TasksObject(
      'Estudar React',
      'Ler documentação',
      'importante',
      'pendente',
      2
    ),
    new TasksObject('Estudar JS', 'Rever aula', 'urgente', 'concluído', 3)
  ],
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { removeTask } = tasksSlice.actions
export default tasksSlice.reducer
