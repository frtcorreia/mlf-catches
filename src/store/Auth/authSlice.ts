import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface InitialStateUserProps {
  user?: string
  isLogged?: boolean
}

const stateInitial: InitialStateUserProps = {
  user: '',
  isLogged: false,
}

const slice = createSlice({
  name: 'user',
  initialState: stateInitial,
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, user: payload }
    },
    logout(state) {
      return { ...state, isLogged: false, user: '' }
    },
  },
})

export const { changeUser, logout } = slice.actions

export const selectUser = (state: RootState) => state.auth

export default slice.reducer
