import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './feature/login/login-slice'
import counterReducer from './feature/counter/counter-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Login: loginReducer,
  },
});