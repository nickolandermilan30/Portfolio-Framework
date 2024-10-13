import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './TOP/Nabar.tsx'
import './CSS/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
