import { configureStore } from '@reduxjs/toolkit'

import authSlicer from './Auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlicer,
  },
})

export type RootState = ReturnType<typeof store.getState>
