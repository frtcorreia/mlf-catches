import React from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  Profile,
  SignIn,
  UploadForm,
  Dashboard,
  NotFound,
  ListCatches,
  InsertCatch,
} from 'pages'
import { ProtectedRoutes, PublicRoutes } from 'helpers'

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="upload" element={<UploadForm />} />
          <Route path="insertCatch" element={<InsertCatch />} />
          <Route path="listCatches" element={<ListCatches />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route path="login" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  )
}
