import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RutasC from './rutas/RutasC.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RutasC/>
  </StrictMode>,
)