import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'Login',
  initialState: {
    name: 'Ramdom name',
  },
  reducers: {
    NewName: (state, object) => {
      state.name = object.payload.email
      console.log(object)
    },
  },
})


export const { NewName } = counterSlice.actions

export default counterSlice.reducer