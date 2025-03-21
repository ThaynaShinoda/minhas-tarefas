import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/task'

type FilterState = {
  search?: string
  filterFor: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  search: '',
  filterFor: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    newSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    modifyFilter: (state, action: PayloadAction<FilterState>) => {
      state.filterFor = action.payload.filterFor
      state.value = action.payload.value
    }
  }
})

export const { newSearch, modifyFilter } = filterSlice.actions
export default filterSlice.reducer
