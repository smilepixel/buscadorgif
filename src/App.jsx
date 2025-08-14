import './App.css'
import { useState } from 'react'
import { api } from './api.js'
import { Secciongif } from './componentes/Secciongif.jsx'
import { Buscador } from './componentes/Buscador.jsx'

function App() {
          const [BUSQUEDA, setBUSQUEDA] = useState("");
api()
  return (
    <>
    <Buscador
    setBUSQUEDA={setBUSQUEDA}
    />
<Secciongif
BUSQUEDA={BUSQUEDA}
/>

    </>
  )
}

export default App
