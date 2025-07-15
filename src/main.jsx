import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Buscador } from './componentes/Buscador.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Buscador />
  </StrictMode>,
)
