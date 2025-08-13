import './App.css'
import { api } from './api.js'
import { Secciongif } from './componentes/Secciongif.jsx'
import { Buscador } from './componentes/Buscador.jsx'

function App() {
          const [BUSQUEDA, setBUSQUEDA] = useState("");
api()
  return (
    <>
    <Buscador/>
            <Secciongif></Secciongif>
    </>
  )
}

export default App
