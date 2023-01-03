import { createSlice, configureStore } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
   collapse: false


  },
  reducers: {
    setCollapse: (state, action) => {
      state.collapse = action.payload
    }
  }
})

export const { setCollapse} = appSlice.actions

export default appSlice.reducer