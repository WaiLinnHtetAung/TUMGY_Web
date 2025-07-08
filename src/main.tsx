import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/app.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider future={{v7_startTransition:true}} router={router} />
  </React.StrictMode>,
)
