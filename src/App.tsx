import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/global.css'

import {
  Profile,
  SignIn,
  UploadForm,
  Dashboard,
  NotFound,
  InsertCatch,
  DetailsCatch,
} from 'pages'

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="upload" element={<UploadForm />} />
        <Route path="insertCatch" element={<InsertCatch />} />
        <Route path="detailsCatch/:id" element={<DetailsCatch />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  )
}
